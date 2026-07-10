import { db } from './index'
import { auditLogs } from './schema'

interface LogActivityParams {
  userId?: string | null
  action: string
  entity: string
  entityId?: string | null
  payload?: Record<string, unknown> | null
  ipAddress?: string | null
  userAgent?: string | null
}

export async function logActivity(params: LogActivityParams) {
  try {
    await db.insert(auditLogs).values({
      userId: params.userId ?? null,
      action: params.action,
      entity: params.entity,
      entityId: params.entityId ?? null,
      payload: params.payload ?? null,
      ipAddress: params.ipAddress ?? null,
      userAgent: params.userAgent ?? null,
    })
  } catch (err) {
    // Audit logging must never crash the main request
    console.error('[audit] failed to log activity:', err)
  }
}

export function getIpFromRequest(req: Request): string {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    req.headers.get('x-real-ip') ??
    'unknown'
  )
}
