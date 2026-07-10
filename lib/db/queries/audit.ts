import { db } from '../index'
import { auditLogs } from '../schema'
import { desc } from 'drizzle-orm'

export async function getAuditLogs() {
  return db.query.auditLogs.findMany({
    with: { user: { columns: { id: true, name: true, email: true } } },
    orderBy: (a, { desc }) => [desc(a.createdAt)],
    limit: 500,
  })
}
