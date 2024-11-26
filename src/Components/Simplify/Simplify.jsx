import { media } from '@/assets/assets'
import React from 'react'

const Simplify = () => {
  return (
    <div className='simplify bg-orange-500 text-white relative mt-24 flex flex-col items-center justify-center'>
      <img src={media.bgSimplifySectionDesktop} className='top-0 right-0 left-0 bottom-0 absolute' alt="" />
      <div className="content my-0 mx-auto flex md:flex-row justify-between items-center w-screen p-[5%]">
        <h1 className='max-w-96 text-5xl font-semibold'>Simplify how your team works today.</h1>
        <button className='hover:bg-slate-200 cursor-pointer bg-white px-3 py-3 rounded-full max-w-52 text-orange-500 text-xl py'>Get Started</button>
      </div>
    </div>
  )
}

export default Simplify
