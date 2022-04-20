import React from 'react'

type PageProps = {
  children: JSX.Element | string | number | JSX.Element[]
}

export const Page = ({ children }: PageProps) => (
  <div className="w-screen">
    <div className="px-6 py-8 mx-auto justify-center items-center flex flex-col">
      {children}
    </div>
  </div>
)
