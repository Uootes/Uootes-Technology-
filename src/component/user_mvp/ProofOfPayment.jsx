import React, { useRef, useState } from 'react'
// import { FaUpload } from 'react-icons/fa' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCloudUpload} from '@fortawesome/free-solid-svg-icons';

const ProofOfPayment = () => {
  const fileInputRef = useRef(null)
  const [file, setFile] = useState(null)

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const handleIconClick = () => {
    fileInputRef.current.click()
  }

  return (
    <div className='w-full h-[100vh] bg-black text-white flex flex-col justify-between text-center'>
        <div className='w-[100%] pt-8'>
          <div className='w-full flex flex-col gap-8 justify-center items-center mt-8'>
            <div className='w-[90%] h-[100px] rounded-xl bg-[#262626] border-[#737373] border-2 lg:w-[50%] mx-auto flex justify-center items-center'>
                <h2 className='text-white font-semibold text-[20px]'>Provide Proof of payment</h2>
            </div>

            <form action="" className='flex flex-col text-left w-[90%] lg:w-[50%] mx-auto gap-4'>
                <label className='text-[20px] font-semibold'>Wallet Address Paid From</label>
                <input type="text" placeholder='Wallet Address' className='h-[60px] rounded-xl pl-4 font-semibold border-2 outline-none bg-[#262626] border-[#737373]'/>
                <label className='text-[20px] font-semibold mt-4'>Wallet Address Paid To</label>
                <input type="text" placeholder='Wallet Address' className='h-[60px] rounded-xl pl-4 font-semibold border-2 outline-none bg-[#262626] border-[#737373]'/>
                
                {/* Custom file input */}
                <label className='text-[20px] font-semibold mt-4'>Upload Proof of Payment</label>
                <div className='flex items-center gap-4'>
                  <button
                    type="button"
                    onClick={handleIconClick}
                    className='bg-[#262626] border-2 border-[#737373] rounded-xl p-4 flex items-center justify-center hover:bg-[#333] transition'
                  >
                    {/* <FaUpload size={24} className='text-blue-400' /> */}
                    <FontAwesomeIcon icon={faCloudUpload} className='text-blue-400' size='2x' />
                  </button>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                  />
                  {/* File preview area */}
                  <div className='flex-1'>
                    {file ? (
                      file.type.startsWith('image/') ? (
                        <img
                          src={URL.createObjectURL(file)}
                          alt="Preview"
                          className='h-16 rounded-lg border border-[#737373] object-cover w-[100px]'

                        />
                      ) : (
                        <span className='text-sm'>{file.name}</span>
                      )
                    ) : (
                      <span className='text-gray-400 text-sm'>Upload proof of payment</span>
                    )}
                  </div>
                </div>
            </form>
          </div>
        </div>
        <div className='flex flex-col justify-between mb-8 gap-4'>
            <button className='w-[150px] h-[50px] mx-auto bg-blue-500 rounded-xl text-white text-lg font-semibold border-none outline-none'>Proceed</button>
        </div>
    </div>
  )
}

export default ProofOfPayment