import Layout from "../layout/Layout"
import { AiFillPlusSquare, AiFillMinusSquare } from 'react-icons/ai'
import Project from "../components/Project"
import { projecstList } from "../db.js"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion";

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

      if( projecstList.length > 3 && tab.showAll === false ){
        setProjects(projecstList.slice(0,3))
        setMore(true)
        return
      }

      setProjects(projecstList)
      return
    }

    const filteredListed = projecstList.filter( project => project.type.includes(tab.category))

    if(filteredListed.length < 3) {
      setMore(false)
      top?.current?.scrollIntoView()
    }
    if( filteredListed.length > 3 && tab.showAll === false){
      setProjects(filteredListed.slice(0,3))
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

  return (
    <Layout page='Projects'>
      <div className="mt-20 md:mt-40 md:mb-24 h-[6rem] md:h-[12rem] overflow-hidden" ref={top}>
        <motion.h1 
          className="text-5xl md:text-[11rem] tracking-wide font-bold text-slate-500  leading-[4rem] md:leading-[10rem]"
          initial={{opacity: 0, y: -100}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.4}}
        >My Projects.</motion.h1>
      </div>

      <ul className="flex justify-center items-center gap-4 px-4 mb-6 text-sm md:text-md overflow-x-scroll md:overflow-x-hidden pl-12">
        <li onClick={() => setTab({category: 'all', showAll: false})}  className={ tab.category === 'all' ? "text-slate-50 hover:text-blue-100 bg-indigo-600 rounded px-2" : "text-slate-100 hover:text-cyan-600 px-2"}>ALL</li>
        <li onClick={() => setTab({category: 'real', showAll: false})}  className={ tab.category === 'real' ? "text-slate-50 hover:text-blue-100 bg-indigo-600 rounded px-2 whitespace-nowrap	" : "text-slate-100 hover:text-cyan-600 px-2 whitespace-nowrap	"}>REAL WEBS</li>
        <li onClick={() => setTab({category: 'project', showAll: false})}  className={ tab.category === 'project' ? "text-slate-50 hover:text-blue-100 bg-indigo-600 rounded px-2" : "text-slate-100 hover:text-cyan-600 px-2"}>PROJECTS</li>
        <li onClick={() => setTab({category: 'react', showAll: false})}  className={ tab.category === 'react' ? "text-slate-50 hover:text-blue-100 bg-indigo-600 rounded px-2" : "text-slate-100 hover:text-cyan-600 px-2"}>REACT</li>
        <li onClick={() => setTab({category: 'next', showAll: false})}  className={ tab.category === 'next' ? "text-slate-50 hover:text-blue-100 bg-indigo-600 rounded px-2" : "text-slate-100 hover:text-cyan-600 px-2"}>NEXT</li>
      </ul>

      { projects?.map( project => (
        <Project key={project.id} project={project} />
      ))}    

        { 
          more && 
            <motion.button 
              className="flex rounded after:rounded items-center gap-2 justify-center mx-auto mt-12 w-40 h-10 font-bold relative tracking-wide bg-black after:w-[165px] after:h-[44px] after:absolute after:-top-[2px] after:-z-10 after:bg-white after:-left-[2px] after:bg-gradient-to-tr after:from-rose-500 after:via-orange-500 after:to-yellow-500 text-orange-100 px-4 py-2 hover:bg-gradient-to-tr hover:from-rose-500 hover:via-via-500 hover:to-yellow-500 hover:shadow-xl hover:shadow-orange-600/20 transition-all ease-linear duration-400"
              onClick={showMoreLess}
              initial={{opacity: 0, y: 50}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.4}}
            >
              { tab.showAll 
                  ? <p className="flex items-center gap-2">Show less <AiFillMinusSquare /> </p>
                  : <p className="flex items-center gap-2">Show more <AiFillPlusSquare /> </p>
              } 
              
            </motion.button>
        }
    </Layout>
  )
}

export default Projects