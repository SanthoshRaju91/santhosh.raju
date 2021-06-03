import React, {useContext} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {DarkModeContext} from '../../utils/context'

export const Header = () => {
  const darkModeContext = useContext(DarkModeContext)

  return (
    <header className="site-header">
      <div className="site-header__logo">
        <Link href="/">
          <div>
            <Image
              src={
                darkModeContext.isDarkMode
                  ? '/site-assets/Logo-White.svg'
                  : '/site-assets/Logo.svg'
              }
              alt="Site Logo"
              width="250"
              height="75"
            />
          </div>
        </Link>
      </div>
      <div className="site-header__action">
        <button onClick={darkModeContext.toggle}>
          <Image
            src="/site-assets/dark-mode.svg"
            alt="Dark Mode"
            width="25"
            height="25"
          />
        </button>
      </div>
    </header>
  )
}
