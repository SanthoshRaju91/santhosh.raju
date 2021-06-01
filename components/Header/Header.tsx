import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const Header = () => {
  function toggleTheme() {
    document.body.classList.toggle('dark')
  }

  return (
    <header className="site-header">
      <div className="site-header__logo">
        <Link href="/">
          <Image
            src="/site-assets/Logo.svg"
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
