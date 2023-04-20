import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import ResponsiveMenu from "../components/ResponsiveMenu"
import Spinner from "../components/Spinner"

const Layout = ({children, page}) => {
  
  const [menu, setMenu] = useState(false)
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = () => {
      setLoading(true)
    }
      const handleRouteComplete = () => {
      setLoading(false)
    }
    router.events.on('routeChangeStart', handleRouteChange)
    router.events.on('routeChangeComplete', handleRouteComplete)
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [router.events])

  return (
    <div className="relative bg-black text-white" lang="en">
      <Head>
        <title>{`${page} - Estanislao M. Lacabe`}</title>
        <meta name="description" content="Frontend Developer. Portfolio web" />
        <meta name="author" content="Estanislao Martinez Lacabe"></meta>
        <meta property="og:image" content="/me.png" />
      </Head>

      <Header setMenu={setMenu} menu={menu} />
    
      <ResponsiveMenu menu={menu} />

      <div className="relative w-full md:w-4/5 mx-auto px-4 md:px-0">
        { loading ? (
          <div className="h-screen flex items-center justify-center">
            <Spinner />
          </div>
        ) : (
          <main>{children}</main>
        )}
      </div>

      <Footer />
    </div>
  )
}

export default Layout