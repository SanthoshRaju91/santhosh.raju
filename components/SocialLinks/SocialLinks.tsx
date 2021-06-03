import React from 'react'
import Image from 'next/image'
import {SocalLink} from '../../types'

const socialLinks: SocalLink[] = [
  {
    light: '/site-assets/LinkedIn-light.svg',
    dark: '/site-assets/LinkedIn.svg',
    url: '',
    name: 'LinkedIn',
  },
  {
    light: '/site-assets/twitter-light.svg',
    dark: '/site-assets/twitter.svg',
    url: '',
    name: 'Twitter',
  },
  {
    light: '/site-assets/github-light.svg',
    dark: '/site-assets/github.svg',
    url: '',
    name: 'Github',
  },
]

export const SocialLinks = () => {
  return (
    <div className="social-links">
      {socialLinks.map((socialLink: SocalLink) => (
        <a target="__blank" key={socialLink.url} href={socialLink.url}>
          <Image
            src={socialLink.light}
            alt={socialLink.name}
            width="24"
            height="24"
          />
        </a>
      ))}
    </div>
  )
}
