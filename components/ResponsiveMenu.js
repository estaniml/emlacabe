import Link from "next/link"
import { FaThList } from 'react-icons/fa'
import { RiFolderUserFill, RiMailSendFill  } from 'react-icons/ri'

const ResponsiveMenu = ({menu}) => {
  return (
    <div 
        className={menu 
            ? 'flex justify-between items-center uppercase font-bold text-xs px-4 py-2 z-10 fixed top-16 left-0 h-12 w-full bg-black/90 text-slate-300 transition-all duration-150 ease-linear'
            : 'flex justify-between items-center uppercase font-bold text-xs z-10 fixed top-16 left-0 h-0 overflow-hidden w-full bg-black/90 text-slate-300 transition-all duration-150 ease-linear'
        }
    >
      <Link href='/'>
        <div className="flex items-center gap-1">
          <RiFolderUserFill />
          <p>About</p>
        </div>
      </Link>
      <Link href='/projects'>
        <div className="flex items-center gap-1">
          <FaThList />
          <p>Projects</p>
        </div>
      </Link>
      <Link href='/contact'>
        <div className="flex items-center gap-1">
          <RiMailSendFill />
          <p>Contact</p>
        </div>
      </Link>
    </div>
  )
}

export default ResponsiveMenu