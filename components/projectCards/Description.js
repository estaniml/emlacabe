import { useState } from 'react'
import { FaHtml5, FaReact, FaGitAlt, FaCss3Alt  } from 'react-icons/fa'
import { SiTailwindcss, SiJavascript, SiNextdotjs, SiVercel, SiVite, SiReactrouter, SiNetlify, SiStyledcomponents, SiTypescript, SiFirebase, SiCreatereactapp } from 'react-icons/si'
import { motion } from "framer-motion";

const Description = ({project}) => {

  const [hover, setHover] = useState(false)

  const setLogo = tool => {
    switch (tool) {
      case 'html':
        return <FaHtml5 className='text-lg' />
      case 'vite':
        return <SiVite className='text-lg' />
      case 'styledcomponents':
        return <SiStyledcomponents className='text-lg' />
      case 'tailwindcss':
        return <SiTailwindcss className='text-lg' />
      case 'cssmodules':
        return <FaCss3Alt className='text-lg' />
      case 'javascript':
        return <SiJavascript className='text-lg' />
      case 'react':
        return <FaReact className='text-lg' />
      case 'next':
        return <SiNextdotjs className='text-lg' />
      case 'router-dom':
        return <SiReactrouter className='text-lg' />
      case 'typescript':
        return <FaHtml5 className='text-lg' />
      case 'vercel':
        return <SiVercel className='text-lg' />
      case 'git':
        return <FaGitAlt className='text-lg' />
      case 'netlify':
        return <SiNetlify className='text-lg' />
      case 'typescript':
        return <SiTypescript className='text-lg' />
        case 'firebase':
          return <SiFirebase className='text-lg' />
        case 'create-react-app':
          return <FaReact className='text-lg' />
      default:
        break;
    }
  }

  return (
    <motion.div 
        className={ hover ? 'border border-slate-100 bg-indigo-800/40 relative rounded-md p-4 h-80 transition-all duration-300 ease-linear'
                        : 'border border-slate-700 bg-slate-900/40 relative rounded-md p-4 h-80 transition-all duration-300 ease-linear'
        }
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        initial={{opacity: 0, y: 90}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.8}}
    >
       <div>
            <span className='text-slate-400 uppercase text-xs'>TOOLS STACK</span>
            <div className='mt-1 flex justify-between items-center'>
                <h1 className='font-bold text-xl text-slate-300'>Javascript</h1>
            </div>
       </div>

       <div className='flex flex-col space-y-2 my-2 text-xs uppercase'>
        <ul className='flex flex-col gap-2 bg-slate-800/70 border border-slate-600 rounded-md p-2 '>
          { project?.tools?.html.map( tool => (
            <li key={tool} className='flex items-center gap-2'>{setLogo(tool)} {tool}</li>
          ))}
        </ul>

        <ul className='flex flex-col gap-2 bg-slate-800/70 border border-slate-600 rounded-md p-2  '>
          { project?.tools?.js.map( tool => (
            <li key={tool} className='flex items-center gap-2'>{setLogo(tool)} {tool}</li>
          ))}
        </ul>

        <ul className='flex flex-col lg:flex-row items-start lg:items-center gap-4 bg-slate-800/70 border border-slate-600 rounded-md p-2'>
          { project?.tools?.extra.map( tool => (
            <li key={tool} className='flex items-center gap-2'>{setLogo(tool)} {tool}</li>
          ))}
        </ul>
       </div>
    </motion.div>
  )
}

export default Description