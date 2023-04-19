import '../styles/globals.css'
import { Poppins } from '@next/font/google'
import { Analytics } from '@vercel/analytics/react';

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})


function MyApp({ Component, pageProps }) {
  return (
    <div className={`${poppins.variable} font-sans`}>
      <Component {...pageProps} />
      <Analytics />
    </div>
  )
}

export default MyApp
 