import { useState } from 'react'
import { FaUserTie } from 'react-icons/fa'
import { motion } from "framer-motion";

const Experience = () => {

    const [hover, setHover] = useState(false)

  return (
    <motion.div 
        className={ hover 
            ? "border border-slate-100 relative bg-slate-800/40 p-6 md:p-10 rounded-xl shadow-2xl shadow-slate-800 transition-all duration-500 ease-linear animate-web h-[340px]"
            : "border border-slate-700 relative bg-slate-800/40 p-6 md:p-10 rounded-xl transition-all duration-500 ease-linear shadow-2xl shadow-slate-900 animate-web overflow-hidden h-[340px]"
        }
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 1}}
    >
        <div className="flex justify-between items-center text-slate-300">
            <h1 className='text-2xl uppercase font-bold'>EXPERIENCE</h1>
            <FaUserTie className='text-4xl' />
        </div>
        <div className="mt-4">
            <p>2018-2020 (HICS Capital)</p>
            <p>Architecture 3D Modeling & Rendering</p>

            <p className={ hover ? 'h-12 text-slate-300 overflow-hidden transition-all duration-200 ease-linear' : 'h-0 overflow-hidden transition-all duration-200 ease-linea'}>I did all the 3D models and renders of the company.</p>
        </div>

        <div className="mt-2">
            <p>2022 - Now (Freelance)</p>
            <p>Fronted Developer</p>

            <p className={ hover ? 'h-12 text-slate-300 overflow-hidden transition-all duration-200 ease-linear' : 'h-0 overflow-hidden transition-all duration-200 ease-linea'}>I worked on projects for differents clients</p>
        </div>
    </motion.div>
  )
}

export default Experience