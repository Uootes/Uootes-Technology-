import React from 'react'

const CancelPayment = () => {
  return (
    <div className='w-full h-[100vh] bg-black text-white flex flex-col justify-between text-center overflow-y-auto'>
        <div className='w-[100%] pt-8'>
          <h2 className='text-center text-[30px] font-semibold'>Payment Cancel</h2>
          <div className='w-full flex flex-col gap-8 justify-center items-center mt-8'>
            <div className='w-[90%] bg-[#262626] border-[#737373] border-2 flex justify-between lg:w-[50%] mx-auto p-4'>
                <h1 className='text-[#737373] text-[25px] font-semibold'>Changed mind</h1>
                <input type="checkbox" className='w-[30px] h-[30px]'/>
            </div>

            <div className='w-[90%] bg-[#262626] border-[#737373] border-2 flex justify-between lg:w-[50%] mx-auto p-4'>
                <h1 className='text-[#737373] text-[25px] font-semibold'>Insufficient funds</h1>
                <input type="checkbox" className='w-[30px] h-[30px]'/>
            </div>

            <div className='w-[90%] bg-[#262626] border-[#737373] border-2 flex justify-between lg:w-[50%] mx-auto p-4'>
                <h1 className='text-[#737373] text-[25px] font-semibold'>Payment issues</h1>
                <input type="checkbox" className='w-[30px] h-[30px]'/>
            </div>

            <div className='w-[90%] bg-[#262626] border-[#737373] border-2 flex justify-between lg:w-[50%] mx-auto p-4'>
                <h1 className='text-[#737373] text-[25px] font-semibold'>Technical issues</h1>
                <input type="checkbox" className='w-[30px] h-[30px]'/>
            </div>

            <div className='w-[90%] bg-[#262626] border-[#737373] border-2 flex justify-between lg:w-[50%] mx-auto p-4'>
                <h1 className='text-[#737373] text-[25px] font-semibold'>Exceeded limit</h1>
                <input type="checkbox" className='w-[30px] h-[30px]'/>
            </div>

            <div className='w-[90%] bg-[#262626] border-[#737373] border-2 flex justify-between lg:w-[50%] mx-auto p-4'>
                <h1 className='text-[#737373] text-[25px] font-semibold'>Others</h1>
                <input type="checkbox" className='w-[30px] h-[30px]'/>
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-between mb-8 mt-8 gap-4'>
            <button className='w-[150px] h-[50px] mx-auto bg-blue-500 rounded-xl text-white text-lg font-semibold border-none outline-none'>Proceed</button>
        </div>
    </div>
  )
}

export default CancelPayment