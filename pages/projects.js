import Layout from "../layout/Layout"
import { AiFillPlusSquare, AiFillMinusSquare } from 'react-icons/ai'
import Project from "../components/Project"
import { projecstList } from "../db.js"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion";

const Projects = () => {

  const [show, setShow] = useState(false)
  const [tab, setTab] = useState('all')
  const [projects, setProjects] = useState([])

  const top = useRef(null)

  useEffect(() => {
    if(show){
      setProjects(projecstList)
      return
    }
    top.current.scrollIntoView();
    setProjects(projecstList.slice(0,3))
  }, [show])
  

  useEffect(() => {

    if(tab === 'all'){
      setShow(true)
      setProjects(projecstList)
      return
    }
    const filteredListed = projecstList.filter( project => project.type.includes(tab) )
    setProjects(filteredListed)
    setShow(false)

  }, [tab])
  
  return (
    <Layout page='Projects'>
      <div className="mt-20 md:mt-40 md:mb-24 h-[6rem] md:h-[12rem] overflow-hidden" ref={top}>
        <motion.h1 
          className="text-5xl md:text-[11rem] tracking-wide font-bold text-slate-600  leading-[4rem] md:leading-[10rem] "
          initial={{opacity: 0, y: -100}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.4}}
        >My Projects.</motion.h1>
      </div>

      <ul className="flex justify-center items-center gap-4 mb-6 text-sm md:text-md overflow-x-scroll md:overflow-x-hidden pl-12">
        <li onClick={() => setTab('all')}  className={ tab === 'all' ? "text-slate-50 hover:text-blue-100 cursor-pointer bg-indigo-600 rounded px-2" : "text-slate-100 hover:text-cyan-600 cursor-pointer px-2"}>ALL</li>
        <li onClick={() => setTab('real')}  className={ tab === 'real' ? "text-slate-50 hover:text-blue-100 cursor-pointer bg-indigo-600 rounded px-2" : "text-slate-100 hover:text-cyan-600 cursor-pointer px-2"}>REAL WEBS</li>
        <li onClick={() => setTab('project')}  className={ tab === 'project' ? "text-slate-50 hover:text-blue-100 cursor-pointer bg-indigo-600 rounded px-2" : "text-slate-100 hover:text-cyan-600 cursor-pointer px-2"}>PROJECTS</li>
        <li onClick={() => setTab('react')}  className={ tab === 'react' ? "text-slate-50 hover:text-blue-100 cursor-pointer bg-indigo-600 rounded px-2" : "text-slate-100 hover:text-cyan-600 cursor-pointer px-2"}>REACT</li>
        <li onClick={() => setTab('next')}  className={ tab === 'next' ? "text-slate-50 hover:text-blue-100 cursor-pointer bg-indigo-600 rounded px-2" : "text-slate-100 hover:text-cyan-600 cursor-pointer px-2"}>NEXT</li>
      </ul>

      { projects?.map( project => (
        <Project key={project.id} project={project} />
      ))}    

        { tab === 'all' && 
          <button 
          className="flex rounded after:rounded items-center gap-2 justify-center mx-auto mt-12 w-40 h-10 font-bold relative tracking-wide bg-black after:w-[165px] after:h-[44px] after:absolute after:-top-[2px] after:-z-10 after:bg-white after:-left-[2px] after:bg-gradient-to-tr after:from-rose-500 after:via-orange-500 after:to-yellow-500 text-orange-100 px-4 py-2 hover:bg-gradient-to-tr hover:from-rose-500 hover:via-via-500 hover:to-yellow-500 hover:shadow-xl hover:shadow-orange-600/20 transition-all ease-linear duration-400"
          onClick={() => setShow(!show)}
          >
            { show 
                ? <p className="flex items-center gap-2">Show less <AiFillMinusSquare /> </p>
                : <p className="flex items-center gap-2">Show more <AiFillPlusSquare /> </p>
            } 
            
          </button>
          }
    </Layout>
  )
}

export default Projects