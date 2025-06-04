import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef, useState } from 'react'

const Pin = () => {
  const [pin, setPin] = useState(['', '', '', ''])
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)]

  const handleChange = (e, idx) => {
    const value = e.target.value.replace(/[^0-9]/g, '').slice(0, 1)
    const newPin = [...pin]
    newPin[idx] = value
    setPin(newPin)
    if (value && idx < 3) {
      inputRefs[idx + 1].current.focus()
    }
    if (idx === 3 && value) {
      inputRefs[idx].current.blur()
    }
  }

  const handleKeyDown = (e, idx) => {
    if (e.key === 'Backspace' && !pin[idx] && idx > 0) {
      inputRefs[idx - 1].current.focus()
    }
  }

  return (
    <div className='bg-black h-screen w-full flex justify-center items-center'>
      <div className='w-[90%] lg:w-[50%] h-[500px] bg-white rounded-3xl flex flex-col justify-between'>
        <div>
          <div className='w-[100%] flex justify-end p-4 pr-6'>
            <button className='text-[40px] font-bold text-red-500'>
              <FontAwesomeIcon icon={faClose} />
            </button>
          </div>
          <h2 className='text-center text-[25px] font-bold'>Put your pin to proceed</h2>
          <div className='flex justify-center gap-4 mt-8'>
            {pin.map((digit, idx) => (
              <input
                key={idx}
                ref={inputRefs[idx]}
                type="password"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e, idx)}
                onKeyDown={(e) => handleKeyDown(e, idx)}
                className='w-16 h-16 text-3xl text-center border-2 border-gray-300 rounded-xl focus:outline-none'
                inputMode="numeric"
                autoComplete="one-time-code"
              />
            ))}
          </div>
        </div>
        <div className='flex justify-center items-center pb-8'>
          <button className='w-[150px] h-[50px] bg-blue-600 text-white text-[20px] font-bold'>Confirm</button>
        </div>
      </div>
    </div>
  )
}

export default Pin