import { useState } from 'react'
import { FaLanguage } from 'react-icons/fa'
import { motion } from "framer-motion";

import { useContext } from "react";
import { LangContext } from '../../context/LangContext';

const Languages = () => {

    const [hover, setHover] = useState(false)

    const { t  } = useContext(LangContext)

  return (
    <motion.div 
        className={ hover 
                ? "border border-slate-100 relative bg-slate-800/40 p-6 md:p-10 rounded-xl shadow-2xl shadow-slate-800 transition-all duration-500 ease-linear"
                : "border border-slate-700 relative bg-slate-800/40 p-6 md:p-10 rounded-xl transition-all duration-500 ease-linear shadow-2xl shadow-slate-900 overflow-hidden"
            }
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1}}
        >
        <div className="flex justify-between items-center text-slate-300">
            <h1 className='text-2xl uppercase font-bold'>{t.home.languages}</h1>
            <FaLanguage className='text-4xl' />
        </div>
        <div className="mt-4">
            <p>{t.home.spanish}</p>

            <p className='h-6 text-slate-300 overflow-hidden transition-all duration-200 ease-linear'>{t.home.spanishLvl}.</p>
        </div>

        <div className="mt-2">
            <p>{t.home.english}</p>

            <p className='h-6 text-slate-300 overflow-hidden transition-all duration-200 ease-linear'>{t.home.englishLvl}.</p>
        </div>

        <div className="mt-2">
            <p>JAVASCRIPT</p>

            <p className='h-6 text-slate-300 overflow-hidden transition-all duration-200 ease-linear'>Junior.</p>
        </div>
    </motion.div>
  )
}

export default Languages