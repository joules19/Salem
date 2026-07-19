import { redirect } from 'next/navigation'

export default function AdminRoot() {
  redirect('/control/dashboard')
}
