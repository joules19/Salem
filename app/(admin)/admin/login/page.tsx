import LoginForm from './LoginForm'

const NOTICES: Record<string, string> = {
  inactive: 'Your account has been deactivated. Contact an administrator.',
  timeout:  'You were signed out due to inactivity. Please sign in again.',
}

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>
}) {
  const { error } = await searchParams
  const notice = error ? NOTICES[error] : undefined

  return <LoginForm notice={notice} />
}
