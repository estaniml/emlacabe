import Layout from "../layout/Layout"
import { AiFillPlusSquare, AiFillMinusSquare } from 'react-icons/ai'
import Project from "../components/Project"
import { projecstList } from "../db.js"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion";
import PageTitle from "../components/PageTitle"

import { useContext } from "react";
import { LangContext } from "../context/LangContext"

const Projects = () => {

  const [tab, setTab] = useState({
    category: 'all',
    showAll: false
  })
  const [projects, setProjects] = useState([])
  const [more, setMore] = useState(false)

  const top = useRef(null)

  useEffect(() => {

    if(tab.category === 'all'){

      if( projecstList.length > 4 && tab.showAll === false ){
        setProjects(projecstList.slice(0,4))
        setMore(true)
        return
      }

      setProjects(projecstList)
      return
    }

    const filteredListed = projecstList.filter( project => project.type.includes(tab.category))

    if(filteredListed.length < 4) {
      setMore(false)
      top?.current?.scrollIntoView()
    }
    if( filteredListed.length > 4 && tab.showAll === false){
      setProjects(filteredListed.slice(0,4))
      setMore(true)
      return
    }
    setProjects(filteredListed)

  }, [tab])
  
  const showMoreLess = () => {
    
    setTab({...tab, showAll: !tab.showAll})
    if( tab.showAll === true ){
      setTimeout(() => {
        top?.current?.scrollIntoView()
      }, 300);
    }

  }

  const { t  } = useContext(LangContext)

  return (
    <Layout page='Projects'>
      <PageTitle top={top}>{t.projects.title}</PageTitle>

      <ul className="flex justify-center items-center gap-4 px-4 mb-6 text-sm lg:text-[16px] overflow-x-scroll lg:overflow-x-hidden pl-12 pb-6">
        <li 
          onClick={() => setTab({category: 'all', showAll: false})}  
          className={ tab.category === 'all' ? "text-slate-50 hover:text-teal-100 bg-indigo-600 rounded px-2 cursor-pointer" : "text-slate-100 hover:text-cyan-600 px-2 cursor-pointer"}
        >{t.projects.all}</li>
        <li 
          onClick={() => setTab({category: 'real', showAll: false})}  
          className={ tab.category === 'real' ? "text-slate-50 hover:text-teal-100 bg-indigo-600 rounded px-2 whitespace-nowrap	 cursor-pointer" : "text-slate-100 hover:text-cyan-600 px-2 whitespace-nowrap cursor-pointer"}
        >{t.projects.realWebs}</li>
        <li 
          onClick={() => setTab({category: 'project', showAll: false})}  
          className={ tab.category === 'project' ? "text-slate-50 hover:text-teal-100 bg-indigo-600 rounded px-2 cursor-pointer" : "text-slate-100 hover:text-cyan-600 px-2 cursor-pointer"}
        >{t.projects.projects}</li>
        <li 
          onClick={() => setTab({category: 'react', showAll: false})}  
          className={ tab.category === 'react' ? "text-slate-50 hover:text-teal-100 bg-sky-500 rounded px-2 cursor-pointer" : "text-slate-100 hover:text-cyan-600 px-2 cursor-pointer"}
        >React</li>
        <li 
          onClick={() => setTab({category: 'next', showAll: false})}  
          className={ tab.category === 'next' ? "text-slate-50 hover:text-teal-100 bg-gray-900 rounded px-2 cursor-pointer" : "text-slate-100 hover:text-cyan-600 px-2 cursor-pointer"}
        >Next</li>
        <li 
          onClick={() => setTab({category: 'vue', showAll: false})}  
          className={ tab.category === 'vue' ? "text-slate-50 hover:text-teal-100 bg-emerald-600 rounded px-2 cursor-pointer" : "text-slate-100 hover:text-cyan-600 px-2 cursor-pointer"}
        >Vue</li>
      </ul>

      { projects?.map( project => (
        <Project key={project.id} project={project} />
      ))}    

      { more && 
        <motion.button 
          className="flex rounded-full items-center gap-2 justify-center mx-auto mt-12 w-48 h-12 font-bold relative tracking-wide text-indigo-400 hover:shadow-lg hover:shadow-indigo-600/30 transition-all ease-linear duration-400"
          onClick={showMoreLess}
          initial={{opacity: 0, y: 50}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.4}}
        >
          { tab.showAll 
              ? <p className="flex items-center gap-2">{t.projects.showLessBtn} <AiFillMinusSquare /> </p>
              : <p className="flex items-center gap-2">{t.projects.showMoreBtn}<AiFillPlusSquare /> </p>
          } 
          
        </motion.button>  
      }
        
    </Layout>
  )
}

export default Projects