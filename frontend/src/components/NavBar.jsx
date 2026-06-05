import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const NavBar = ({ darkMode, setDarkMode }) => {

  const navigate = useNavigate()

  const [showMenu, setShowMenu] = useState(false)
  const [token, setToken] = useState(true)

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-gray-400'>

      <img
        onClick={() => navigate('/')}
        src={assets.logo}
        alt="logo"
        className='w-[124px] h-[32px] object-contain cursor-pointer'
      />

      {/* Desktop Navigation */}
      <ul className='hidden md:flex items-center gap-5 text-gray-500 font-medium'>

        <NavLink to="/" className="flex flex-col items-center">
          {({ isActive }) => (
            <>
              <li className='py-1'>HOME</li>
              <hr
                className={`border-none outline-none h-0.5 bg-primary w-3/5 m-auto ${
                  isActive ? 'block' : 'hidden'
                }`}
              />
            </>
          )}
        </NavLink>

        <NavLink to="/lectures" className="flex flex-col items-center">
          {({ isActive }) => (
            <>
              <li className='py-1'>LECTURERS</li>
              <hr
                className={`border-none outline-none h-0.5 bg-primary w-3/5 m-auto ${
                  isActive ? 'block' : 'hidden'
                }`}
              />
            </>
          )}
        </NavLink>

        <NavLink to="/about" className="flex flex-col items-center">
          {({ isActive }) => (
            <>
              <li className='py-1'>ABOUT</li>
              <hr
                className={`border-none outline-none h-0.5 bg-primary w-3/5 m-auto ${
                  isActive ? 'block' : 'hidden'
                }`}
              />
            </>
          )}
        </NavLink>

        <NavLink to="/contact" className="flex flex-col items-center">
          {({ isActive }) => (
            <>
              <li className='py-1'>CONTACT</li>
              <hr
                className={`border-none outline-none h-0.5 bg-primary w-3/5 m-auto ${
                  isActive ? 'block' : 'hidden'
                }`}
              />
            </>
          )}
        </NavLink>

      </ul>

      {/* Right Side */}
      <div className='flex items-center gap-4'>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className='border border-gray-300 px-3 py-1 rounded-full'
        >
          {darkMode ? '☀️' : '🌙'}
        </button>

        {/* Mobile Menu Button */}
        <img
          onClick={() => setShowMenu(true)}
          src={assets.menu_icon}
          alt=""
          className='w-6 cursor-pointer md:hidden'
        />

        {
          token ? (

            <div className='hidden md:flex items-center gap-2 cursor-pointer group relative'>

              <img
                src={assets.profile_pic}
                alt="user"
                className='w-10 h-10 rounded-full object-cover cursor-pointer'
              />

              <img
                src={assets.dropdown_icon}
                alt="dropdown"
                className='w-4 h-4 object-contain cursor-pointer'
              />

              <div className='absolute top-full right-0 bg-white shadow-lg rounded-md py-2 w-40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300'>

                <NavLink
                  to="/my-profile"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  My Profile
                </NavLink>

                <NavLink
                  to="/my-appointments"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  My Appointments
                </NavLink>

                <button
                  onClick={() => setToken(false)}
                  className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </button>

              </div>

            </div>

          ) : (

            <button
              onClick={() => navigate('/login')}
              className='bg-primary text-white py-3 px-6 rounded-full font-light hidden md:block'
            >
              Login
            </button>

          )
        }

      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-20 bg-white transition-all duration-300 ${
          showMenu ? 'w-full' : 'w-0 overflow-hidden'
        }`}
      >

        <div className='flex items-center justify-between px-5 py-6 border-b'>

          <img
            src={assets.logo}
            alt=""
            className='w-28'
          />

          <img
            onClick={() => setShowMenu(false)}
            src={assets.cross_icon}
            alt=""
            className='w-6 cursor-pointer'
          />

        </div>

        <ul className='flex flex-col items-center gap-6 mt-10 text-lg font-medium text-gray-700'>

          <NavLink
            onClick={() => setShowMenu(false)}
            to="/"
          >
            HOME
          </NavLink>

          <NavLink
            onClick={() => setShowMenu(false)}
            to="/lectures"
          >
            LECTURERS
          </NavLink>

          <NavLink
            onClick={() => setShowMenu(false)}
            to="/about"
          >
            ABOUT
          </NavLink>

          <NavLink
            onClick={() => setShowMenu(false)}
            to="/contact"
          >
            CONTACT
          </NavLink>

          {!token && (
            <button
              onClick={() => {
                navigate('/login')
                setShowMenu(false)
              }}
              className='bg-primary text-white px-6 py-2 rounded-full'
            >
              Login
            </button>
          )}

        </ul>

      </div>

    </div>
  )
}

export default NavBar