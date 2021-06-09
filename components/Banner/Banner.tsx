import React from 'react'
import Link from 'next/link'
import {motion} from 'framer-motion'

export const Banner = () => {
  return (
    <div className="site-banner">
      <div className="site-banner__container">
        <div className="site-banner__container--hero-info">
          <motion.h1
            initial="start"
            animate="end"
            variants={{start: {x: -100, opacity: 0}, end: {x: 0, opacity: 1}}}
            transition={{duration: 0.8}}
          >
            Build. Blog. Share
          </motion.h1>
          <motion.p
            initial="start"
            animate="end"
            variants={{start: {x: -100, opacity: 0}, end: {x: 0, opacity: 1}}}
            transition={{duration: 0.8}}
          >
            A developer’s personal blogging site, where I blog about my
            experiences as developer and living a life.
          </motion.p>
          <div className="site-banner__container--hero-info-action">
            <Link href="/about">
              <span className="about-link">
                <h5>Say Hello</h5>
                <motion.img
                  animate={{rotate: 22}}
                  transition={{
                    repeat: 5,
                    repeatType: 'reverse',
                    duration: 0.5,
                    delay: 1,
                  }}
                  src="/site-assets/hello.svg"
                  alt="Say hello"
                />
              </span>
            </Link>
          </div>
        </div>
        <div className="site-banner__container--profile">
          <div className="site-banner__container--profile-image">
            <motion.img
              initial="start"
              animate="end"
              variants={{start: {y: 50, opacity: 0}, end: {y: 0, opacity: 1}}}
              transition={{duration: 0.8, delay: 1}}
              src="/site-assets/Me.png"
              alt="Me profile"
            />
            <motion.div
              initial="start"
              animate="end"
              variants={{start: {y: 50, opacity: 0}, end: {y: 0, opacity: 1}}}
              transition={{duration: 0.8}}
              className="bg-box"
            ></motion.div>
          </div>
          <div className="site-banner__container--profile-action">
            <Link href="/about">
              <span className="about-link">
                <h5>Say Hello</h5>
                <motion.img
                  animate={{rotate: 22}}
                  transition={{
                    repeat: 5,
                    repeatType: 'reverse',
                    duration: 0.5,
                    delay: 2,
                  }}
                  src="/site-assets/hello.svg"
                  alt="Say hello"
                  width="40"
                  height="40"
                />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
