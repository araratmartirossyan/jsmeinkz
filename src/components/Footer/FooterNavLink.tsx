import React from 'react'
import { NavLink } from 'react-router-dom'

export const FooterNavLink = () => {
  return (
    <div className="flex flex-col justify-center items-center mx-auto sm:my-4 my-2 space-y-4">
      <NavLink
        to="/job/create"
        className="sm:text-lg decoration-solid text-green-400 underline"
      >
        Post your job for $95
      </NavLink>
      <NavLink
        to="/"
        className="sm:text-lg decoration-solid text-green-400 underline"
      >
        Job Sites for Software Developers
      </NavLink>
    </div>
  )
}
