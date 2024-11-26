import React, { useEffect, useState } from 'react'
import { motion, useTransform } from 'motion/react'
import { Squash as Hamburger } from 'hamburger-react'
import { media } from '../../assets/assets'

const Navbar = () => {
    const [isOpen, setOpen] = useState(false)
    useEffect(()=>{
        if (isOpen) {
            document.body.classList.add('overflow-hidden')
        }else {
            document.body.classList.remove('overflow-hidden')
        }
    })
    return (
        <>
            <div className='mt-4 navbar'>
                <div className="flex justify-between items-center mx-auto my-0 py-7 w-[80%] navcontent">
                    <div className="logo">
                        <img src={media.logo} alt="" />
                    </div>
                    <div className="links">
                        <ul className='md:flex gap-3 hidden font-normal text-lg'>
                        </ul>
                    </div>
                    <div className="flex justify-center items-center gap-1 get-started">
                        <button className='md:block hidden bg-orange-500 px-3 py-2 rounded-full text-white text-xl bg'>Get Started</button>
                        <div className="block md:hidden z-50">
                            <Hamburger toggled={isOpen} toggle={setOpen} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="responsive">
                <div className="links">
                    <ul className='flex gap-3 text-lg flex-col text-center items-center justify-center bg-white shadow-lg max-w-72 top-24 rounded-md px-6 right-6 py-5 absolute'>
                        <li className='cursor-pointer'>Pricing</li>
                        <li className='cursor-pointer'>Product</li>
                        <li className='cursor-pointer'>About Us</li>
                        <li className='cursor-pointer'>Careers</li>
                        <li className='cursor-pointer'>Community</li>
                        <button className='block w-56 bg-orange-500 px-3 py-2 rounded-full text-white text-xl bg'>Get Started</button>
                        
                    </ul>
                </div>
            </div>
        </>

    )
}

export default Navbar
