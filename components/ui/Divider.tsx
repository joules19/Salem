import { cn } from '@/lib/utils'

interface Props {
  variant?: 'gold' | 'purple'
  className?: string
}

export default function Divider({ variant = 'gold', className }: Props) {
  return (
    <div
      className={cn(
        variant === 'gold' ? 'divider-gold' : 'divider-purple',
        className
      )}
      role="separator"
      aria-hidden
    />
  )
}
