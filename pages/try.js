import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Try = () => {
  return (
    <div className='bg-white text-black w-screen h-screen flex items-center justify-center relative'>
        <div className='w-44 h-44 bg-slate-200 bg-opacity-40 rounded absolute top-1/2 z-10 backdrop-blur-xl'>
            aaa
            <Link href='/'>
                <button className='bg-red-500 text-white rounded p-2 px-4 m-5'>volver</button>
            </Link>
        </div>

        <div className='w-32 h-32 bg-gradient-to-tr from-red-400 via-orange-300 relative top-24 to-violet-300 bg-opacity-40 rounded'>
        </div>
    </div>
  )
}

export default Try