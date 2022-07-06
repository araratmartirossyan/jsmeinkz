import React from 'react'
import Twitter from '../../assets/twitter.svg'
import Linked from '../../assets/linked.svg'
import Instagram from '../../assets/instagram.svg'

import { NavLink } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className="w-full">
      <div className="mt-20 pt-10 pb-10 border-t">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-row justify-center mx-auto my-4 space-x-4">
            <NavLink
              to="/job/create"
              className="text-lg decoration-solid text-green-400 underline"
            >
              Post your job for $95
            </NavLink>
          </div>
          <div className="flex flex-row justify-center mx-auto my-4 space-x-4">
            <NavLink
              to="/"
              className="text-lg decoration-solid text-green-400 underline"
            >
              Job Sites for Software Developers
            </NavLink>
          </div>
          <div className="flex flex-row justify-center mx-auto">
            <div className="mx-4 my-4 w-10 h-10">
              <a href="/">
                <img src={Twitter}></img>
              </a>
            </div>
            <div className="mx-4 my-4 w-10 h-10">
              <a href="/">
                <img src={Linked}></img>
              </a>
            </div>
            <div className="mx-4 my-4 w-10 h-10">
              <a href="/">
                <img src={Instagram}></img>
              </a>
            </div>
          </div>
          <div className="flex flex-row justify-center mx-auto my-4 space-x-4 text-xl text-gray-200  ">
            © 2019-2022 JobsInJS.com. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
