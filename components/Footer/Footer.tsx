import React from 'react'
import {SocialLinks} from '../SocialLinks'

export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer__container">
        <div className="site-footer__container--copyright">
          <h6>&copy; copyright 2021</h6>
        </div>
        <div className="site-footer__container--social">
          <SocialLinks />
        </div>
      </div>
    </footer>
  )
}
