import React from 'react'
import Link from 'next/link'

export const Banner = () => {
  return (
    <div className="site-banner">
      <div className="site-banner__container">
        <div className="site-banner__container--hero-info">
          <h1>Build. Blog. Share</h1>
          <p>
            A developer’s personal blogging site, where I blog about my
            experiences as developer and living a life.
          </p>
        </div>
        <div className="site-banner__container--profile">
          <div className="site-banner__container--profile-image">
            <img src="/site-assets/Me.png" alt="Me profile" />
            <div className="bg-box"></div>
          </div>
          <div className="site-banner__container--profile-action">
            <Link href="/about">
              <>
                <h5>Say Hello</h5>
                <img
                  src="/site-assets/hello.svg"
                  alt="Say hello"
                  width="40"
                  height="40"
                />
              </>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
