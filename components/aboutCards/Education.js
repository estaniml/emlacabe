import { useState } from 'react'
import { FaGraduationCap } from 'react-icons/fa'
import { motion } from "framer-motion";

const Education = () => {

  const [hover, setHover] = useState(true)

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
      transition={{duration: 0.9}}
    >
        <div className="flex justify-between items-center text-slate-300">
          <h1 className='text-2xl uppercase font-bold'>Education</h1>
          <FaGraduationCap className='text-4xl' />
        </div>
        <div className="mt-4">
          <p>2010-2015</p>
          <p>High School.</p>

          <p className={ hover ? 'h-6 text-slate-300 overflow-hidden transition-all duration-200 ease-linear' : 'h-0 overflow-hidden transition-all duration-200 ease-linear'}>Escuela del CAE</p>
        </div>

        <div className="mt-1">
          <p>2017-2020 * Unfinished</p>
          <p>Architecture & Design</p>

          <p className={ hover ? 'h-8 text-slate-300 overflow-hidden transition-all duration-200 ease-linear' : 'h-0 overflow-hidden transition-all duration-200 ease-linear'}>Universidad Nacional del Litoral.</p>
        </div>

        <div className="mt-1">
          <p>2021-now</p>
          <p>Business Managment</p>

          <p className={ hover ? 'h-8 text-slate-300 overflow-hidden transition-all duration-200 ease-linear' : 'h-0 overflow-hidden transition-all duration-200 ease-linear'}>Universidad Empresarial Siglo 21.</p>
        </div>
    </motion.div>
  )
}

export default Education