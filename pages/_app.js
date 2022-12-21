import '../styles/globals.css'
import { Poppins } from '@next/font/google'
import dynamic from 'next/dynamic'

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})


function MyApp({ Component, pageProps }) {
  return (
    <div className={`${poppins.variable} font-sans`}>
      <Component {...pageProps} />

      <AnimatedCursor
      innerSize={18}
      outerSize={18}
      color='255, 255, 255'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
    </div>
  )
}

export default MyApp
