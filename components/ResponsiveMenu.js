import Link from "next/link"
import { FaLanguage, FaThList } from 'react-icons/fa'
import { RiFolderUserFill, RiMailSendFill  } from 'react-icons/ri'
import { LangContext } from "../context/LangContext"
import { useContext } from "react"

const ResponsiveMenu = ({menu}) => {

  const { t, locale, changeLanguage } = useContext(LangContext)

  return (
    <div 
      className={menu 
        ? 'flex flex-col uppercase font-bold text-xl gap-8 px-4 py-12 z-10 fixed top-16 left-0 h-full w-full bg-black/40 backdrop-blur-lg text-slate-300 transition-all duration-150 ease-linear'
        : 'flex flex-col  uppercase font-bold text-xl gap-8 px-4 py-0 z-10 fixed top-0 left-0 h-0 overflow-hidden w-full bg-black/90 backdrop-blur-lg text-slate-300 transition-all duration-150 ease-linear'
      }
    >
      <Link href='/'>
        <div className="flex items-center gap-4">
          <RiFolderUserFill />
          <p>{t.navbar.about}</p>
        </div>
      </Link>
      <Link href='/projects'>
        <div className="flex items-center gap-4">
          <FaThList />
          <p>{t.navbar.projects}</p>
        </div>
      </Link>
      <Link href='/contact'>
        <div className="flex items-center gap-4">
          <RiMailSendFill />
          <p>{t.navbar.contact}</p>
        </div>
      </Link>
        <div className="flex items-center gap-4">
          <FaLanguage />
          <p>{t.navbar.language}: </p>
      <select
        onChange={changeLanguage}
        defaultValue={locale}
        className="bg-transparent tracking-wide font-bold cursor-pointer"
      >
        <option className="bg-black" value="en">EN</option>
        <option className="bg-black" value="es">ES</option>
      </select>
        </div>
    </div>
  )
}

export default ResponsiveMenu