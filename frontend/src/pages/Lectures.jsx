import React, { useContext, useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'


const Lectures = () => {

  // Get speciality from URL
  const { speciality } = useParams()

  // Used to navigate between pages
  const navigate = useNavigate()

  // Store filtered lecturers
  const [filterLec, setFilterLec] = useState([])

  // Get lecturers from Context API
  const { lecturers } = useContext(AppContext)

  // Filter lecturers based on selected speciality
  const applyFilter = () => {

    if (speciality) {

      console.log("lecturers:", lecturers);

      setFilterLec(
        lecturers.filter(
          lec => lec.speciality === speciality
        )
      )

    } else {

      // If no speciality selected show all lecturers
      setFilterLec(lecturers)

    }
  }

  // Run filtering whenever lecturers or speciality changes
  useEffect(() => {
    applyFilter()
  }, [lecturers, speciality])

  return (

    <div className='px-4 sm:px-10'>

      {/* Page Heading */}

      <p className='text-gray-600'>
        Browse through the teachers specialist.
      </p>

      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>

        {/* ================= LEFT SIDE FILTER BUTTONS ================= */}

        <div className='flex flex-col gap-4 text-sm text-gray-600'>

          {/* Academic Advising */}

          <p
            onClick={() =>
              speciality === 'Academic Advising'
                ? navigate('/lectures')
                : navigate('/lectures/Academic Advising')
            }
            className={`w-[200px] border border-gray-300 rounded px-4 py-2 cursor-pointer transition-all ${
              speciality === 'Academic Advising'
                ? 'bg-blue-100 text-blue-700 border-blue-400'
                : 'bg-white hover:bg-blue-50'
            }`}
          >
            Academic Advising
          </p>

          {/* Project Supervising */}

          <p
            onClick={() =>
              speciality === 'Project Supervising'
                ? navigate('/lectures')
                : navigate('/lectures/Project Supervising')
            }
            className={`w-[200px] border border-gray-300 rounded px-4 py-2 cursor-pointer transition-all ${
              speciality === 'Project Supervising'
                ? 'bg-blue-100 text-blue-700 border-blue-400'
                : 'bg-white hover:bg-blue-50'
            }`}
          >
            Project Supervising
          </p>

          {/* Assignment Support */}

          <p
            onClick={() =>
              speciality === 'Assignment Support'
                ? navigate('/lectures')
                : navigate('/lectures/Assignment Support')
            }
            className={`w-[200px] border border-gray-300 rounded px-4 py-2 cursor-pointer transition-all ${
              speciality === 'Assignment Support'
                ? 'bg-blue-100 text-blue-700 border-blue-400'
                : 'bg-white hover:bg-blue-50'
            }`}
          >
            Assignment Support
          </p>

          {/* Career Guidance */}

          <p
            onClick={() =>
              speciality === 'Career Guidance'
                ? navigate('/lectures')
                : navigate('/lectures/Career Guidance')
            }
            className={`w-[200px] border border-gray-300 rounded px-4 py-2 cursor-pointer transition-all ${
              speciality === 'Career Guidance'
                ? 'bg-blue-100 text-blue-700 border-blue-400'
                : 'bg-white hover:bg-blue-50'
            }`}
          >
            Career Guidance
          </p>

          {/* Personal Tutoring */}

          <p
            onClick={() =>
              speciality === 'Personal Tutoring'
                ? navigate('/lectures')
                : navigate('/lectures/Personal Tutoring')
            }
            className={`w-[200px] border border-gray-300 rounded px-4 py-2 cursor-pointer transition-all ${
              speciality === 'Personal Tutoring'
                ? 'bg-blue-100 text-blue-700 border-blue-400'
                : 'bg-white hover:bg-blue-50'
            }`}
          >
            Personal Tutoring
          </p>

          {/* Student Support */}

          <p
            onClick={() =>
              speciality === 'Student Support'
                ? navigate('/lectures')
                : navigate('/lectures/Student Support')
            }
            className={`w-[200px] border border-gray-300 rounded px-4 py-2 cursor-pointer transition-all ${
              speciality === 'Student Support'
                ? 'bg-blue-100 text-blue-700 border-blue-400'
                : 'bg-white hover:bg-blue-50'
            }`}
          >
            Student Support
          </p>

        </div>

        {/* ================= RIGHT SIDE LECTURER CARDS ================= */}

        <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 gap-y-6'>

          {filterLec.map((item, index) => (

            <div
              key={index}

              // Navigate to lecturer details page
              onClick={() => navigate(`/appointment/${item._id}`)}

              className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500'
            >

              {/* Lecturer Image */}

              <img
                className='w-full bg-blue-50'
                src={item.image}
                alt={item.name}
              />

              {/* Lecturer Details */}

              <div className='p-4'>

                {/* Availability Status */}

                <div className='flex items-center gap-2 text-sm text-green-500'>
                  <p className='w-2 h-2 rounded-full bg-green-500'></p>
                  <p>Available</p>
                </div>

                {/* Lecturer Name */}

                <p className='text-gray-900 text-lg font-medium mt-2'>
                  {item.name}
                </p>

                {/* Lecturer Speciality */}

                <p className='text-gray-600 text-sm'>
                  {item.speciality}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  )
}

export default Lectures