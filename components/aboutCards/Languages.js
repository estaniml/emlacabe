import { useState } from 'react'
import { FaLanguage } from 'react-icons/fa'
import { motion } from "framer-motion";

const Languages = () => {

    const [hover, setHover] = useState(false)

  return (
    <motion.div 
        className={ hover 
                ? "border border-slate-100 relative bg-orange-900/40 p-8 rounded-xl shadow-2xl shadow-slate-800 cursor-pointer transition-all duration-500 ease-linear animate-description"
                : "border border-slate-700 relative bg-slate-800/40 p-8 rounded-xl cursor-pointer transition-all duration-500 ease-linear shadow-2xl shadow-slate-900 animate-description overflow-hidden"
            }
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            initial={{opacity: 0, x: 100}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.6}}
        >
        <div className="flex justify-between items-center text-slate-300">
            <h1 className='text-2xl uppercase font-bold'>LANGUAGES</h1>
            <FaLanguage className='text-4xl' />
        </div>
        <div className="mt-4">
            <p>SPANISH</p>

            <p className='h-6 text-slate-300 overflow-hidden transition-all duration-200 ease-linear'>Native Level.</p>
        </div>

        <div className="mt-2">
            <p>ENGLISH</p>

            <p className='h-6 text-slate-300 overflow-hidden transition-all duration-200 ease-linear'>B2 Level.</p>
        </div>

        <div className="mt-2">
            <p>JAVASCRIPT</p>

            <p className='h-6 text-slate-300 overflow-hidden transition-all duration-200 ease-linear'>Junior.</p>
        </div>
    </motion.div>
  )
}

export default Languages