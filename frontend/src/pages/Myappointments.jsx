import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Myappointments = () => {

  const {
  appointments,
  deleteAppointment,
  editAppointment
    } = useContext(AppContext)
  return (
    <div>

      <p className='pb-3 mt-12 text-lg font-medium text-zinc-700 border-b'>
        My Appointments
      </p>

      <div>

        {appointments.length === 0 ? (

          <div className='text-center py-20 text-gray-500'>
            <p className='text-xl font-medium'>
              No Appointments Booked Yet
            </p>

            <p className='mt-2'>
              Book an appointment with a lecturer to see it here.
            </p>
          </div>

        ) : (

          appointments.map((item) => (

            <div
              key={item.id}
              className='grid grid-cols-[1fr_3fr] gap-4 sm:flex sm:gap-6 py-5 border-b'
            >

              {/* Lecturer Image */}
              <div>
                <img
                  className='w-32 h-32 object-cover bg-blue-50 rounded-lg'
                  src={item.image}
                  alt=""
                />
              </div>

              {/* Lecturer Details */}
              <div className='flex-1 text-sm text-zinc-600'>

                <p className='text-neutral-800 font-semibold text-lg'>
                  {item.lecturer}
                </p>

                <p className='mt-1'>
                  {item.speciality}
                </p>

                <div className='mt-3'>
                  <p>
                    <span className='font-medium text-gray-700'>
                      Date:
                    </span>{' '}
                    {item.date}
                  </p>

                  <p>
                    <span className='font-medium text-gray-700'>
                      Time:
                    </span>{' '}
                    {item.time}
                  </p>
                </div>

                <div className='mt-3'>
                  <span className='inline-block px-3 py-1 text-xs bg-green-100 text-green-700 rounded-full'>
                    Confirmed
                  </span>
                </div>

              </div>

              {/* Action Buttons */}
              <div className='flex flex-col justify-center gap-3'>
                    <button
                    onClick={() => {
                      const newTime = prompt("Enter new appointment time");

                      if (newTime) {
                        editAppointment(item.id, newTime);
                      }
                    }}
                    className='border border-blue-500 text-blue-500 px-6 py-2 rounded hover:bg-blue-500 hover:text-white transition-all'
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteAppointment(item.id)}
                    className='border border-red-500 text-red-500 px-6 py-2 rounded hover:bg-red-500 hover:text-white transition-all'
                  >
                    Delete
                  </button>

              </div>

            </div>

          ))
        )}

      </div>

    </div>
  )
}

export default Myappointments