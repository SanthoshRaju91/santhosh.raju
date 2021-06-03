import React, {useContext} from 'react'
import Image from 'next/image'
import {SocalLink} from '../../types'
import {DarkModeContext} from '../../utils/context'

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
  const darkModeContext = useContext(DarkModeContext)

  return (
    <div className="social-links">
      {socialLinks.map((socialLink: SocalLink, index: number) => (
        <a target="__blank" key={index} href={socialLink.url}>
          <Image
            src={
              darkModeContext.isDarkMode ? socialLink.dark : socialLink.light
            }
            alt={socialLink.name}
            width="24"
            height="24"
          />
        </a>
      ))}
    </div>
  )
}
