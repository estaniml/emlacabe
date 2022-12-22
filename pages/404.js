import Layout from '../layout/Layout'
import { AiFillWarning } from 'react-icons/ai'
import Spinner from '../components/Spinner'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { motion } from "framer-motion"

const Error = () => {

  const router = useRouter()

  useEffect(() => {
      setTimeout(() => {
          router.push('/')
      }, 2500);
  }, [router])

  return (
    <Layout>
        <motion.div 
          className='h-screen flex flex-col space-y-4 items-center justify-center'
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 1}}
        >
            <AiFillWarning className='text-8xl text-yellow-300' />
            <p className='text-2xl'>This page doesn&apos;t exist.</p>
            <span className='text-slate-300 pb-10'>You will be redirected to the home page..</span>
            <Spinner />
        </motion.div>
    </Layout>
  )
}

export default Error