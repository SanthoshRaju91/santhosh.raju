import React from 'react'
import Image from 'next/image'

export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer__container">
        <div className="site-footer__container--copyright">
          <h3>&copy; copyright 2021</h3>
        </div>
        <div className="site-footer__container--social">
          <a target="__blank">
            <Image
              src="/LinkedIn.svg"
              alt="LinkedIn Social"
              width="24"
              height="24"
            />
          </a>
          <a target="__blank">
            <Image
              src="/twitter.svg"
              alt="Twitter Social"
              width="24"
              height="24"
            />
          </a>
          <a target="__blank">
            <Image
              src="/github.svg"
              alt="Github Social"
              width="24"
              height="24"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}
