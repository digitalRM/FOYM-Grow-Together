import React from 'react'
import { Button } from '../ui/button'
import Header from '../ui/111 - header'

export default function Hero() {
  return (
    <div className="overflow-hidden">
      <div className="mx-auto h-[1000px] p-4 md:px-6 pt-6 lg:pt-10 lg:px-8 py-32 relative">
        <div className="grid lg:grid-cols-3 gap-8 lg:justify-between mt-36 lg:mt-56 z-10 relative max-w-[1140px] sm:px-8 mx-auto w-full">
          <div className="flex flex-col justify-start items-start lg:col-span-2">
            <div className="flex flex-col gap-2 md:flex-row lg:gap-0 lg:flex-col justify-start items-start">
              <h1 className="text-4xl lg:text-5xl xl:text-5xl font-bold text-black tracking-tighter text-left">Starting Gardens</h1>
              <h1 className="text-4xl lg:text-5xl xl:text-5xl font-bold text-black tracking-tighter text-left"><span className="text-green-800">Across the United States.</span></h1>
            </div>
           <p className="text-lg lg:max-w-[597px] text-neutral-600 text-left mt-6">We are a non-profit organization that helps communities start gardens in their neighborhoods. We provide the resources and support needed to get started. Get started in only a few minutes.</p>
            <div className="flex gap-4 mt-6 justify-start flex-col md:flex-row w-full">
              <Button className="w-full lg:w-36 bg-green-800 hover:bg-green-900">Start a Garden</Button>
              <Button variant="outline" className="w-full lg:w-36">Donate Now</Button>
            </div>
          </div>
          <div className='sm:w-[570px] mt-12 h-full relative sm:mx-auto'>
            <img className="w-full h-full object-cover overflow-visible scale-125 lg:scale-100 lg:-mt-12 lg:-ml-56" src="/GardenSVG.svg" alt="A garden with a white picket fence." />
          </div>
        </div>
      </div>
    </div>
  )
}
