import { db } from '../index'
import { users, roles } from '../schema'
import { eq } from 'drizzle-orm'

export async function getUserByEmail(email: string) {
  return db.query.users.findFirst({
    where: eq(users.email, email.toLowerCase()),
    with: { role: true },
  })
}

export async function getUserById(id: string) {
  return db.query.users.findFirst({
    where: eq(users.id, id),
    with: { role: true },
  })
}

export async function getAllUsers() {
  return db.query.users.findMany({
    with: { role: true },
    orderBy: (u, { desc }) => [desc(u.createdAt)],
  })
}

export async function getAllRoles() {
  return db.query.roles.findMany({ orderBy: (r, { asc }) => [asc(r.name)] })
}

export async function createUserProfile(data: {
  id: string       // Supabase auth.users UUID
  name: string
  email: string
  roleId: string
}) {
  const [user] = await db
    .insert(users)
    .values({ ...data, email: data.email.toLowerCase() })
    .returning()
  return user
}

export async function updateUserRole(id: string, roleId: string) {
  const [user] = await db
    .update(users)
    .set({ roleId, updatedAt: new Date() })
    .where(eq(users.id, id))
    .returning()
  return user
}

export async function toggleUserActive(id: string, isActive: boolean) {
  const [user] = await db
    .update(users)
    .set({ isActive, updatedAt: new Date() })
    .where(eq(users.id, id))
    .returning()
  return user
}
