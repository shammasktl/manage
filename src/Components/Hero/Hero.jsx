import React from 'react'
import Navbar from '../Navbar/Navbar'
import { media } from '../../assets/assets'
import Intro from '../Intro/Intro'

const Hero = () => {
  return (
    <div className='hero w-full'>
      <Navbar />
      <Intro />
    </div>
  )
}

export default Hero
