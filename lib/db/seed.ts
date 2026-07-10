import { config } from 'dotenv'
config({ path: '.env' })

import { createClient } from '@supabase/supabase-js'

const ADMIN_EMAIL = 'admin@salemeurope.org'
const ADMIN_PASSWORD = 'Admin@Salem1!'

async function seed() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

  if (!supabaseUrl || !serviceKey) {
    console.error('Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env')
    process.exit(1)
  }

  const client = createClient(supabaseUrl, serviceKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  })

  // ── 1. Seed roles ─────────────────────────────────────────────────────────
  console.log('Seeding roles...')
  const { error: rolesError } = await client.from('roles').upsert(
    [
      { name: 'super_admin', label: 'Super Admin', permissions: { users: true, submissions: true, auditLog: true, settings: true } },
      { name: 'admin',       label: 'Admin',       permissions: { users: false, submissions: true, auditLog: false, settings: false } },
      { name: 'member',      label: 'Member',      permissions: { users: false, submissions: false, auditLog: false, settings: false } },
    ],
    { onConflict: 'name', ignoreDuplicates: true },
  )
  if (rolesError) { console.error('Roles error:', rolesError.message); process.exit(1) }

  // ── 2. Fetch super_admin role id ──────────────────────────────────────────
  const { data: saRole, error: roleQueryError } = await client
    .from('roles')
    .select('id')
    .eq('name', 'super_admin')
    .single()
  if (roleQueryError || !saRole) { console.error('Could not fetch super_admin role'); process.exit(1) }

  // ── 3. Create Supabase Auth user ──────────────────────────────────────────
  console.log('Creating super admin in Supabase Auth...')
  const { data: authData, error: authError } = await client.auth.admin.createUser({
    email: ADMIN_EMAIL,
    password: ADMIN_PASSWORD,
    email_confirm: true,
  })
  if (authError) {
    console.error('Auth error:', authError.message)
    process.exit(1)
  }

  // ── 4. Insert user profile ─────────────────────────────────────────────────
  const { error: profileError } = await client.from('users').upsert(
    { id: authData.user.id, name: 'Salem Admin', email: ADMIN_EMAIL, role_id: saRole.id },
    { onConflict: 'id', ignoreDuplicates: true },
  )
  if (profileError) { console.error('Profile error:', profileError.message); process.exit(1) }

  console.log(`\nDone! Super admin: ${ADMIN_EMAIL} / ${ADMIN_PASSWORD}`)
  console.log('IMPORTANT: Change this password immediately after first login.')
  process.exit(0)
}

seed().catch((e) => { console.error(e); process.exit(1) })
