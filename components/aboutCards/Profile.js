import { useContext, useState } from 'react'
import { FaUserAlt } from 'react-icons/fa'
import { motion } from "framer-motion";
import { LangContext } from '../../context/LangContext';

const Profile = () => {

  const [hover, setHover] = useState(false)

  const { t  } = useContext(LangContext)

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
            <h1 className='text-2xl uppercase font-bold'>{t.home.profile}</h1>
            <FaUserAlt className='text-4xl' />
        </div>
        <div className="mt-4">
            <p className='text-teal-400'>{t.home.job}.</p>
            <p>{t.home.profileDescription}.</p>

            <p className={ hover ? 'h-12 text-slate-300 overflow-hidden transition-all duration-200 ease-linear' : 'h-0 overflow-hidden transition-all duration-200 ease-linea'}>{t.home.profileSpan}.</p>
        </div>
    </motion.div>
  )
}

export default Profile