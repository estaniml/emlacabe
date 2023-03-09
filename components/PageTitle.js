import React from 'react'
import { motion } from "framer-motion";

const PageTitle = ({children, top}) => {
  return (
    <div className="mt-28 lg:mt-40 lg:mb-10 h-[6rem] lg:h-[12rem] overflow-hidden" ref={top}>
        <motion.h1 
          className="text-5xl lg:text-[8rem] xl:text-[10rem] tracking-wide font-bold text-slate-500  leading-[4rem] lg:leading-[8rem] xl:leading-[10rem] whitespace-nowrap"
          initial={{opacity: 0, y: -100}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.4}}
        >{children}</motion.h1>
      </div>
  )
}

export default PageTitle