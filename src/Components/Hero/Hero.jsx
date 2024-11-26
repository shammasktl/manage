import React from 'react'
import Navbar from '../Navbar/Navbar'
import { media } from '../../assets/assets'
import Intro from '../Intro/Intro'

const Hero = () => {
  return (
    <div className='hero w-full relative'>
      <div className="pattern overflow-hidden ">
        <img src={media.bgTabletPattern} className='absolute overflow-hidden w-[500px] -top-5 -z-10 -right-16' alt="" />
      </div>
      <Navbar />
      <Intro />
    </div>
  )
}

export default Hero
