import React from 'react'

import { FooterNavLink } from './FooterNavLink'
import { FooterSocialMedia } from './FooterSocialMedia'

export const Footer = () => {
  return (
    <footer className="w-full">
      <div className="mt-20 pt-10 pb-10 border-t">
        <div className="max-w-3xl mx-auto">
          <FooterNavLink />
          <FooterSocialMedia />
          <p className="flex flex-row justify-center mx-auto my-4 space-x-4 text-xl text-gray-200  ">
            © 2019-2022 JobsInJS.com. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
