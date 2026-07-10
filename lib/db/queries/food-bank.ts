import { db } from '../index'
import { foodBankRequests } from '../schema'
import { eq } from 'drizzle-orm'

export async function createFoodBankRequest(data: {
  referenceCode: string
  benefactorType: 'new' | 'existing'
  parcelSize: 'one' | 'two' | 'four' | 'other'
  parcelSizeOther?: string
  name: string
  phone: string
  email: string
}) {
  const [row] = await db.insert(foodBankRequests).values(data).returning()
  return row
}

export async function getFoodBankRequests() {
  return db.query.foodBankRequests.findMany({
    orderBy: (f, { desc }) => [desc(f.createdAt)],
  })
}

export async function getFoodBankRequestById(id: string) {
  return db.query.foodBankRequests.findFirst({
    where: eq(foodBankRequests.id, id),
  })
}

export async function updateFoodBankStatus(
  id: string,
  status: 'pending' | 'approved' | 'collected' | 'cancelled',
) {
  const [row] = await db
    .update(foodBankRequests)
    .set({ status })
    .where(eq(foodBankRequests.id, id))
    .returning()
  return row
}

export async function getFoodBankStats() {
  const all = await db.select({ id: foodBankRequests.id, status: foodBankRequests.status }).from(foodBankRequests)
  return {
    total: all.length,
    pending: all.filter((r) => r.status === 'pending').length,
    collected: all.filter((r) => r.status === 'collected').length,
  }
}
