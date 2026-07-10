import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { updateFoodBankStatus } from '@/lib/db/queries/food-bank'
import { logActivity, getIpFromRequest } from '@/lib/db/audit'
import { z } from 'zod'

const schema = z.object({ status: z.enum(['pending', 'approved', 'collected', 'cancelled']) })

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { id } = await params
  const body = await req.json().catch(() => null)
  const parsed = schema.safeParse(body)
  if (!parsed.success) return NextResponse.json({ error: 'Invalid status' }, { status: 422 })

  const row = await updateFoodBankStatus(id, parsed.data.status)
  await logActivity({
    userId: user.id,
    action: 'submission.status_changed',
    entity: 'food_bank_request',
    entityId: id,
    payload: { status: parsed.data.status },
    ipAddress: getIpFromRequest(req),
  })

  return NextResponse.json({ success: true, row })
}
