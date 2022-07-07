import React from 'react'

import Twitter from '../../assets/twitter.svg'
import Linked from '../../assets/linked.svg'
import Instagram from '../../assets/instagram.svg'

export const FooterSocialMedia = () => {
  return (
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
  )
}
