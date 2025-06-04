import React from 'react'

const DepositAcknowledgment = () => {
  return (
    <div className='w-full h-[100vh] bg-black text-white flex flex-col justify-between text-center'>
        <div className='w-[100%] pt-8'>
          <h2 className='text-center text-[30px] font-semibold'>Acknowledge</h2>
          <div className='w-[90%] lg:w-[50%] mt-4 border-2 mx-auto bg-[#262626] border-[#737373] p-4'>
            <p className='text-sm/7'>I, acknowledge that I have made a payment of $100.00 to the wallet address. <br />I understand that the token will not be released until the payment is confirmed. I am aware that if the payment is not received within 30 minutes, the payment will be disputed. <br />In the event of a dispute, I acknowledge that I will need to approve the dispute within the specified timeframe. If I fail to do so, the token will be unlocked and reversed back to the Seller. <br />I confirm that I have made the payment and agree to the terms outlined above.</p>
          </div>
        </div>
        <div className='flex flex-col justify-between mb-8 gap-4'>
          <div className='w-[90%] flex justify-between lg:w-[50%] mx-auto p-4'>
            <h1 className='text-[#737373] text-[25px] font-semibold'>Acknowledge</h1>
            <input type="checkbox" className='w-[30px] h-[30px]'/>
          </div>
            <button className='w-[150px] h-[50px] mx-auto bg-blue-500 rounded-xl text-white text-lg font-semibold border-none outline-none'>Proceed</button>
        </div>
    </div>
  )
}

export default DepositAcknowledgment