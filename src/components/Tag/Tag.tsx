import React from 'react'

type TagProps = {
  children: JSX.Element | string
}
export const Tag = ({ children }: TagProps) => {
  return (
    <div className="rounded p-2 border mr-2 border-blue-600 text-blue-600  cursor-pointer uppercase text-sm font-bold hover:bg-blue-500 hover:text-white hover:shadow text-center">
      {children}
    </div>
  )
}
