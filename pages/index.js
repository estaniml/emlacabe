import Education from "../components/aboutCards/Education";
import Experience from "../components/aboutCards/Experience";
import IT from "../components/aboutCards/IT";
import Languages from "../components/aboutCards/Languages";
import Profile from "../components/aboutCards/Profile";
import Layout from "../layout/Layout";
import { motion } from "framer-motion";

export default function Home() {

  

  return (
    <Layout page='Frontend Developer'>
      <div className="mt-20 md:mt-36 h-[4rem] md:h-[8rem] overflow-hidden">
        <motion.h1 
          className="text-6xl md:text-[11rem] tracking-wide font-bold text-slate-600  leading-[4rem] md:leading-[8rem] "
          initial={{opacity: 0, y: -100}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.4}}
        >About Me.</motion.h1>
      </div>

      <div className="mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 md:gap-10">
        
        <Profile />
        
        <IT />

        <Education />
      
        <Experience />
      
        <Languages />
        
      </div>

    </Layout>
  )
}
