import { NextRequest, NextResponse } from 'next/server'
import { createClient, createAdminClient } from '@/lib/supabase/server'
import { updateUserRole, toggleUserActive, getUserById } from '@/lib/db/queries/users'
import { logActivity, getIpFromRequest } from '@/lib/db/audit'
import { resend, FROM } from '@/lib/email/resend'
import { z } from 'zod'
import type { Role } from '@/lib/db/schema'

const schema = z.object({
  roleId: z.string().uuid().optional(),
  password: z.string().min(8).optional(),
  isActive: z.boolean().optional(),
})

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  const callerProfile = await getUserById(user.id)
  if (!callerProfile || (callerProfile.role as Role).name !== 'super_admin') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  const { id } = await params
  const body = await req.json().catch(() => null)
  const parsed = schema.safeParse(body)
  if (!parsed.success) return NextResponse.json({ error: 'Invalid input' }, { status: 422 })

  const target = await getUserById(id)
  if (!target) return NextResponse.json({ error: 'Not found' }, { status: 404 })

  if (typeof parsed.data.isActive === 'boolean' && id === callerProfile.id) {
    return NextResponse.json({ error: 'You cannot change your own active status' }, { status: 403 })
  }

  if (parsed.data.roleId) {
    await updateUserRole(id, parsed.data.roleId)
    await logActivity({
      userId: callerProfile.id,
      action: 'user.role_updated',
      entity: 'user',
      entityId: id,
      payload: { from: target.roleId, to: parsed.data.roleId },
      ipAddress: getIpFromRequest(req),
    })
  }

  if (parsed.data.password) {
    const adminClient = createAdminClient()
    await adminClient.auth.admin.updateUserById(id, { password: parsed.data.password })

    await logActivity({
      userId: callerProfile.id,
      action: 'user.password_reset',
      entity: 'user',
      entityId: id,
      ipAddress: getIpFromRequest(req),
    })

    await resend.emails.send({
      from: FROM,
      to: target.email,
      subject: 'Your Salem Admin password has been reset',
      html: `<p>Your password has been reset. Your new temporary password is: <strong>${parsed.data.password}</strong></p><p>Please change it after logging in.</p>`,
    })
  }

  if (typeof parsed.data.isActive === 'boolean') {
    await toggleUserActive(id, parsed.data.isActive)
    await logActivity({
      userId: callerProfile.id,
      action: parsed.data.isActive ? 'user.activated' : 'user.deactivated',
      entity: 'user',
      entityId: id,
      ipAddress: getIpFromRequest(req),
    })
  }

  return NextResponse.json({ success: true })
}
