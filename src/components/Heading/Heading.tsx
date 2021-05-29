import React from 'react'
import './Heading.css'

type HeadingProps = {
  tag: string
  children?: JSX.Element | string | number
  props?: JSX.ElementAttributesProperty
  className?: string
}

export const Heading: React.FC<HeadingProps> = ({
  tag,
  children,
  props,
  className,
}: HeadingProps) => {
  return React.createElement(tag, { ...props, className }, children)
}
