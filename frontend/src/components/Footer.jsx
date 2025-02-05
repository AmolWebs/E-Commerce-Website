import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
            <div>
            <h1 className='mb-5 w-32 text-2xl sm:text-3xl lg:text-3xl' >StepTo<span className='text-red-500' ><span className='text-3xl sm:text-4xl lg:text-4xl' >Royal</span></span> </h1>
                
                <p className='w-full md:w-2/3 text-gray-600' >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, autem.
                </p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5' >COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600' >
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5' >GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600' >
                    <li>+918459482125</li>
                    <li>+918767969429</li>
                    <li>amoldangat836@gmail.com</li>
                </ul>
            </div>
        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center' >Copyright 2024@ StepToRoyal.com - All rights reserved</p>
        </div>
      
    </div>
  )
}

export default Footer
