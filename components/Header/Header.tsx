import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const Header = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  function toggleTheme() {
    document.body.classList.toggle('dark')
    setIsDarkTheme(!isDarkTheme)
  }

  return (
    <header className="site-header">
      <div className="site-header__logo">
        <Link href="/">
          <Image
            src={
              isDarkTheme
                ? '/site-assets/Logo-White.svg'
                : '/site-assets/Logo.svg'
            }
            alt="Site Logo"
            width="250"
            height="75"
          />
        </Link>
      </div>
      <div className="site-header__action">
        <button onClick={toggleTheme}>
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
