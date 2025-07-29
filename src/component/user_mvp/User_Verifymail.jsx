import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';

const User_Verifymail = () => {
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { email, isPasswordReset } = location.state || {};

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!otp) {
      Swal.fire({
        title: 'Error!',
        text: 'Please enter the OTP.',
        icon: 'error',
      });
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post(
        'https://uootes.onrender.com/api/v1/verifyOtp',
        { email, otp, type: isPasswordReset ? 'forgot-password' : 'signup' },
        { headers: { 'Content-Type': 'application/json' } }
      );

      if (isPasswordReset) {
        // For password reset, redirect to reset password page
        Swal.fire({
          title: 'Success!',
          text: 'OTP verified. You can now reset your password.',
          icon: 'success',
          timer: 1500,
        });
        navigate('/reset-password', { state: { email } });
      } else {
        // For signup, move tempToken to userToken and redirect to dashboard
        const tempToken = Cookies.get('tempToken');
        Cookies.set('userToken', tempToken, { expires: 1 / 24, secure: true, sameSite: 'Strict' });
        Cookies.remove('tempToken');

        Swal.fire({
          title: 'Success!',
          text: 'Email verified successfully.',
          icon: 'success',
          timer: 1500,
        });
        navigate('/User_dashboard');
      }
    } catch (error) {
      Swal.fire({
        title: 'Oops!',
        text: error.response?.data?.message || 'Invalid OTP. Please try again.',
        icon: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    try {
      await axios.post(
        isPasswordReset
          ? 'https://uootes.onrender.com/api/v1/forgot-password'
          : 'https://uootes.onrender.com/api/v1/verify-otp/send',
        { email },
        { headers: { 'Content-Type': 'application/json' } }
      );
      Swal.fire({
        title: 'OTP Resent!',
        text: 'A new verification code has been sent to your email.',
        icon: 'success',
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        title: 'Oops!',
        text: error.response?.data?.message || 'Failed to resend OTP.',
        icon: 'error',
      });
    }
  };

  return (
    <div className="w-full h-[100vh]">
      <div className="w-full h-[100%] my-auto flex justify-center">
        <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[60%] h-[100vh] sm:h-[70vh] md:h-[70vh] lg:h-[70vh] bg-[#E3E5EE] my-auto sm:rounded-xl pr-0 flex justify-center">
          <div className="fixed z-[2000] flex flex-row w-[100%] pt-8">
            <div className="checklogo ml-8 sm:ml-[65px] md:ml-[120px] lg:ml-8"></div>
            <div className="head w-auto md:ml-10 flex justify-center">
              <h2 className="font-semibold text-xl md:text-3xl text-[#000] md:ml-[90px] lg:ml-[100px]">
                Verify OTP
              </h2>
            </div>
          </div>

          <div className="w-[100%] md:w-[60%] lg:w-[60%] fixed flex justify-center mt-[90px] md:mt-[90px] lg:mt-[90px]">
            <h2 className="text-center w-[90%] text-[10px] font-semibold">
              Enter the OTP sent to {email || 'your email'} to verify your {isPasswordReset ? 'password reset' : 'email'}.
            </h2>
          </div>

          <form
            onSubmit={handleSubmit}
            className="w-[100%] md:w-[60%] lg:w-[60%] fixed flex flex-col justify-center mt-[170px] md:mt-[190px] lg:mt-[190px]"
          >
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              className="mx-auto w-[80%] h-[40px] bg-transparent rounded-lg border-[1px] pl-[10px] border-black outline-none text-[16px] font-semibold"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="mx-auto w-[80%] md:w-[400px] h-[45px] hover:bg-gray-600 mt-[28px] rounded-lg bg-[#002853] shadow-md shadow-blue-200 outline-none text-white font-semibold text-lg"
            >
              {loading ? 'Verifying...' : 'Verify OTP'}
            </button>
            <h2 className="mx-auto text-black font-semibold mt-[20px]">
              Didn't receive an OTP?{' '}
              <a href="#" onClick={handleResend} className="text-blue-500">
                Resend
              </a>
            </h2>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User_Verifymail;
