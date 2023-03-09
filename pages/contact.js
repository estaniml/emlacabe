import Layout from '../layout/Layout'
import { motion } from "framer-motion";
import { FaLinkedin, FaGithubSquare, FaWhatsappSquare } from 'react-icons/fa'
import { RiMailSendLine, RiArrowDownCircleLine } from 'react-icons/ri'
import ContactForm from '../components/ContactForm';
import { useState } from 'react';
import PopUp from '../components/PopUp';
import PageTitle from '../components/PageTitle';

const Contact = () => {

    const [statusMsg, setStatusMsg] = useState({
        show: false,
        text: ''
    })

  return (
    <Layout page='Get in touch!'>
        
        <PageTitle>Get in touch.</PageTitle>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>

            <div className='mt-6 md:mt-0 md:p-6 text-slate-300'>
                <motion.h2 
                    className='text-center text-lg md:text-2xl'
                    initial={{opacity: 0, }}
                    animate={{opacity: 1, }}
                    transition={{duration: 0.6}}
                >Got a question or proposal. Go ahead →</motion.h2>

                
                <motion.div 
                    className='hidden md:flex flex-col border border-slate-800 p-4 rounded-lg text-center mt-6 hover:bg-slate-900/60 transition-all duration-150 ease-in-out'
                    initial={{opacity: 0, }}
                    animate={{opacity: 1, }}
                    transition={{duration: 0.8}}
                >
                    <p className='w-full rounded-lg text-center md:text-lg transition-all duration-150 ease-in-out'
                    >Contact me throw my social networks</p>

                    <div className='mt-2 flex justify-center items-center gap-4'>
                        <a target="_blank" rel="noreferrer" href='https://api.whatsapp.com/send/?phone=5493434653960' className='relative' aria-label="My Linkedin Profile">
                        <FaLinkedin className='text-xl md:text-2xl' />
                        <div className='w-6 h-6 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-blue-800 blur-xl -z-1 hover:bg-blue-500 transition-all ease-in-out duration-300 '></div>
                    </a>

                    <a target="_blank" rel="noreferrer" href='https://api.whatsapp.com/send/?phone=5493434653960' className='relative' aria-label="My GitHub Profile">
                        <FaGithubSquare className='text-xl md:text-2xl transition-all ease-in-out duration-200 ' />
                        <div className='w-6 h-6 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-teal-800 blur-xl -z-1 hover:bg-teal-500 transition-all ease-in-out duration-300 '></div>
                    </a>

                    <a target="_blank" rel="noreferrer" href='https://api.whatsapp.com/send/?phone=5493434653960' className='relative' aria-label="My Whatsapp!">
                        <FaWhatsappSquare className='text-xl md:text-2xl transition-all ease-in-out duration-200 ' />
                        <div className='w-6 h-6 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-red-800 blur-xl -z-1 hover:bg-red-500 transition-all ease-in-out duration-300 '></div>
                    </a>
                    </div>
                </motion.div>
                

                <motion.div 
                    className='hidden md:flex flex-col border border-slate-800 p-4 rounded-lg text-center mt-6 hover:bg-slate-900/60 transition-all duration-150 ease-in-out'
                    initial={{opacity: 0, }}
                    animate={{opacity: 1, }}
                    transition={{duration: 1}}
                >
                    <p className=' md:text-lg'>Or just email me to</p>
                    <p className='mt-2 flex items-center gap-2 justify-center'><RiMailSendLine />emartinezlacabe@gmail.com</p>
                </motion.div>
            </div>

            <ContactForm 
                setStatusMsg={setStatusMsg} 
            />

            <div className='flex flex-col md:hidden mt-0 text-slate-300'>
                
                <motion.div 
                    className='border border-slate-800 p-4 rounded-lg text-center mt-6 hover:bg-slate-900/60 transition-all duration-150 ease-in-out'
                    initial={{opacity: 0, }}
                    animate={{opacity: 1, }}
                    transition={{duration: 1}}
                >
                    <p>Or just email me to</p>
                    <p className='mt-2 flex items-center gap-2 justify-center'><RiMailSendLine />emartinezlacabe@gmail.com</p>
                </motion.div>

                <motion.div 
                    className='border border-slate-800 p-4 rounded-lg text-center mt-6 hover:bg-slate-900/60 transition-all duration-150 ease-in-out'
                    initial={{opacity: 0, }}
                    animate={{opacity: 1, }}
                    transition={{duration: 0.8}}
                >
                    <p className='w-full rounded-lg text-center transition-all duration-150 ease-in-out'
                    >Contact me throw my social networks</p>

                    <RiArrowDownCircleLine className='text-xl mx-auto mt-2' />
                </motion.div>
                

                
            </div>
        </div>

        <PopUp 
            statusMsg={statusMsg}
            setStatusMsg={setStatusMsg}
        />
    </Layout>
  )
}

export default Contact