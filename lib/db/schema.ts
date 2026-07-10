import {
  pgTable,
  uuid,
  text,
  timestamp,
  jsonb,
  boolean,
} from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'

// ── Roles ────────────────────────────────────────────────────────────────────

export const roles = pgTable('roles', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull().unique(), // 'super_admin' | 'admin' | 'member'
  label: text('label').notNull(),
  permissions: jsonb('permissions').notNull().default({}),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
})

// ── Users (mirrors auth.users from Supabase) ─────────────────────────────────
// id matches the Supabase auth.users UUID — no password stored here.
// Supabase owns authentication; this table owns roles & profile data.

export const users = pgTable('users', {
  id: uuid('id').primaryKey(), // same UUID as auth.users.id
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  roleId: uuid('role_id').notNull().references(() => roles.id),
  avatarUrl: text('avatar_url'),
  isActive: boolean('is_active').notNull().default(true),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
})

// ── Contact Submissions ───────────────────────────────────────────────────────

export const contactSubmissions = pgTable('contact_submissions', {
  id: uuid('id').primaryKey().defaultRandom(),
  firstName: text('first_name').notNull(),
  lastName: text('last_name').notNull(),
  email: text('email').notNull(),
  subject: text('subject'),
  message: text('message').notNull(),
  status: text('status', { enum: ['new', 'read', 'replied'] }).notNull().default('new'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
})

// ── Prayer Requests ───────────────────────────────────────────────────────────

export const prayerRequests = pgTable('prayer_requests', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  message: text('message').notNull(),
  status: text('status', { enum: ['new', 'read', 'prayed'] }).notNull().default('new'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
})

// ── Food Bank Requests ────────────────────────────────────────────────────────

export const foodBankRequests = pgTable('food_bank_requests', {
  id: uuid('id').primaryKey().defaultRandom(),
  referenceCode: text('reference_code').notNull().unique(),
  benefactorType: text('benefactor_type', { enum: ['new', 'existing'] }).notNull(),
  parcelSize: text('parcel_size', { enum: ['one', 'two', 'four', 'other'] }).notNull(),
  parcelSizeOther: text('parcel_size_other'),
  name: text('name').notNull(),
  phone: text('phone').notNull(),
  email: text('email').notNull(),
  status: text('status', { enum: ['pending', 'approved', 'collected', 'cancelled'] })
    .notNull()
    .default('pending'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
})

// ── Audit Logs ────────────────────────────────────────────────────────────────

export const auditLogs = pgTable('audit_logs', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id, { onDelete: 'set null' }),
  action: text('action').notNull(),
  entity: text('entity').notNull(),
  entityId: text('entity_id'),
  payload: jsonb('payload'),
  ipAddress: text('ip_address'),
  userAgent: text('user_agent'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
})

// ── Relations ─────────────────────────────────────────────────────────────────

export const rolesRelations = relations(roles, ({ many }) => ({
  users: many(users),
}))

export const usersRelations = relations(users, ({ one }) => ({
  role: one(roles, { fields: [users.roleId], references: [roles.id] }),
}))

export const auditLogsRelations = relations(auditLogs, ({ one }) => ({
  user: one(users, { fields: [auditLogs.userId], references: [users.id] }),
}))

// ── Types ─────────────────────────────────────────────────────────────────────

export type Role = typeof roles.$inferSelect
export type User = typeof users.$inferSelect
export type NewUser = typeof users.$inferInsert
export type ContactSubmission = typeof contactSubmissions.$inferSelect
export type PrayerRequest = typeof prayerRequests.$inferSelect
export type FoodBankRequest = typeof foodBankRequests.$inferSelect
export type AuditLog = typeof auditLogs.$inferSelect
