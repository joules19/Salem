import Link from 'next/link'
import { cn } from '@/lib/utils'

type Variant = 'gold' | 'ghost' | 'purple'

interface ButtonProps {
  variant?: Variant
  href?: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  'aria-label'?: string
}

export default function Button({
  variant = 'gold',
  href,
  children,
  className,
  onClick,
  type = 'button',
  'aria-label': ariaLabel,
}: ButtonProps) {
  const cls = cn(
    variant === 'gold' && 'btn-gold',
    variant === 'ghost' && 'btn-ghost',
    variant === 'purple' && 'btn-purple',
    className
  )

  if (href) {
    const isExternal = href.startsWith('http')
    return (
      <Link
        href={href}
        className={cls}
        aria-label={ariaLabel}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={cls} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </button>
  )
}
