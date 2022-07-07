import React from 'react'
import { NavLink } from 'react-router-dom'

export const FooterNavLink = ({ text }: any) => {
  return (
    <div className="flex flex-row justify-center mx-auto my-4 space-x-4">
      <NavLink
        to="/job/create"
        className="text-lg decoration-solid text-green-400 underline"
      >
        {text}
      </NavLink>
    </div>
  )
}
