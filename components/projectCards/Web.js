import { useState } from 'react'
import Image from 'next/image'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { motion } from "framer-motion";

const Web = ({project}) => {

    const [hover, setHover] = useState(false)

  return (
    <motion.div 
        className={ hover ? 'border border-slate-100 relative bg-purple-800/40 md:col-span-2 rounded-md p-4 h-60 md:h-80 overflow-hidden transition-all duration-300 ease-linear'
                        : 'border border-slate-700 bg-slate-800/40 relative  md:col-span-2 rounded-md p-4 h-60 md:h-80 overflow-hidden transition-all duration-300 ease-linear'
        }
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        initial={{opacity: 0, y: 50}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.4}}
    >
       <div>
            <span className='text-slate-400 uppercase text-xs md:text-sm'>{project?.description}</span>
            <div className='mt-1 flex justify-between items-center'>
                <h1 className='font-bold text-xl md:text-2xl'>{project?.title}</h1>
                <div className='flex items-center gap-4'>

                    { project.gitUrl && <a href={project?.gitUrl} target="_blank" rel="noreferrer">
                        <FaGithub className='text-xl hover:scale-125 hover:text-teal-300 transition-all duration-150 ease-linear' />
                    </a>}
                    
                    <a href={project?.url} target="_blank" rel="noreferrer">
                        <FaExternalLinkAlt className='text-xl hover:scale-125 hover:text-teal-300 transition-all duration-150 ease-linear' />
                    </a>
                </div>
            </div>
       </div>

       <div 
            className={ hover ? 'left-1/2 -translate-x-1/2 w-[300px] md:w-[450px] h-[200px] md:h-[250px] absolute -bottom-10 transition-all duration-300 ease-linear scale-105'
                        : 'left-1/2 -translate-x-1/2 w-[300px] md:w-[450px] h-[200px] md:h-[250px] absolute -bottom-16 transition-all duration-300 ease-linear'
        }>
            {   project.img.desktop &&
                <Image 
                    src={project?.img.desktop?.src}
                    alt={project?.title}
                    fill
                    placeholder='blur'
                    blurDataURL={project?.img.desktop?.blurDataURL}
                    className='rounded-xl'
                    sizes="(max-width: 768px) 100vw,
                            (max-width: 1200px) 50vw,
                            33vw"
                />
            }
       </div>
    </motion.div>
  )
}

export default Web