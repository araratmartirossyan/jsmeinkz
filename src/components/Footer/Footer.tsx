import React from 'react'

import { FooterNavLink } from './FooterNavLink'
import { FooterSocialMedia } from './FooterSocialMedia'

export const Footer = () => {
  return (
    <footer className="w-full">
      <div className="mt-20 sm:pt-10 pt-5 sm:pb-10 pb-5 border-t">
        <div className="max-w-3xl mx-auto">
          <FooterNavLink />
          <FooterSocialMedia />
          <p className="flex flex-row justify-center mx-auto my-4 space-x-4 sm:text-xl text-gray-200 text-xs ">
            © 2019-2022 JobsInJS.com. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
