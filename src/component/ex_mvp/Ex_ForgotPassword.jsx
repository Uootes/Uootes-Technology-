import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const Ex_ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if(!email) {
      Swal.fire({
        title: 'Error',
        text: 'Please enter your email address',
        icon: 'error'
      })
      setLoading(false);
      return;
    }

    try {
      await axios.post('https://uootes.onrender.com/api/v1/forgotPassword-exchanger', 
        { email },
        {
          headers: {
            'Content-Type': 'application/json'
          },
        }
      );
      Swal.fire({
        title: 'OTP Sent',
        text: `A verification code has been sent to ${email}`,
        icon: 'success',
        timer: 1500,
      });

      navigate('/Ex_ResetPassword', {state: {email}});
    } catch (error) {
      Swal.fire({
        title: 'Oops!',
        text: error.response?.data?.message || 'Failed to send OTP. Pls try again.',
        icon: 'error'
      })
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
       <div className='w-full h-[100vh]'>
        <div className='w-full h-[100%] my-auto flex justify-center'>
            <div className='modal w-full sm:w-[90%] md:w-[80%] lg:scale-100 lg:w-[60%] h-[100vh] sm:h-[70vh] md:h-[70vh] lg:h-[70vh] bg-[#E3E5EE] my-auto sm:rounded-xl  pr-0 flex justify-center '>

              <div className='fixed z-[2000] flex flex-row w-100%] pt-8  md:mt-0 lg:mt-0'>

                {/* <div className='checklogo ml-8 sm:ml-[65px] md:ml-[120px] lg:ml-8'></div> */}
                <div className="w-full flex justify-center">
                  <h2 className="headText font-semibold text-xl md:text-3xl text-[#000] ">
                    Forgot Password
                  </h2>
                </div>

              </div>

              
            <div className='w-[100%] md:w-[60%] lg:w-[60%] fixed flex justify-center mt-[90px] md:mt-[90px]  lg:mt-[90px]'> 
                <h2 className='text-center w-[90%] text-[10px] font-semibold'>Enter the email address you used to create the account, and we <br /> will email you instructions to reset your password</h2>
                
            </div>
            

            <form 
              onSubmit={handleSubmit}
              className='w-[100%] md:w-[60%] lg:w-[60%] fixed flex flex-col justify-center  mt-[170px] md:mt-[190px]  lg:mt-[190px]'
            > 
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='mx-auto w-[80%] h-[40px] bg-transparent rounded-lg border-[1px] pl-[10px] border-black outline-none text-[16px] font-semibold' 
                  placeholder='Email'
                />

                <button 
                  type='submit'
                  disabled={loading}
                  className='mx-auto w-[390px] md:w-[400px] h-[45px] hover:bg-gray-600 mt-[28px] rounded-lg bg-[#002853] shadow-md shadow-blue-200 outline-none text-white font-semibold text-lg ml-12 md:ml-11'
                >
                  {loading ? 'Sending OTP...' : 'Verify Email'}
                </button>

                <h2 className='mx-auto text-black font-semibold mt-[20px]'>
                  Didn't receive an email?{' '}
                  <a href="#" onClick={handleSubmit} className='text-blue-500'>Resend</a> 
                </h2>
               
            </form>

                {/* <div className='w-full h-full flex justify-start'> */}
                  {/* <div className='vector2 mr-[-39.5px] hidden lg:block  '> */}
                       {/* <img className=' w-[100px] h-[100px]' alt='Vector'/> */}
                       {/* </div> */}
                       {/* <div className='hidden lg:block vectorC bg-gradient-to-b from-[#c2c5cf] to-[#cccce3] w-[10%] sm:rounded-2xl'></div> */}
                {/* </div> */}
             </div>
         </div>
     </div>
   
    </div>
  )
}

export default Ex_ForgotPassword