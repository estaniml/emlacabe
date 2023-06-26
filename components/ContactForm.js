import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { useContext, useRef, useState } from "react";
import { CgSpinnerTwoAlt } from 'react-icons/cg'
import { LangContext } from "../context/LangContext";
const ContactForm = ({setStatusMsg}) => {

    const [loading, setLoading] = useState(false)
    const form = useRef(null)  

    const { t  } = useContext(LangContext)

    const sendEmail = (e) => {
        e.preventDefault();
    
        setLoading(true)
        emailjs.sendForm(`service_xn99gfp`, `template_b1xnm15`, form.current, `AdbiYMHKH8dniKP7J`)
          .then((result) => {
              console.log(result.text);
              setLoading(false)
    
              setStatusMsg({show: true, text: t.contact.successMsg})
              setTimeout(() => {
                setStatusMsg({show: false, text: ''})
              }, 9000);
          }, (error) => {
              console.log(error.text);
              setLoading(false)
              
              setStatusMsg({show: true, text: t.contact.errorMsg})
              setTimeout(() => {
                setStatusMsg({show: false, text: ''})
              }, 9000);
          });
          form.current.reset();
    };

  return (
    <motion.form 
        className='bg-slate-900/50 p-6 rounded-xl relative'
        initial={{y: 100}}
        animate={{y: 0}}
        transition={{duration: 1}}
        onSubmit={sendEmail}
        ref={form} 
    >
        <div className='flex flex-col gap-4'>
            <label htmlFor='name'>{t.contact.name}</label>
            <input
                id='name' 
                className='bg-transparent border border-slate-300 rounded h-10 p-2'
                name='name'
                required
            />
        </div>
        <div className='my-8 flex flex-col gap-4'>
            <label htmlFor='email'>{t.contact.email}</label>
            <input
                id='email' 
                className='bg-transparent border border-slate-300 rounded h-10 p-2'
                required
                name='email'
            />
        </div>
        <div className='flex flex-col gap-4'>
            <label htmlFor='name'>{t.contact.message}</label>
            <textarea
                id='message' 
                className='bg-transparent border border-slate-300 rounded h-20 p-2 resize-none'
                required
                name='message'
            />
        </div>

        <button 
            type="submit"
            className="flex items-center justify-center mx-auto mt-12 w-1/2 h-10 font-bold relative tracking-wide bg-gradient-to-tr from-violet-500 via-blue-500 to-teal-500 hover:text-white  px-4 py-2 hover:bg-gradient-to-tl hover:from-teal-500 hover:via-blue-500 hover:to-violet-500 hover:shadow-lg hover:shadow-indigo-600/40 transition-all ease-linear duration-400">
            { loading ? <CgSpinnerTwoAlt className="animate-spin text-2xl  text-orange-200 drop-shadow-2xl" /> : t.contact.send }
        </button>
    </motion.form>
  )
}

export default ContactForm