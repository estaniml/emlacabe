import { motion } from "framer-motion";

const ContactForm = () => {
  return (
    <motion.form 
                className='bg-slate-900/50 p-6 rounded-xl relative animate-form'
                initial={{y: 100}}
                animate={{y: 0}}
                transition={{duration: 1}}
            >
                <div className='flex flex-col gap-4'>
                    <label htmlFor='name'>Your name</label>
                    <input
                        id='name' 
                        className='bg-transparent border border-slate-300 rounded h-10 p-2'
                    />
                </div>
                <div className='my-8 flex flex-col gap-4'>
                    <label htmlFor='name'>Your email</label>
                    <input
                        id='name' 
                        className='bg-transparent border border-slate-300 rounded h-10 p-2'
                        required
                    />
                </div>
                <div className='flex flex-col gap-4'>
                    <label htmlFor='name'>Your message</label>
                    <textarea
                        id='name' 
                        className='bg-transparent border border-slate-300 rounded h-20 p-2 resize-none'
                        required
                    />
                </div>

                <button className="flex justify-center mx-auto mt-12 w-1/2 h-10 font-bold relative tracking-wide bg-gradient-to-tr from-violet-500 via-blue-500 to-teal-500 hover:text-white  px-4 py-2 hover:bg-gradient-to-tl hover:from-teal-500 hover:via-blue-500 hover:to-violet-500 hover:shadow-lg hover:shadow-indigo-600/40 transition-all ease-linear duration-400">
                    Send
                </button>
            </motion.form>
  )
}

export default ContactForm