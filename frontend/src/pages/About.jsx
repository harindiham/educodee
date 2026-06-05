import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>
          ABOUT <span className='text-gray-700 font-medium'>US</span>
        </p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        
        <img
          className='w-full md:max-w-[360px]'
          src={assets.about_image}
          alt=""
        />

        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>

          <p>
            Welcome to our Student-Lecturer Appointment Booking System,
            a platform designed to simplify communication and consultation
            scheduling between students and lecturers.
          </p>

          <p>
            Our system allows students to browse lecturers, view their
            areas of expertise, check available consultation slots, and
            book appointments conveniently. The goal is to create an
            efficient and organized process for academic support,
            guidance, and mentoring.
          </p>

          <b className='text-gray-800'>
            Our Mission
          </b>

          <p>
            Our mission is to improve accessibility between students and
            lecturers by providing a user-friendly appointment management
            platform. We aim to support academic success through better
            communication, timely consultations, and streamlined
            scheduling.
          </p>

        </div>

      </div>

      <div className='text-xl my-4'>
        <p>
          WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span>
        </p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Easy Booking</b>
          <p>
            Quickly schedule appointments with lecturers through a simple
            and intuitive booking process.
          </p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Academic Support</b>
          <p>
            Connect with lecturers for project supervision, assignment
            support, academic advising, and career guidance.
          </p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficient Management</b>
          <p>
            Manage appointments, view schedules, and keep track of
            consultations in one convenient platform.
          </p>
        </div>

      </div>

    </div>
  )
}

export default About