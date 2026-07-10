import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { updatePrayerStatus } from '@/lib/db/queries/prayer'
import { logActivity, getIpFromRequest } from '@/lib/db/audit'
import { z } from 'zod'

const schema = z.object({ status: z.enum(['new', 'read', 'prayed']) })

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { id } = await params
  const body = await req.json().catch(() => null)
  const parsed = schema.safeParse(body)
  if (!parsed.success) return NextResponse.json({ error: 'Invalid status' }, { status: 422 })

  const row = await updatePrayerStatus(id, parsed.data.status)
  await logActivity({
    userId: user.id,
    action: 'submission.status_changed',
    entity: 'prayer_request',
    entityId: id,
    payload: { status: parsed.data.status },
    ipAddress: getIpFromRequest(req),
  })

  return NextResponse.json({ success: true, row })
}
