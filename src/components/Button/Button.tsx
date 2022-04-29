import React from 'react'

interface ButtonProps {
  className?: string
  children?: JSX.Element | string
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export const Button = ({
  className,
  children,
  onClick,
  disabled,
  type = 'button',
}: ButtonProps) => (
  <button
    type={type}
    className={className}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
)
