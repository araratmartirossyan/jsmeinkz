import React, { FC, InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode
  value?: string
  type?: string
  placeholder?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
  onClick?: () => void
  disabled?: boolean
  name?: string
  autoComplete?: 'on' | 'off'
  errored?: boolean
  error?: string
}

export const Input: FC<InputProps> = ({
  label,
  value,
  name,
  type,
  placeholder = '',
  onChange,
  onFocus,
  onBlur,
  onClick,
  disabled = false,
  autoFocus = false,
  errored = false,
  error,
  autoComplete = 'off',
  ...rest
}) => {
  return (
    <div onClick={onClick} className="w-full">
      {label && <label>{label}</label>}
      {errored && <span className="text-red-400">{error}</span>}

      <input
        className="rounded bg-gray-600 h-14 pl-2 focus:no-underline focus:border-0 placeholder-gray-400 text-gray text-gray-200 focus:outline-none w-full"
        autoComplete={autoComplete}
        type={type}
        value={value}
        name={name}
        onFocus={onFocus}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        placeholder={placeholder}
        autoFocus={autoFocus}
        {...rest}
      />
    </div>
  )
}
