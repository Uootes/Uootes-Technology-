import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Sellprice = 0;

const CPTSell = () => {
  return (
    <div className='text-white h-screen h-f bg-black flex flex-col justify-between'>
            <div>
                <div className='p-4'>
                    <span className='text-[30px] font-bold'>
                        <FontAwesomeIcon icon={faArrowLeftLong} />
                    </span>
                </div>
                <div className='w-full flex items-center text-center justify-center'>
                    <h2 className=' text-[30px] font-bold'>Sell</h2>
                </div>
    
                <div className='w-[90%] lg:w-[50%] mt-3 gap-6 h-[300px] bg-[#262626] mx-auto rounded-3xl flex flex-col items-center justify-center'>
                    {/* Error message for insufficient balance */}
                    <h5 className='text-red-500 font-bold text-[20px] hidden'>Insufficient</h5>
                    <form action="" className='flex flex-col items-center w-[100%]'>
                        <div className='w-[90%] border-2 bg-[#464646] border-[#737373] p-4 h-[80px] rounded-2xl flex justify-between items-center'>
                            <input type="number" placeholder='Please enter amount' className='w-[90%] h-[50px] p-4 bg-transparent text-[18px] md:text-[25px] font-bold border-none outline-none'/>
                            <h2 className='text-[25px] font-bold'>CPT</h2>
                        </div>
                    </form>
                    <h2 className='text-[35px] font-bold'>GSC {Sellprice}.00</h2>
                </div>
            </div>
            <div className='w-full pb-8 flex justify-center items-center'>
                <button className='w-[90%] lg:w-[50%] h-[60px] bg-red-600 text-[25px] font-bold rounded-2xl'>Sell</button>
            </div>
        </div>
  )
}

export default CPTSell