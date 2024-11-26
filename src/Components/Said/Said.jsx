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
    <div className='said'>
      <h1 className='text-5xl font-bold text-center'>What they have said</h1>
      <div className="reviews mt-11 flex items-center justify-center">
        <Carousel>
          <CarouselContent>
            {
              reviews.map((review, index) => {
                return (
                  <CarouselItem className={cn("w-full flex items-center justify-center")}>
                    <div className="content flex items-center justify-center flex-col max-w-[500px] border px-7 py-16 gap-6 rounded-md shadow-2xl shadow-stone-800">
                      <img src={review.src} className='w-20' alt="" />
                      <h2 className='text-3xl font-semibold'>{review.name}</h2>
                      <p className='text-center'>{review.opinion}</p>
                    </div>
                  </CarouselItem>
                )
              })
            }
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  )
}

export default Said