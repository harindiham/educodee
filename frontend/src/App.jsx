import Register from './pages/Register'
import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Student from './pages/Student'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Myprofile from './pages/Myprofile'
import Appointment from './pages/Appointment'
import NavBar from './components/NavBar'
import Myappointments from './pages/Myappointments'
import Footer from './components/Footer'
import Lectures from './pages/lectures'

const App = () => {

  const [darkMode, setDarkMode] = useState(false)

  return (
    <div
      className={`min-h-screen mx-4 sm:mx-[10%] ${
        darkMode ? 'bg-gray-900 text-white' : ''
      }`}
    >

      <NavBar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/lectures' element={<Lectures />} />
        <Route path='/lectures/:speciality' element={<Lectures />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/my-profile' element={<Myprofile />} />
        <Route path='/my-appointments' element={<Myappointments />} />
        <Route path='/appointment/:lecId' element={<Appointment />} />
      </Routes>

      <Footer />

    </div>
  )
}

export default App