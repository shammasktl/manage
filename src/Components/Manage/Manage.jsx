import React from 'react'
import { motion } from 'motion/react'
import { media, reviews } from '@/assets/assets'

const Manage = () => {
  const second = [
    {
      title: "Track company-wide progress",
      content: "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again."
    },
    {
      title: "Advanced built-in reports",
      content: "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed."
    },
    {
      title: "Everything you need in one place",
      content: "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution."
    },
  ]
  return (
    <div className='manage text-center md:text-left gap-8 grid grid-cols-1 md:grid-cols-2 mt-36'>
      <motion.div className="first flex flex-col gap-5"
        initial={{
          opacity: 0,
          y: 100
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          ease: 'easeInOut'
        }}
        viewport={{
          once: true,
        }}
      >
        <h1 className='text-6xl max-w-[500px]'>What's different about Manage? </h1>
        <p className='max-w-96'>Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.</p>
      </motion.div>
      <div className="second flex flex-col gap-8">
        {
          second.map((item, index) => {
            return (
              <div className='flex gap-8' key={index}>
                <motion.span
                  initial={{
                    opacity: 0,
                    y: 100
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: 'easeInOut'
                  }}
                  viewport={{
                    once: true,
                  }} className='bg-orange-500 h-12 w-72 rounded-full text-white font-bold text-xl flex items-center justify-center'>0{index + 1}</motion.span>
                <div className="content flex flex-col gap-5">
                  <motion.h2
                    initial={{
                      opacity: 0,
                      y: 100
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: 'easeInOut'
                    }}
                    viewport={{
                      once: true,
                    }} className='font-semibold text-xl'>{item.title}</motion.h2>
                  <motion.p
                    initial={{
                      opacity: 0,
                      y: 100
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: 'easeInOut'
                    }}
                    viewport={{
                      once: true,
                    }}>{item.content}</motion.p>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="pattern">
        <img src={media.bgTabletPattern} className='w-[500px] relative -left-80 bottom-56' alt="" />
      </div>
    </div>
  )
}

export default Manage
