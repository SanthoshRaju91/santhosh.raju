import type { AppProps } from 'next/app'

import { Header } from '../components/Header'
import { Hire } from '../components/Hire'
import { Footer } from '../components/Footer'
import '../styles/main.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="site-layout">
      <Header />
      <Component {...pageProps} />
      <Hire />
      <Footer />
    </div>
  )
}
export default MyApp
