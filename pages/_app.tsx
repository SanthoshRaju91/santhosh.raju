import type {AppProps} from 'next/app'
import {useEffect, useState} from 'react'

import {Header} from '../components/Header'
import {Hire} from '../components/Hire'
import {Footer} from '../components/Footer'
import {DarkModeContext} from '../utils/context'
import {getUserThemePreferrence, setUserThemePreference} from '../utils/user'
import '../styles/main.scss'

function MyApp({Component, pageProps}: AppProps) {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const isDarkMode = getUserThemePreferrence()
    setIsDarkMode(isDarkMode)

    if (isDarkMode) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [])

  function toggle() {
    document.body.classList.toggle('dark')
    setIsDarkMode(!isDarkMode)
    setUserThemePreference(!isDarkMode)
  }

  return (
    <DarkModeContext.Provider value={{isDarkMode: isDarkMode, toggle: toggle}}>
      <div className="site-layout">
        <Header />
        <Component {...pageProps} />
        <Hire />
        <Footer />
      </div>
    </DarkModeContext.Provider>
  )
}
export default MyApp
