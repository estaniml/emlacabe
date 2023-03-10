import { useState } from 'react'
import { FaUserAlt } from 'react-icons/fa'
import { motion } from "framer-motion";

const Profile = () => {

  const [hover, setHover] = useState(false)

  return (
    <motion.div 
      className={ hover 
        ? "border border-slate-100 relative bg-slate-800/40 p-6 md:p-10 rounded-xl shadow-2xl shadow-slate-800 transition-all duration-500 ease-linear"
        : "border border-slate-700 relative bg-slate-800/40 p-6 md:p-10 rounded-xl transition-all duration-500 ease-linear shadow-2xl shadow-slate-900"
      }
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      initial={{opacity: 0, y: 100}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.3}}
    >
        <div className="flex justify-between items-center text-slate-300">
            <h1 className='text-2xl uppercase font-bold'>Profile</h1>
            <FaUserAlt className='text-4xl' />
        </div>
        <div className="mt-4">
            <p>I&apos;m Frontend developer.</p>
            <p>I consider myself a very passionate, disciplined and Iam highly motivated when I am working on things that I love to do.</p>

            <p className={ hover ? 'h-12 text-slate-300 overflow-hidden transition-all duration-200 ease-linear' : 'h-0 overflow-hidden transition-all duration-200 ease-linea'}>I’m always eager to learn and practise new things.</p>
        </div>
    </motion.div>
  )
}

export default Profile