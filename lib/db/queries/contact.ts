import { db } from '../index'
import { contactSubmissions } from '../schema'
import { eq, desc, count, and, or, ilike } from 'drizzle-orm'

export async function createContactSubmission(data: {
  firstName: string
  lastName: string
  email: string
  subject?: string
  message: string
}) {
  const [row] = await db.insert(contactSubmissions).values(data).returning()
  return row
}

export async function getContactSubmissions(opts?: { search?: string; status?: string }) {
  const q = db.query.contactSubmissions.findMany({
    orderBy: (c, { desc }) => [desc(c.createdAt)],
  })
  return q
}

export async function getContactSubmissionById(id: string) {
  return db.query.contactSubmissions.findFirst({
    where: eq(contactSubmissions.id, id),
  })
}

export async function updateContactStatus(
  id: string,
  status: 'new' | 'read' | 'replied',
) {
  const [row] = await db
    .update(contactSubmissions)
    .set({ status })
    .where(eq(contactSubmissions.id, id))
    .returning()
  return row
}

export async function getContactStats() {
  const all = await db.select({ id: contactSubmissions.id, status: contactSubmissions.status }).from(contactSubmissions)
  return {
    total: all.length,
    new: all.filter((r) => r.status === 'new').length,
    replied: all.filter((r) => r.status === 'replied').length,
  }
}
