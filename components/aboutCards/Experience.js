import { useState } from 'react'
import { FaUserTie } from 'react-icons/fa'
import { motion } from "framer-motion";
import Link from "next/link"

import { useContext } from "react";
import { LangContext } from '../../context/LangContext';

const Experience = () => {

    const [hover, setHover] = useState(false)

    const { t  } = useContext(LangContext)

  return (
    <motion.div 
        className={ hover 
            ? "border border-slate-100 relative bg-slate-800/40 p-6 md:p-10 rounded-xl shadow-2xl shadow-slate-800 transition-all duration-500 ease-linear h-[340px]"
            : "border border-slate-700 relative bg-slate-800/40 p-6 md:p-10 rounded-xl transition-all duration-500 ease-linear shadow-2xl shadow-slate-900 overflow-hidden h-[340px]"
        }
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 1}}
    >
        <div className="flex justify-between items-center text-slate-300">
            <h1 className='text-2xl uppercase font-bold'>{t.home.experience}</h1>
            <FaUserTie className='text-4xl' />
        </div>
        <div className="mt-4">
            <p>2018-2020 (HICS Capital)</p>
            <p>{t.home.architectureXP}</p>

            <p className={ hover ? 'h-12 text-slate-300 overflow-hidden transition-all duration-200 ease-linear' : 'h-0 overflow-hidden transition-all duration-200 ease-linea'}>{t.home.architectureDescription}.</p>
        </div>

        <div className="mt-2">
            <p>2022 - Now (Freelance)</p>
            <p>{t.home.devXP}</p>

            <p className={ hover ? 'h-12 text-slate-300 overflow-hidden transition-all duration-200 ease-linear' : 'h-0 overflow-hidden transition-all duration-200 ease-linea'}>{t.home.devDescription}. <Link href='/projects' className="hover:underline">{t.home.devLink}</Link></p>
        </div>
    </motion.div>
  )
}

export default Experience