import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore'
import { auth, db } from '../firebase/firebase'


const Appointment = () => {
  const navigate = useNavigate();
  const {
  lecturers,
  currencySymbol,
  appointments,
  setAppointments
} = useContext(AppContext)

  const { lecId } = useParams()
  
  const daysOfWeek = ['SUN','MON','TUE', 'WED', 'FRI', 'SAT']

  const [lecInfo,setLecInfo] = useState(null)
  const [lecSlots,setLecSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState(``)

  const fetchLecInfo = async () =>{
    const lecInfo = lecturers.find(lec => lec._id == lecId)
    setLecInfo(lecInfo)
    console.log(lecInfo);

  }

  const getAvailableSlots = async () => {

  setLecSlots([])

  let today = new Date()

  for (let i = 0; i < 7; i++) {

    let currentDate = new Date(today)
    currentDate.setDate(today.getDate() + i)

    let endTime = new Date(currentDate)
    endTime.setHours(21, 0, 0, 0)

    if (today.getDate() === currentDate.getDate()) {

      currentDate.setHours(
        currentDate.getHours() > 10
          ? currentDate.getHours() + 1
          : 10
      )

      currentDate.setMinutes(
        currentDate.getMinutes() > 30
          ? 30
          : 0
      )

    } else {

      currentDate.setHours(10)
      currentDate.setMinutes(0)

    }

    let timeSlots = []

    while (currentDate < endTime) {

      let formattedTime = currentDate.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      })

      timeSlots.push({
        datetime: new Date(currentDate),
        time: formattedTime
      })

      currentDate.setMinutes(
        currentDate.getMinutes() + 30
      )

    }

    setLecSlots(prev => [...prev, timeSlots])

  }

}

useEffect(() => {
  fetchLecInfo()
}, [lecturers, lecId])

useEffect(() => {
  if (lecInfo) {
    getAvailableSlots()
  }
}, [lecInfo])

useEffect(() => {
  console.log(lecSlots)
}, [lecSlots])

const bookAppointment = () => {

  if (!slotTime) {
    alert('Please select a time slot')
    return
  }

  const appointmentData = {
    id: Date.now(),
    lecturer: lecInfo.name,
    speciality: lecInfo.speciality,
    image: lecInfo.image,
    date: lecSlots[slotIndex][0].datetime.toLocaleDateString(),
    time: slotTime
  }

  setAppointments(prev => [...prev, appointmentData])

  navigate('/my-appointments')
}



  return lecInfo &&(
    <div>
      {/* Lecturer details */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div>
          <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={lecInfo.image} alt=""/>

        </div>

        <div className='flex-1 border border-gray-400 rounded-1g p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
          {/* lec info, name, degree, ecperiece */}
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>            {lecInfo.name}
            <img className='w-5' src={assets.verified_icon} alt=""/> 
          </p>

          <div className='flex items-center gap-2 text-sm st-1 text-gray-600'>
            <p> {lecInfo.degree} - {lecInfo.speciality} </p>
            <button className= 'py-0.5 px-2 border text-xs rounded-full'>{lecInfo.experience}</button>
          </div>

          {/* --doctor about-- */}
          <div>
            <p className=' flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>
              About <img src={assets.info_icon} alt=""/>
            </p>
           </div>


              <p className='text-sm text-gray-500 max-w-[700px] mt-2'> {lecInfo.about}
                Appointment Fee: <span className='text-gray-600'>{currencySymbol}{lecInfo.fee}</span>
              </p>

              <p>

              
            </p>


        </div>

      </div>
      {/*  BOOKING SLORT*/}

      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
        <p>Booking Slots</p>
        <div className='flex gap-3 item-center w-full overflow-x-scroll m-4t'>
          {
            lecSlots.length && lecSlots.map((item,index)=>(
              <div onClick={()=> setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white' : 'border border-gray-200'}`} key={index}>                <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]} </p>
                <p>{item[0] && item[0].datetime.getDate()}</p>

              </div>
            
            ))
          }
          
        </div>

        <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
          {lecSlots.length && lecSlots[slotIndex].map((item,index)=>(
            <p onClick={() => setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white' : 'text-gray-400 border border-gray-300'}`} key={index}>              {item.time.toLowerCase()}
            </p>

          ))}

        </div>

            <button
              onClick={bookAppointment}
              className='bg-primary text-white text-sm font-medium px-14 py-3 rounded-full my-6'
            >
              Book an Appointment
            </button>    
        </div>

      
    </div>
  )
}

export default Appointment
