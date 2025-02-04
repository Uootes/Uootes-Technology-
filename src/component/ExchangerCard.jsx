import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

const ExchangerCard = () => {
  return (
    <div className='w-[100%] h-[100vh] bg-[#002853] flex flex-col justify-between'>
        <div>
            <div className='flex justify-center'>
                <div className='ExSideLogo  scale-50 '></div>
            </div>

            <div>
                <h2 className='text-[37px] text-white font-semibold w-[70%] md:w-[25%] lg:w-[35%] ml-[30px]'>Earn 10%-20% Profit on Every Transaction as an Exchanger</h2>
                <p className='text-white ml-[20px] lg:text-left lg:ml-[30px] text-[25px] font-semibold mt-[40px]'>KYC verification required</p>
            </div>
        </div>

        <div className='pb-8'>
            <Link>
                <div className='w-[100%] flex justify-center lg:block mt-[70px]'>
                    <button className='w-[90%] h-[55px] lg:w-[30%] lg:ml-[30px] bg-white rounded-lg text-[22px] font-semibold text-[#002853]'>Get Started </button>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default ExchangerCard