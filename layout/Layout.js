import Head from "next/head"
import { useState } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import ResponsiveMenu from "../components/ResponsiveMenu"

const Layout = ({children, page}) => {
  
  const [menu, setMenu] = useState(false)

  return (
    <div className="relative" lang="en">
        <Head>
            <title>Estanislao M. Lacabe - {page}</title>
            <meta name="description" content="Frontend Developer. Portfolio web" />
            <meta name="author" content="Estanislao Martinez Lacabe"></meta>
            <link rel="icon" href="/mlogo.png" />
            <meta property="og:image" content="/me.png" />
        </Head>

        <Header setMenu={setMenu} menu={menu} />

        
        <ResponsiveMenu menu={menu} />

        <div className="relative w-full md:w-4/5 mx-auto px-4 md:px-0">
            {children}
        </div>

        <Footer />
    </div>
  )
}

export default Layout