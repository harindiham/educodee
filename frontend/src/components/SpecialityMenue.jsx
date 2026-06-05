import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenue = () => {
  return (
    <div
      className='flex flex-col items-center gap-4 py-16 text-gray-800'
      id='speciality'
    >

      <h1 className='text-3xl font-medium'>Find Your Speciality</h1>

      <p className='sm:w-1/3 text-center text-sm'>
        Select a speciality to find the best matches for you.
      </p>

      <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-x-auto px-4'>
        {specialityData.map((item, index) => (
          <Link
            key={index}
            to={`/lectures/${item.speciality}`}
            onClick={() => scrollTo(0, 0)} 
             className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500'
          >
            <img
              src={item.image}
              alt=""
              className='w-20 h-20 object-contain'
            />
            <p className='text-center mt-2'>
              {item.speciality}
            </p>
          </Link>
        ))}
      </div>

    </div>
  )
}

export default SpecialityMenue
