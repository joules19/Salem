import { cn } from '@/lib/utils'
import type { CSSProperties } from 'react'

interface Props {
  children: React.ReactNode
  className?: string
  style?: CSSProperties
}

export default function SectionEyebrow({ children, className, style }: Props) {
  return (
    <div className={cn('section-eyebrow', className)} style={style}>
      {children}
    </div>
  )
}
