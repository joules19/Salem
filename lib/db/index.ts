import postgres from 'postgres'
import { drizzle } from 'drizzle-orm/postgres-js'
import * as schema from './schema'

// Use the Transaction Pooler URL from Supabase for serverless/edge compatibility
const client = postgres(process.env.DATABASE_URL!, { prepare: false, ssl: 'require' })
export const db = drizzle(client, { schema })

export type DB = typeof db
