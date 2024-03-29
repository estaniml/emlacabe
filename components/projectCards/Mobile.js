import Image from 'next/image'
import { useContext, useState } from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { motion } from "framer-motion";
import { LangContext } from '../../context/LangContext';

const Mobile = ({project}) => {

  const [hover, setHover] = useState(false)

  const { t  } = useContext(LangContext)

  return (
    <motion.div 
      className={ hover 
        ? 'hidden md:block border border-slate-100 bg-teal-800/40 relative rounded-md p-4 h-60 w-full md:h-80 overflow-hidden md:low-hidden transition-all duration-300 ease-linear'
        : 'hidden md:block border border-slate-700 bg-slate-800/40 relative rounded-md p-4 h-60 w-full md:h-80 overflow-hidden transition-all duration-300 ease-linear'
      }
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      initial={{opacity: 0, y: 70}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.6}}
      viewport={{ once: true }}
    >
      <div>
        <span className='text-slate-400 uppercase text-xs'>{t.projects.responsive}</span>
        <a href={project?.url} target="_blank" rel="noreferrer" className='mt-1 flex justify-between items-center'>
          <h1 className='text-xl font-bold text-slate-300'>Mobile</h1>
          <FaExternalLinkAlt className='text-xl hover:scale-125 hover:text-teal-300 transition-all duration-150 ease-linear' />
        </a>
      </div>

      <div className={ hover 
        ? 'left-1/2 -translate-x-1/2 w-[180px] md:w-[210px] h-[400px] md:h-[450px] absolute -bottom-64 transition-all duration-300 ease-linear scale-105'
        : 'left-1/2 -translate-x-1/2 w-[180px] md:w-[210px] h-[400px] md:h-[450px] absolute -bottom-64 transition-all duration-300 ease-linear'}
      >
        { project.img.mobile &&
          <Image 
            src={project?.img.mobile?.src}
            alt={project?.title}
            fill
            placeholder='blur'
            blurDataURL={project?.img.mobile?.blurDataURL}
            className='rounded-[2rem]'
            sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"
          />
        }
      </div>
    </motion.div>
  )
    
}

export default Mobile