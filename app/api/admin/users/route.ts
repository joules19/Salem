import { NextRequest, NextResponse } from 'next/server'
import { createClient, createAdminClient } from '@/lib/supabase/server'
import { createUserProfile, getAllRoles, getUserById } from '@/lib/db/queries/users'
import { logActivity, getIpFromRequest } from '@/lib/db/audit'
import { resend, FROM } from '@/lib/email/resend'
import { render } from '@react-email/components'
import WelcomeEmail from '@/lib/email/templates/welcome'
import { z } from 'zod'
import type { Role } from '@/lib/db/schema'

const schema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  password: z.string().min(8),
  roleId: z.string().uuid(),
})

export async function POST(req: NextRequest) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  const profile = await getUserById(user.id)
  if (!profile || (profile.role as Role).name !== 'super_admin') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  const body = await req.json().catch(() => null)
  const parsed = schema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid input' }, { status: 422 })
  }

  const roles = await getAllRoles()
  const role = roles.find((r) => r.id === parsed.data.roleId)
  if (!role) return NextResponse.json({ error: 'Invalid role' }, { status: 422 })

  // Create Supabase Auth user first
  const adminClient = createAdminClient()
  const { data: authData, error: authError } = await adminClient.auth.admin.createUser({
    email: parsed.data.email,
    password: parsed.data.password,
    email_confirm: true,
  })

  if (authError || !authData.user) {
    if (authError?.message?.toLowerCase().includes('already registered')) {
      return NextResponse.json({ error: 'Email already exists' }, { status: 409 })
    }
    console.error('Supabase createUser error:', authError)
    return NextResponse.json({ error: 'Failed to create user' }, { status: 500 })
  }

  try {
    const dbUser = await createUserProfile({
      id: authData.user.id,
      name: parsed.data.name,
      email: parsed.data.email,
      roleId: parsed.data.roleId,
    })

    await logActivity({
      userId: profile.id,
      action: 'user.created',
      entity: 'user',
      entityId: dbUser.id,
      payload: { name: dbUser.name, email: dbUser.email, role: role.name },
      ipAddress: getIpFromRequest(req),
    })

    const loginUrl = `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://salemeurope.org'}/admin/login`
    await resend.emails.send({
      from: FROM,
      to: dbUser.email,
      subject: 'Salem Admin — Your Access Details',
      react: WelcomeEmail({
        name: dbUser.name,
        email: dbUser.email,
        tempPassword: parsed.data.password,
        roleLabel: role.label,
        loginUrl,
      }),
    })

    return NextResponse.json({ success: true, id: dbUser.id })
  } catch (err: unknown) {
    // Roll back Supabase auth user if DB insert fails
    await adminClient.auth.admin.deleteUser(authData.user.id).catch(() => {})
    if (err instanceof Error && err.message.includes('unique')) {
      return NextResponse.json({ error: 'Email already exists' }, { status: 409 })
    }
    return NextResponse.json({ error: 'Failed to create user' }, { status: 500 })
  }
}
