import React from 'react'
import { media } from '../../assets/assets'

const Intro = () => {
  return (
    <div className='flex overflow-hidden md:flex-row flex-col-reverse items-center justify-center md:justify-between mx-auto my-0 mt-20 w-[80%]'>
      <div className="flex flex-col gap-5 text">
        <h1 className='max-w-[600px] font-semibold text-6xl leading-snug'>Bring everyone together to build better products.</h1>
        <p className='max-w-96 text-gray-600 text-xl leading-snug'>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
        <button className='hover:bg-orange-700 cursor-pointer bg-orange-500 px-3 py-3 rounded-full max-w-52 text-white text-xl py'>Get Started</button>
      </div>
      <div className="image">
        <img src={media.illustrationIntro} className='w-[700px] z-10' alt="" />
      </div>
    </div>
  )
}

export default Intro
