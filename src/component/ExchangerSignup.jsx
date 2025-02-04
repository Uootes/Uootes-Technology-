import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';


const ExchangerSignUp = () => {
  return (
    <div className='w-full h-[100vh]  align-middle '>
        <div className='w-full h-[100%] my-auto flex justify-center '>
            <div className='w-full sm:w-[90vh] md:w-[80%]  lg:w-[60%] h-[100vh] sm:h-[90vh] md:h-[90vh] lg:h-[90vh] rounded-xl bg-gray-100 my-auto  pr-0 flex flex-row justify-between'>
                
                {/* Left Side */}

                <div className='ExSideImg w-[50%] h-[100%]  rounded-xl justify-center align-middle hidden lg:flex '>
                    <div className='w-[100%] h-[100%]  bg-[#002853] rounded-xl opacity-95 '>

                      <div className='ExSideLogo mt-[50px] scale-50'></div>

                      <div className='bg-transparent ml-[23px] w-auto mt-[10px]'>
                        <h2 className='font-semibold text-[28px] text-white'>Create Your <br /> Account </h2>
                        <div className='w-[80px] h-[2px] bg-gray-400 mt-[20px]'></div>
                      </div>

                      <div>
                        <p className='text-white w-[90%] ml-[20px] mt-[40px]'>Sign up to experience the freedom to earn easily and go borderless.</p>
                      </div>

                    </div>
                </div> {/** #f47133 for learn more button */} 

                {/* Right Side */}

                <div className='w-[100%] lg:w-[50%]'>
                <div className='ExSideLogo mt-[0px] scale-50 lg:hidden'></div>
                  <div className='w-[100%] flex justify-center mt-[-80px] lg:mt-[0px]'>
                    <h2 className='text-[25px] font-semibold mt-[15px] text-[#002853]'>Sign Up</h2>
                  </div>

                    <form action="" className='w-[100%] h-[90%] flex flex-col gap-y-5 md:gap-y-4 lg:gap-y-2 mt-6 lg:mt-2 overflow-auto'>
                      <input type="text" className=' outline-none w-[80%] md:w-[60%] lg:w-[80%] h-[45px] lg:h-[30px] bg-transparent shadow-lg shadow-gray-300 text-[13px] font-semibold rounded-md mx-auto border-[1px] pl-[10px] border-[#002853]' placeholder='First Name'/>
                      <input type="text" className=' outline-none w-[80%] md:w-[60%] lg:w-[80%] h-[45px] lg:h-[30px] bg-transparent shadow-lg shadow-gray-300 text-[13px] font-semibold rounded-md mx-auto border-[1px] pl-[10px] border-[#002853]' placeholder='Last Name'/>
                      <select name="" id="" className='outline-none w-[80%] md:w-[60%] lg:w-[80%] h-[45px] lg:h-[30px] bg-transparent shadow-lg shadow-gray-300 text-[13px] font-semibold rounded-md mx-auto border-[1px] pl-[10px] border-[#002853] text-black'placeholder='Select Country'>
                        <option value="" className='text-black'>Select Country</option> 
                        <option value=""  className='text-black'>Nigeria</option>
                        <option value=""  className='text-black'>Ghana</option>
                        <option value=""  className='text-black'>South Africa</option>
                      </select>
                      <input type="text" className=' outline-none w-[80%] md:w-[60%] lg:w-[80%] h-[45px] lg:h-[30px] bg-transparent shadow-lg shadow-gray-300 text-[13px] font-semibold rounded-md mx-auto border-[1px] pl-[10px] border-[#002853]' placeholder='Email'/>
                      <input type="password" className=' outline-none w-[80%] md:w-[60%] lg:w-[80%] h-[45px] lg:h-[30px] bg-transparent shadow-lg shadow-gray-300 text-[13px] font-semibold rounded-md mx-auto border-[1px] pl-[10px] border-[#002853]' placeholder='Password'/>
                      <input type="password" className=' outline-none w-[80%] md:w-[60%] lg:w-[80%] h-[45px] lg:h-[30px] bg-transparent shadow-lg shadow-gray-300 text-[13px] font-semibold rounded-md mx-auto border-[1px] pl-[10px] border-[#002853]' placeholder='Confirm Password'/>

                      <div className='flex w-[80%] md:w-[60%] lg:w-[80%] mx-auto'>
                        <input type="checkbox" />
                        <h2 className='ml-[5px] text-[14px] text-gray-500 font-semibold'>Accept <Link to="/terms"><span className='text-blue-500'>Terms & Conditions</span></Link></h2>
                      </div>

                      
                      <div className='w-[80%] md:w-[60%] lg:w-[80%] h-[45px] lg:h-[37px] mx-auto rounded-md bg-[#002853]'>
                        <Link to="/">
                          <button className='w-full md:w-full lg:w-full h-full lg:h-full mx-auto rounded-md bg-[#002853] text-white font-normal'>Create Account</button>
                        </Link>
                      </div>

                      <div className='w-[80%] md:w-[60%] lg:w-[80%] mx-auto flex justify-evenly align-middle mt-[10px]'>
                        <div className='w-[100px] h-[1px] bg-gray-400 my-auto'></div>
                        <h2 className='text-[12px] text-gray-600'>Or</h2>
                        <div className='w-[100px] h-[1px] bg-gray-400 my-auto '></div>
                      </div>

                      <div className='w-[80%] mx-auto'>
                        <Link to="/Login">
                          <h2 className='text-center text-[13px] font-semibold text-gray-700'>Already have an accout? <a href="#" className='text-blue-500'>Login</a></h2>
                        </Link>
                      </div>

                      <div className='w-[100%] pb-4 md:pb-0  flex flex-col justify-center gap-y-2 mt-[10px]'>
                        <button className='w-[80%] md:w-[60%] lg:w-[80%] h-[37px] mx-auto rounded-md  bg-transparent shadow-lg shadow-gray-300 border-[#002853] border-[1px] text-[14x] font-normal'>Sign Up With Google</button>
                        <button className='w-[80%] md:w-[60%] lg:w-[80%] h-[37px] mx-auto rounded-md bg-[#002853] text-white text-[14x] font-normal'>Sign Up With Apple</button>
                      </div>
                    </form>
          
                </div>
             </div>
        </div>
    </div>
  )
}

export default ExchangerSignUp;                
                                                    
                          
