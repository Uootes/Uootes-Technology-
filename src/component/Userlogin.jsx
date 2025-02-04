import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye  } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash  } from '@fortawesome/free-solid-svg-icons';
import '../App.css';
import { Link } from 'react-router-dom';

const Userlogin = () => {
  return (
    <div className='w-full h-[100vh] align-middle'>
      <div className='w-full h-[100%] my-auto flex justify-center'>
        <div className='w-full sm:w-[90vh] md:w-[80%] lg:w-[60%] h-[100vh] sm:h-[90vh] md:h-[90vh] lg:h-[90vh] rounded-xl bg-gray-100 my-auto pr-0 flex flex-row justify-between'>
          
          {/* Left Side */}
          <div className='ExSideImg w-[50%] h-[100%] rounded-xl justify-center align-middle hidden lg:flex'>
            <div className='w-full h-full bg-[#002853] rounded-xl opacity-95'>
              <div className='ExSideLogo mt-[50px] scale-50'></div>
              <div className='bg-transparent ml-[23px] w-auto mt-[10px]'>
                <h2 className='font-semibold text-[28px] text-white'>Welcome Back to<br /> Uootes Crypto </h2>
                <div className='w-[80px] h-[2px] bg-gray-400 mt-[20px]'></div>
              </div>
              <div>
                <p className='text-white w-[90%] ml-[20px] mt-[40px] text-[13px]'>Your gateway to secure trading and real-time crypto insights. Login to explore endless possibilities! <br /> Let's build your financial future, one transaction at a time. </p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className='w-[100%] lg:w-[50%]'>
            {/* Image for mobile view */}
            <div className='ExSideLogo mt-[0px] scale-50 lg:hidden'></div>

            <div className='w-[100%] flex justify-center mt-[-70px] lg:mt-[0px]'>
              <h2 className='text-[25px] font-semibold mt-[15px] text-[#002853]'>Login</h2>
            </div>

            <form action="" className='w-[100%] h-[90%] flex flex-col gap-y-5 mt-8 md:gap-y-4 lg:gap-y-5  lg:mt-2 overflow-auto'>
              <input type="text" className='outline-none w-[80%] md:w-[60%] lg:w-[80%] h-[45px] lg:h-[35px] bg-transparent shadow-lg shadow-gray-300 text-[13px] font-semibold rounded-md mx-auto border-[1px] pl-[10px] border-[#002853]' placeholder='Email' />
                <input type="password" className='outline-none w-[80%] md:w-[60%] lg:w-[80%] h-[45px] lg:h-[35px] bg- shadow-lg shadow-gray-300 text-[13px] font-semibold rounded-md mx-auto border-[1px] pl-[10px] border-[#002853]' placeholder='Password' />
              
{/* 
              <div className='flex w-[80%] md:w-[60%] lg:w-[80%] mx-auto'>
                  <input type="checkbox" />
                <h2 className='ml-[5px] text-[14px] text-gray-500 font-semibold'>Accept Terms & Conditions</h2>
              </div> */}

              <Link to="/">
                <button className='w-[80%] md:w-[60%] lg:w-[80%] h-[45px] lg:h-[35px] mx-auto rounded-md bg-[#002853] text-white text-[14x] font-normal ml-10'>Login</button>
              </Link>

              <div className='w-[80%] md:w-[60%] lg:w-[80%] mx-auto flex justify-evenly align-middle mt-[10px]'>
                <div className='w-[100px] h-[1px] bg-gray-400 my-auto'></div>
                <h2 className='text-[12px] text-gray-600'>Or</h2>
                <div className='w-[100px] h-[1px] bg-gray-400 my-auto'></div>
              </div>

              <div className='w-[80%] mx-auto'>
                <h2 className='text-center text-[13px] font-semibold text-gray-700'>Don't have an account ? <Link to="/Signup" className='text-blue-500'>Sign up
                </Link></h2>
                <Link to="/ForgottenPassword">
                  <h2 className='text-center text-[13px] font-semibold text-blue-500'>Forgotten password</h2>
                </Link>
              </div>

              <div className='w-[100%] pb-4 md:pb-0 flex flex-col justify-center gap-y-2 mt-[2px]'>
                <button className='w-[80%] md:w-[60%] lg:w-[80%] h-[35px] mx-auto rounded-md bg-transparent shadow-lg shadow-gray-300 border-[#002853] border-[1px] text-[14x] font-normal'>Login Up With Google</button>
                <button className='w-[80%] md:w-[60%] lg:w-[80%] h-[35px] mx-auto rounded-md bg-[#002853] text-white text-[14x] font-normal'>Login Up With Apple</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Userlogin;