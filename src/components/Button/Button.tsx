import React from 'react'

interface ButtonProps {
  className?: string
  children?: JSX.Element | string
  onClick?: () => void
  disabled?: boolean
}

export const Button = ({
  className,
  children,
  onClick,
  disabled,
}: ButtonProps) => (
  <button className={className} onClick={onClick} disabled={disabled}>
    {children}
  </button>
)
