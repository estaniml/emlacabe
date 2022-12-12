import { MdFileDownloadDone } from 'react-icons/md'

const PopUp = ({statusMsg}) => {
  return (
    <div className={ statusMsg.show 
        ? "flex items-center justify-center space-x-6 p-2 md:text-lg fixed bottom-20 md:right-40 bg-slate-800/80 border border-teal-300 w-4/5 md:w-96 h-20 rounded-xl transition-all duration-200 ease-linear"
        : "flex items-center justify-center space-x-6 p-2 md:text-lg fixed -bottom-20 md:right-40 bg-slate-800/80 border border-teal-300 w-4/5 md:w-96 h-20 rounded-xl transition-all duration-200 ease-linear"
    }>
        <p>{statusMsg.text}</p> 
        <MdFileDownloadDone />
    </div>
  )
}

export default PopUp