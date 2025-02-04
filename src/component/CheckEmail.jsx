import '../App.css';
import React, { useRef } from 'react';

const CheckEmail = () => {
    const inputs = useRef([]);

    const handleChange = (e, index) => {
        if (e.target.value.length > 1) return; // Allow only one digit
        if (e.target.value) {
          if (index < 5) {
            inputs.current[index + 1]?.focus(); // Move to next input
        } else {
            inputs.current[index]?.blur(); // Lose focus on the last input
        }
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !e.target.value) {
            inputs.current[index - 1]?.focus(); // Move to previous input
        }
    };


  return (
    <div className='w-full h-[100vh]'>
        <div className='w-full h-[100%] my-auto flex justify-center'>
            <div className='modal w-full sm:w-[90%] md:w-[80%] lg:scale-100 lg:w-[60%] h-[100vh] sm:h-[70vh] md:h-[70vh] lg:h-[70vh] bg-[#E3E5EE] my-auto sm:rounded-xl  pr-0 flex justify-center '>

              <div className='fixed z-[200000000000000000000] flex flex-row w-[100%] pt-8  md:mt-0 lg:mt-0  '>

                <div className='checklogo ml-8 sm:ml-[65px] md:ml-[120px] lg:ml-8'></div>
                <div className='head  flex flex-col justify-center ml-[-20px] md:ml-[20px] lg:ml-16 xl:ml-[90px] items-center'>
                  <h2 className='headText font-semibold text-xl md:text-3xl text-[#000]'>Please check your email</h2>
                  <h5 className='text-[13px] md:text-[15px] mt-2'>We've sent a code to <span className='text-[10px] px] md:text-[17px] font-bold text-[#000]'>myemail@gmail.com</span> </h5>
                
                </div> 

              </div>

              
            <div className='w-[100%] md:w-[60%] lg:w-[60%] fixed flex justify-center gap-x-4 sm:gap-x-4 md:gap-x-8 mt-[170px] md:mt-[170px]  lg:mt-[170px]'> 
 
            {Array.from({ length: 6 }).map((_, index) => (
            
              
              <input
                  key={index}
                  type="number"
                  maxLength="1"
                  ref={el => inputs.current[index] = el}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className='input w-[40px] h-[45px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] lg:w-[60px] lg:h-[58px] rounded-lg bg-transparent border-[1.3px] border-black  outline-none font-medium  text-2xl text-center px-auto shadow-md shadow-[#cccce3]'
              />
              
              
          ))}
      
               </div>
            


              <div className='w-full fixed mt-[270px] md:mt-[270px]  lg:mt-[270px] flex flex-col justify-center items-center'>
                 <button className='w-[300px] md:w-[400px] h-[50px] hover:bg-gray-600 mt-[28px] rounded-lg bg-[#002853] shadow-md shadow-blue-200 outline-none text-white font-semibold text-lg'>Verify Email</button>
                 <h2 className='text-black font-semibold mt-[20px]'>Didn't receive an email? <a href="#" className='text-blue-500'>Resend</a></h2>
               </div>


                <div className='w-full h-full flex justify-end'>
                  <div className='vector mr-[-39.5px] hidden lg:block  '>
                       {/* <img className=' w-[100px] h-[100px]' alt='Vector'/> */}
                       </div>
                       <div className='hidden lg:block vectorC bg-gradient-to-b from-[#c2c5cf] to-[#cccce3] w-[10%] sm:rounded-2xl'></div>
                </div>
             </div>
         </div>
     </div>
   );
  };

  export default CheckEmail;