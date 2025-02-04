import React from 'react';
import LOgo from "/src/assets/LOgo.png";
import { Gradient } from "./design/svg";

const Createnewpassword = () => {
  return (
    <div className="bg-white flex relative justify-center items-center h-screen">
      <div className='bg-[#E3E5EE] relative w-11/12 h-2/3 md:w-1/2 md:h-2/3 items-center justify-center pt-6 rounded-md'>
        <img src={LOgo} alt="" className='w-26 mt-[-10px] relative' />
        
        <form action="" className='flex flex-col absolute  items-center justify-center md:mt-[-60px] text-center md:ml-4 pb-6'>
          <h2 className="text-black text-3xl font-semibold py-4 ">Create New Password! </h2>
          <p className="pb-4 text-slate-800 md:px-[7rem] mt-4">Your new password must be different from any of your previous passwords.</p>
          <input type="password" name='password' placeholder='Password' className='py-2 md:my-4 my-4 placeholder:bg-[#E3E5EE] placeholder:py-4 placeholder:pl-2 rounded border border-[#767679] w-[85%] md:w-[70%]' />

          <input type="password" name='confirmpassword' placeholder='Confirm Password' className='py-2 md:my-4 my-4 placeholder:bg-[#E3E5EE] placeholder:py-4 placeholder:pl-2 rounded border border-[#767679] w-[85%] md:w-[70%]' />

          <button className="bg-[#002853] text-center relative text-blue-200 rounded mt-6 md:my-4 px-10 py-2">Reset Password</button>
        </form>

        <Gradient className="h-[500px]" />
      </div>
    </div>
  )
}

export default Createnewpassword