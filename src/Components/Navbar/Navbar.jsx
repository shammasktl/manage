import React, { useEffect, useState } from 'react'
import { motion, useTransform } from 'motion/react'
import { Squash as Hamburger } from 'hamburger-react'
import { media } from '../../assets/assets'

const Navbar = () => {
    const [isOpen, setOpen] = useState(false)
    const [active, setActive] = useState("pricing")
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden')
        } else {
            document.body.classList.remove('overflow-hidden')
        }
    })
    return (
        <>
            <div className='mt-4 navbar top-0 right-0 left-0 z-20 relative'>
                <div className="flex justify-between items-center mx-auto my-0 py-7 w-[80%] navcontent">
                    <div className="logo">
                        <img src={media.logo} alt="" />
                    </div>
                    <div className="links">
                        <ul className='md:flex gap-3 hidden font-normal text-lg'>
                            <li className={`cursor-pointer py-2 rounded-full ${active === "pricing"? "bg-stone-200 shadow-md px-2":""}`} onClick={()=>{setActive("pricing")}}>Pricing</li>
                            <li className={`cursor-pointer py-2 rounded-full ${active === "products"? "bg-stone-200 shadow-md px-2":""}`} onClick={()=>{setActive("products")}}>Products</li>
                            <li className={`cursor-pointer py-2 rounded-full ${active === "about"? "bg-stone-200 shadow-md px-2":""}`} onClick={()=>{setActive("about")}}>About Us</li>
                            <li className={`cursor-pointer py-2 rounded-full ${active === "careers"? "bg-stone-200 shadow-md px-2":""}`} onClick={()=>{setActive("careers")}}>Careers</li>
                            <li className={`cursor-pointer py-2 rounded-full ${active === "community" ? "bg-stone-200 shadow-md px-2":""}`} onClick={()=>{setActive("community")}}>Community</li>
                        </ul>
                    </div>
                    <div className="flex justify-center items-center gap-1 get-started">
                        <button className='md:block hidden bg-orange-500 px-3 py-2 rounded-full text-white text-xl bg'>Get Started</button>
                        <div className="block md:hidden">
                            <Hamburger toggled={isOpen} toggle={setOpen} />
                        </div>
                    </div>
                </div>
            </div>
            {
                isOpen && (
                    <div className="responsive duration-200 md:hidden">
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
                )
            }
        </>

    )
}

export default Navbar
