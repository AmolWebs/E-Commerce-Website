import React from 'react'
// import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col justify-between sm:flex-row border-gray-400 border' >
      {/* { 
      // Hero left side
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0' >
        <div className='text-[#414141]' >
          <div className='flex items-center gap-2' >
            <p className='w-8 md:w-11 h-[2px] bg-[#414141]' ></p>
            <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
          </div>
          <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed' >Fresh Picks</h1>
          <div className='flex items-center gap-2' >
            <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
            <p className='w-8 md:w-11 h-[2px] bg-[#414141]' ></p>
          </div>
        </div>
      </div> } */}

      {/* <div className="relative flex justify-end w-60 sm:w-1/3">
        <video className="w-full object-cover h-[90vh]" autoPlay muted loop playsInline>
          <source src="/ecom-hero-video.mp4" type="video/mp4" />
        </video>
      </div> */}

      {/* <video className="bg-red-100 w-1/2 sm:w-1/2 h-[80vh] object-fill" autoPlay muted loop playsInline>
        <source src="/ecom-hero-video.mp4" type="video/mp4" />
      </video> */}


<div className="flex justify-center items-center w-screen h-[70vh] overflow-hidden bg-black">
  <video
    className="rotate-90 w-[100vh] h-[1000vw] object-contain"
    autoPlay
    muted
    loop
    playsInline
  >
    <source src="/ecom-hero-video.mp4" type="video/mp4" />
  </video>
</div>



    </div>
  )
}

export default Hero
