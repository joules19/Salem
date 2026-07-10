import { db } from '../index'
import { prayerRequests } from '../schema'
import { eq } from 'drizzle-orm'

export async function createPrayerRequest(data: {
  name: string
  email: string
  message: string
}) {
  const [row] = await db.insert(prayerRequests).values(data).returning()
  return row
}

export async function getPrayerRequests() {
  return db.query.prayerRequests.findMany({
    orderBy: (p, { desc }) => [desc(p.createdAt)],
  })
}

export async function getPrayerRequestById(id: string) {
  return db.query.prayerRequests.findFirst({
    where: eq(prayerRequests.id, id),
  })
}

export async function updatePrayerStatus(id: string, status: 'new' | 'read' | 'prayed') {
  const [row] = await db
    .update(prayerRequests)
    .set({ status })
    .where(eq(prayerRequests.id, id))
    .returning()
  return row
}

export async function getPrayerStats() {
  const all = await db.select({ id: prayerRequests.id, status: prayerRequests.status }).from(prayerRequests)
  return {
    total: all.length,
    new: all.filter((r) => r.status === 'new').length,
    prayed: all.filter((r) => r.status === 'prayed').length,
  }
}
