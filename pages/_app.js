import '../styles/globals.css'
import { Poppins } from '@next/font/google'

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})


function MyApp({ Component, pageProps }) {
  return (
    <div className={`${poppins.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
