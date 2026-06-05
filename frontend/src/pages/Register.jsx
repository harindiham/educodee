import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/firebase'
import { useNavigate } from 'react-router-dom'

const Register = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const registerUser = async () => {

    setError('')

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    try {

      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )

      alert('Account Created Successfully')

      navigate('/')

    } catch (error) {

      setError(error.message)

    }

  }

  return (
    <div className='min-h-[80vh] flex items-center justify-center'>

      <div className='w-full max-w-md border border-gray-200 rounded-xl p-8 shadow-sm'>

        <h1 className='text-3xl font-semibold text-gray-800'>
          Register
        </h1>

        <p className='text-gray-500 mt-2 mb-6'>
          Create your account
        </p>

        <div className='flex flex-col gap-4'>

          <input
            type='email'
            placeholder='Email Address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='border border-gray-300 rounded-lg p-3 outline-none'
          />

          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='border border-gray-300 rounded-lg p-3 outline-none'
          />

          <input
            type='password'
            placeholder='Confirm Password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className='border border-gray-300 rounded-lg p-3 outline-none'
          />

          {error && (
            <p className='text-red-500 text-sm'>
              {error}
            </p>
          )}

          <button
            onClick={registerUser}
            className='bg-primary text-white py-3 rounded-lg font-medium'
          >
            Register
          </button>

        </div>

      </div>

    </div>
  )
}

export default Register