import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useState } from 'react'
import { FaLaptopCode, FaPlusSquare, FaStar } from 'react-icons/fa'
import { motion } from "framer-motion";

const IT = () => {

  const [hover, setHover] = useState(false)
  const [info, setInfo] = useState({
    frontend: false,
    backend: false
  })

  const values = {
    frontend: 80,
    backend: 60,
  }
    
  
  return (
    <div 
      className='row-span-3 mb-10'
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >   
        <motion.div 
          className={ hover 
            ? "border border-slate-100 row-li-3 mb-6 md:mb-10 bg-slate-800/40 md:bg-gradient-to-b from-purple-900/50 via-purple-800/50 to-purple-900/50 p-6 md:p-10 pb-0 rounded-xl shadow-2xl shadow-slate-900 cursor-pointer transition-all duration-500 ease-linear h-full"
            : "border border-slate-700 row-li-3 mb-6 md:mb-10 bg-slate-800/40 p-6 md:p-10 pb-0 rounded-xl cursor-pointer transition-all duration-500 ease-linear h-full shadow-2xl shadow-slate-900"
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
              className='relative border-2 border-slate-700 bg-slate-800/50 rounded-xl p-4 my-2 mt-4 h-[255px] overflow-hidden hover:shadow-xl md:hover:shadow-purple-900'
              onMouseEnter={ () => setInfo({ frontend: true, backend: false})}
              onMouseLeave={ () => setInfo({ frontend: false, backend: false})}
            >
              
              <div
                className='flex items-center justify-between' >
                <p className='uppercase font-bold'>Frontend</p>
                <FaPlusSquare className='text-2xl ' />
              </div>

              <div className={ info.frontend ? 'absolute left-96 top-6 opacity-100 p-10 w-[75%] mx-auto transition-all  duration-500 ease-in-out overflow-hidden' :  'absolute left-10 top-6 p-10 w-[75%] mx-auto opacity-100 transition-all  duration-500 ease-in-out h-full'}>
                <CircularProgressbar 
                  value={values.frontend} 
                  text="80%" 
                  styles={buildStyles({
                    rotation: 0.25,
                    strokeLinecap: 'butt',
                    textSize: '16px',
                    pathTransitionDuration: 0.5,
                    pathColor: `#fff`,
                    textColor: '#94a3b8',
                    trailColor: '#334155',
                    backgroundColor: '#9333ea',
                  })}
                />
              </div>
              
              <ul className={ info.frontend ? 'text-sm absolute left-6 top-14 opacity-100 transition-all duration-500 ease-in-out overflow-hidden grid grid-cols-2 gap-4 uppercase' :  'text-sm absolute -left-96 top-14 opacity-100 transition-all  duration-500 ease-in-out grid grid-cols-2 gap-4 uppercase'}>
                <li>HTML</li>
                <li>Javascript</li>
                <li className='flex items-center gap-2'>Tailwind CSS <FaStar /></li>
                <li className='flex items-center gap-2'>Next <FaStar /></li>
                <li>Styled C.</li>
                <li>Typescript</li>
                <li>Bootstrap</li>
                <li className='flex items-center gap-2'>React <FaStar /></li>
                <li>Material UI</li>
              </ul>
            </div>

            <div 
              className='relative border-2 border-slate-700 bg-slate-800/50 rounded-xl p-4 my-2 mt-6 h-[250px] overflow-hidden hover:shadow-xl md:hover:shadow-purple-900'
              onMouseEnter={ () => setInfo({ frontend: false, backend: true})}
              onMouseLeave={ () => setInfo({ frontend: false, backend: false})}
            >
              
              <div
                className='flex items-center justify-between' >
                <p className='uppercase font-bold'>Backend</p>
                <FaPlusSquare className='text-2xl ' />
              </div>

              <div className={ info.backend ? 'absolute left-96 top-6 opacity-100 p-10 w-[75%] mx-auto transition-all  duration-500 ease-in-out overflow-hidden' :  'absolute left-10 top-6 p-10 w-[75%] mx-auto opacity-100 transition-all  duration-500 ease-in-out h-full'}>
                <CircularProgressbar 
                  value={values.backend} 
                  text="60%" 
                  styles={buildStyles({
                    rotation: 0.25,
                    strokeLinecap: 'butt',
                    textSize: '16px',
                    pathTransitionDuration: 0.5,
                    pathColor: `#fff`,
                    textColor: '#94a3b8',
                    trailColor: '#334155',
                    backgroundColor: '#9333ea',
                  })}
                />
              </div>
              
              <ul className={ info.backend ? 'text-sm absolute left-6 top-14 opacity-100 transition-all duration-500 ease-in-out overflow-hidden grid grid-cols-1 gap-4 uppercase' :  'text-sm absolute -left-96 top-14 opacity-100 transition-all  duration-500 ease-in-out grid grid-cols-1 gap-4 uppercase'}>
                <li>Node</li>
                <li>Express</li>
                <li>Mongodb</li>
                <li>Strapi</li>
              </ul>
            </div>
              

              {/* <ul>
                <li>Node</li>
                <li>Express</li>
                <li>Mongodb</li>
                <li>Strapi</li>
              </ul> */}

        
        </motion.div>
    </div>
  )
}

export default IT