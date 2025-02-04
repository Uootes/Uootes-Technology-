import React from 'react'

function Howitworks() {
  return (
    <div className='pt-20 md:p-12' id='howitworks'> 
      {/* Roadmap Header Section*/}
      <div className='ml-[20px] '>
        <div className='bg-gradient-to-r from-[#a454b8] to-[#d58836cd] mx-6 w-[40px] h-[10px] rounded-lg'></div>
        <h2 className='text-orange-400 mx-6 font-semibold text-[26px] mt-[3px]'>How it Works</h2>
      </div>

      <div className="grid grid-cols-1  md:grid-cols-2 mt-[30px]  w-[100%] px-12">
        {/* First or Left Section of the Roadmap Section */}
        <div className="m-auto md:ml-[30px] lg:ml-[100px] ">

          <div className="flex items-center md:flex-row flex-col-reverse ">
            <h2 className=" text-xl text-white">SignUp</h2>
            <span className="text-5xl font-bold ml-[15px] text-[#E74763]">01</span>
          </div>


          <div className="flex items-center md:flex-row flex-col-reverse my-5 md:ml-[50px] ">
            <h2 className="text-xl text-white">Activate your account</h2>
            <span className="text-5xl font-bold ml-[15px] text-[#E17B6F]">02</span>
          </div>

          <div className="flex items-center md:flex-row flex-col-reverse my-5 md:ml-[100px]">

            <h2 className="text-xl text-white md:w-[60%]">Complete a simple task to receive a free CPT token</h2>
            <span className="text-5xl font-bold ml-[15px] text-[#BD70B4]">03</span>
          </div>

          <div className="flex flex-row-reverse items-center md:flex-row  my-5 md:ml-[180px]">
            <h2 className="text-xl text-white">Purchase CPT token</h2>
            <span className="text-5xl font-bold ml-[15px] text-[#71C18E]">04</span>

          </div>

        </div>


        {/* Second or Right Section of the Roadmap Section [#240D61]  */}
        <div className="m-auto md:mr-[30px] lg:mr-[100px]">

          {/* fifth */}
          <div className="flex items-center md:flex-row flex-col">
            <span className="text-5xl font-bold mr-[15px] text-[#37CDF2]">05</span>
            <h2 className="text-xl text-white">Sell your purchased CPT tokens for a profit </h2>
          </div>
          {/* sixth */}
          <div className="flex items-center md:flex-row flex-col my-5 md:ml-[50px]">
            <span className="text-5xl font-bold mr-[15px] text-[#547BBC]">06</span>
            <h2 className="text-xl text-white">Validate your incubator countdown every 6 hours</h2>
          </div>
          {/* seventh */}
          <div className="flex items-center md:flex-row flex-col my-5 md:ml-[100px]">
            <span className=" text-5xl font-bold mr-[15px] text-[#8999B2]">07</span>
            <h2 className="text-xl text-white" >Grow your community by refering friends to earn coupons </h2>
          </div>
          {/* eighth */}
          <div className="flex items-center md:flex-row flex-col my-5 md:ml-[150px]">
            <span className=" text-5xl font-bold mr-[15px] text-[#FFD28E] ">08</span>
            <h2 className="text-xl text-white">Redeem coupons to claim incentives bonuses</h2>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Howitworks;