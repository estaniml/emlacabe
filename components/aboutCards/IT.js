import { useState } from 'react'
import { FaLaptopCode, FaStar } from 'react-icons/fa'
import { motion } from "framer-motion";

const IT = () => {

  const [hover, setHover] = useState(false)
    
  
  return (
    <div 
      className='row-span-3 mb-10'
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >   
        <motion.div 
          className={ hover 
            ? "border border-slate-100 row-li-3 mb-6 md:mb-10 bg-slate-800/40 p-6 md:p-10 pb-0 rounded-xl shadow-2xl shadow-slate-900 transition-all duration-500 ease-linear h-full"
            : "border border-slate-700 row-li-3 mb-6 md:mb-10 bg-slate-800/40 p-6 md:p-10 pb-0 rounded-xl transition-all duration-500 ease-linear h-full shadow-2xl shadow-slate-900"
          }
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          initial={{opacity: 0, y: 100}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
        >
            <div className="flex justify-between items-center text-slate-400">
                <h1 className='text-2xl uppercase font-bold'>IT SKILLS</h1>
            <FaLaptopCode className='text-4xl' />
            </div>

            <div 
              className='relative border-2 border-slate-700 bg-slate-800/50 rounded-xl p-4 my-2 mt-4 h-[255px] overflow-hidden hover:shadow-xl md:hover:shadow-slate-900'
            >
              
              <div
                className='flex items-center' >
                <p className='uppercase font-bold'>Frontend</p>
              </div>
              
              <ul className={'text-sm absolute left-6 top-14 opacity-100 transition-all duration-500 ease-in-out overflow-hidden grid grid-cols-2 gap-4 uppercase'}>
                <li>HTML</li>
                <li>Javascript</li>
                <li className='flex items-center gap-2'>Tailwind CSS <FaStar /></li>
                <li className='flex items-center gap-2'>Next <FaStar /></li>
                <li className='flex items-center gap-2'>Styled C. <FaStar /></li>
                <li>Typescript</li>
                <li>Bootstrap</li>
                <li className='flex items-center gap-2'>React <FaStar /></li>
                <li>Material UI</li>
              </ul>
            </div>

            <div 
              className='relative border-2 border-slate-700 bg-slate-800/50 rounded-xl p-4 my-2 mt-6 h-[250px] overflow-hidden hover:shadow-xl md:hover:shadow-slate-900'
            >
              
              <div
                className='flex items-center' >
                <p className='uppercase font-bold'>Backend</p>
              </div>
              
              <ul className={'my-4 text-sm transition-all duration-500 ease-in-out overflow-hidden grid grid-cols-2 gap-4 uppercase'}>
                <li>Node</li>
                <li>Express</li>
                <li>Mongodb</li>
                <li>Strapi</li>
                <li>Firebase</li>
              </ul>
              
              <div
                className='flex items-center' >
                <p className='uppercase font-bold'>Extra</p>
              </div>
              
              <ul className={'mt-4 text-sm  opacity-100 transition-all duration-500 ease-in-out overflow-hidden grid grid-cols-2 gap-4 uppercase'}>
                <li>Git</li>
              </ul>
            </div>
        
        </motion.div>
    </div>
  )
}

export default IT