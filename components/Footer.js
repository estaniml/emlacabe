import { FaLinkedin, FaGithubSquare, FaWhatsappSquare } from 'react-icons/fa'

const Footer = () => {

  

  return (
    <footer className="h-32 md:h-72 flex items-center justify-center text-slate-200 space-x-12">

      <a target="_blank" rel="noreferrer" href='https://api.whatsapp.com/send/?phone=5493434653960' className='relative' aria-label="My Linkedin Profile" >
        <FaLinkedin className='text-xl md:text-3xl cursor-pointer' />
        <div className='w-6 h-6 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-blue-800 blur-xl -z-1 hover:bg-blue-500 transition-all ease-in-out duration-300 '></div>
      </a>

      <a target="_blank" rel="noreferrer" href='https://api.whatsapp.com/send/?phone=5493434653960' className='relative' aria-label="My GitHub Profile">
        <FaGithubSquare className='text-xl md:text-3xl cursor-pointer transition-all ease-in-out duration-200 ' />
        <div className='w-6 h-6 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-teal-800 blur-xl -z-1 hover:bg-teal-500 transition-all ease-in-out duration-300 '></div>
      </a>

      <a target="_blank" rel="noreferrer" href='https://api.whatsapp.com/send/?phone=5493434653960' className='relative' aria-label="My Whatsapp!">
        <FaWhatsappSquare className='text-xl md:text-3xl cursor-pointer transition-all ease-in-out duration-200 ' />
        <div className='w-6 h-6 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-red-800 blur-xl -z-1 hover:bg-red-500 transition-all ease-in-out duration-300 '></div>
      </a>

    </footer>
  )
}

export default Footer