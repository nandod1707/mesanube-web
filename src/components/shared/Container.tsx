import React from 'react'

type Size = 'default' | 'narrow' | 'mid'

type ContainerProps = {
  children: React.ReactNode
  size?: Size
  className?: string
}

const maxWidthVars: Record<Size, string> = {
  default: 'var(--container-max)',
  narrow: 'var(--container-max-narrow)',
  mid: 'var(--container-max-mid)',
}

export function Container({ children, size = 'default', className }: ContainerProps) {
  return (
    <div
      className={['mx-auto w-full', className].filter(Boolean).join(' ')}
      style={{ maxWidth: maxWidthVars[size] }}
    >
      {children}
    </div>
  )
}
