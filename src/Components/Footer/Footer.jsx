import { media, social } from '@/assets/assets'
import React from 'react'

const Footer = () => {
  return (
    <div className="sticky bottom-0 -z-50">
      <div className='flex justify-center items-center bg-stone-950 footer'>
        <div className="content-area lg:gap-72 gap-10 py-12 flex flex-col-reverse md:flex-row md:justify-between justify-center items-center m-auto bg-gray-950 rounded-tl-lg rounded-tr-lg max-w-[80%] max-h-[80%] shadow-md">
          <div className="icon flex flex-col gap-16">
            <img src={media.logo} className='w-60 object-cover' alt="" />
            <div className="social flex items-center justify-center gap-4">
              {
                social.map((icon, index) => {
                  return (
                    <a href="" target="_blank" key={index}>
                      <img src={icon} className='w-8' alt="" />
                    </a>
                  )
                })
              }
            </div>
          </div>
          <div className="link1 text-white">
            <ul>
              <li>Home</li>
              <li>Products</li>
              <li>Pricing</li>
              <li>About</li>
            </ul>
          </div>
          <div className="link2 text-white mt-4">
            <ul>
              <li>Careers</li>
              <li>Community</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="subscribe flex items-center justify-center gap-2">
            <input type="text" className='rounded-full bg-white outline-none w-40 px-3 h-14' placeholder='Enter Your Email' name="" id="" />
            <button className='py-5 px-4 rounded-full bg-orange-500 text-white'>Subscribe</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Footer
