import React from 'react'
import { assets } from '../assets/assets'


const Footer = () => {
  return (
        <div className='md:mx-10'>
        <div className='grid grid-cols-1 sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

            {/* Left */}
            <div>
            <img className='mb-5 w-40' src={assets.logo} alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
                A Student Appointment System enables students to schedule consultations with lecturers efficiently.
            </p>
            </div>

            {/* Center */}
            <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>Home</li>
                <li>About Us</li>
                <li>Privacy Policy</li>
            </ul>
            </div>

            {/* Right */}
            <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>+94-760-720-078</li>
                <li>educode@gmail.com</li>
            </ul>
            </div>

        </div>

        <hr />

        <p className='py-5 text-sm text-center'>
            Copyright 2026 © Hammster.dev - All Rights Reserved.
        </p>
        </div>
  )
}

export default Footer
