import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/Components/ui/carousel'
import { reviews } from '@/assets/assets'
import { cn } from '@/lib/utils'

const Said = () => {
  return (
    <div className='said grid grid-cols-1 items-center justify-center flex-col'>
      <h1 className='text-5xl font-bold text-center'>What they have said</h1>
      <div className="reviews my-0 mx-auto mt-11 mb-16 grid items-center justify-center">
        <Carousel className={cn("w-full flex items-center justify-center my-0 mx-auto")}>
          <CarouselContent className={cn("w-full px-16 flex")}>
            {
              reviews.map((review, index) => {
                return (
                  <CarouselItem className={cn("flex items-center justify-center pb-20 my-0 mx-auto")} key={index}>
                    <div className="content flex items-center justify-center flex-col max-w-[300px] md:max-w-[500px] border px-7 py-16 gap-6 rounded-md shadow-2xl shadow-stone-800">
                      <img src={review.src} className='w-20' alt="" />
                      <h2 className='text-3xl font-semibold'>{review.name}</h2>
                      <p className='text-center'>{review.opinion}</p>
                    </div>
                  </CarouselItem>
                )
              })
            }
          </CarouselContent>
          <CarouselPrevious className={cn("ml-24")} />
          <CarouselNext className={cn("mr-24")} />
        </Carousel>
      </div>
      <button className='hover:bg-orange-700 cursor-pointer bg-orange-500 px-3 py-3 rounded-full max-w-52 text-white text-xl py'>Get Started</button>
    </div>
  )
}

export default Said
