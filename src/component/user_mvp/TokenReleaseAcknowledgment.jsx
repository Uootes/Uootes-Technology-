import React from 'react'

const TokenReleaseAcknowledgment = () => {
  return (
    <div className='w-full h-[100vh] bg-black text-white flex flex-col justify-between text-center'>
        <div className='w-[100%] pt-8'>
          <h2 className='text-center text-[30px] font-semibold'>Acknowledge</h2>
          <div className='w-[90%] lg:w-[50%] mt-4 border-2 mx-auto bg-[#262626] border-[#737373] p-4'>
            <p className='text-sm/7'>I acknowledge that I have received the amount of $100.00 from the Buyer. I confirm that I am ready to release the token</p>
          </div>
        </div>
        <div className='flex flex-col justify-between mb-8 gap-8'>
          <div className='w-[90%] flex justify-between lg:w-[50%] mx-auto p-4'>
            <h1 className='text-[#737373] text-[25px] font-semibold'>Acknowledge</h1>
            <input type="checkbox" className='w-[30px] h-[30px]'/>
          </div>
            <button className='w-[150px] h-[50px] mx-auto bg-blue-500 rounded-xl text-white text-lg font-semibold border-none outline-none'>Proceed</button>
        </div>
    </div>
  )
}

export default TokenReleaseAcknowledgment