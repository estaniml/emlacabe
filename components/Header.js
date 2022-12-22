
import Image from "next/image"
import Link from "next/link"
import me from "../public/me.png"
import { AiOutlineMenu, AiOutlineClose }  from 'react-icons/ai'
import { motion } from "framer-motion"

const Header = ({menu, setMenu}) => {


  return (
    <header className="fixed top-0 w-full bg-black/60 z-50 backdrop-filter backdrop-blur-2xl">
        <div className="w-full md:w-4/5 px-4 md:px-0 mx-auto py-4 md:py-6 flex justify-between items-center">
            <Link href='/'>
                <div className="flex items-center space-x-6">
                    <motion.div 
                        className="relative w-8 h-8 md:w-16 md:h-16 rounded-full opacity-100 overflow-hidden"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 1}}
                    >
                        <Image
                            priority
                            src={me.src}
                            alt='Estanislao M.Lacabe Frontend Developer'
                            fill
                            placeholder="blur"
                            blurDataURL={me.blurDataURL}
                            className="hover:scale-110 transition-all duration-300 ease-in-out "
                            sizes="(max-width: 768px) 100vw,
                                    (max-width: 1200px) 50vw,
                                    33vw"
                        />
                    </motion.div>
                    <motion.h2 
                        className="md:text-2xl font-bold tracking-tighter"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 1.2}}
                    >Estanislao M. Lacabe</motion.h2>
                </div>
            </Link>

            <nav className="hidden md:flex items-center space-x-6 tracking-tight">
                <Link href='/'>
                    <motion.p 
                        className="text-xl font-bold text-slate-100/70 hover:text-indigo-600 transition-all ease-linear duration-150"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 1.6}}
                    >About</motion.p>
                </Link>
                <Link href='/projects'>
                    <motion.p className="text-xl font-bold text-slate-100/70 hover:text-indigo-600 transition-all ease-linear duration-150"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 1.8}}
                    >Projects</motion.p>
                </Link>

                <Link href='/contact'>
                    <motion.button 
                        className="w-36 h-10 font-bold relative tracking-wide bg-black after:w-[149px] after:h-[44px] after:absolute after:-top-[2px] after:-z-10 after:bg-white after:-left-[2.5px] after:bg-gradient-to-tr after:from-violet-500 after:via-blue-500 after:to-teal-500 text-white  px-4 py-2 hover:bg-gradient-to-tr hover:from-violet-500 hover:via-blue-500 hover:to-teal-500 hover:shadow-xl hover:shadow-indigo-600/40 transition-all ease-linear duration-400"
                        initial={{y: -100}}
                        animate={{y: 0}}
                        transition={{duration: 1}}
                    >
                        Get in touch
                    </motion.button>
                </Link>
            </nav>
        
            <div 
                className="flex md:hidden text-2xl"
                onClick={() => setMenu(!menu)}
            >
                {
                    menu 
                        ? <AiOutlineClose />
                        :   <motion.p
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{duration: 0.4}}
                            ><AiOutlineMenu /></motion.p>
                }
            </div>
        </div>
    </header>
  )
}

export default Header