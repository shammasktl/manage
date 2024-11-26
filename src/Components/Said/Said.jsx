'use-client';

import React from 'react'
import { motion } from 'motion/react'

const Said = () => {
  return (
    <main className='said'>
      <motion.h1 className='text-center text-5xl font-semibold '>What they've Said</motion.h1>
      <div className="reviews mt-24">
          {
            reviews.map((reviews,index)=>{
              return <Card />
            })
          }
        </div>
    </main>
  )
}

export default Said
