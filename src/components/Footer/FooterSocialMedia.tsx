import React from 'react'

export const FooterSocialMedia = ({ socialIcon }: any) => {
  return (
    <div className="mx-4 my-4 w-10 h-10">
      <a href="/">
        <img src={socialIcon}></img>
      </a>
    </div>
  )
}
