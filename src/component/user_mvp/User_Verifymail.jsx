import { useState, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const User_Verifymail = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [loading, setLoading] = useState(false);
  const inputsRef = useRef([]);
  const navigate = useNavigate();
  const location = useLocation();
  const { email } = location.state || {};

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const enteredOtp = otp.join("");
    if (enteredOtp.length < 6) {
      Swal.fire({
        title: 'Error!',
        text: 'Please enter the complete OTP.',
        icon: 'error',
      });
      setLoading(false);
      return;
    }

    try {
      await axios.post('https://uootes.onrender.com/api/v1/verifyOtp', 
        { otp: enteredOtp },
        { headers: { 'Content-Type': 'application/json' } }
      );

      Swal.fire({
        title: 'Success!',
        text: 'Email verified successfully.',
        icon: 'success',
        timer: 1500,
      });

      navigate('/Userlogin');
    } catch (error) {
      Swal.fire({
        title: 'Oops!',
        text: error.response?.data?.message || 'Invalid or expired OTP.',
        icon: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex w-full items-center h-screen md:m-auto px-2 max-w-md'>
      <div className="bg-blue-900 text-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Verify your email</h1>
        <p className="text-center mb-6">Please enter the 6 digit code sent to {email}</p>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center space-x-2 mb-6">
            {otp.map((data, index) => {
              return (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  className="w-8 h-8 md:w-12 md:h-12 text-2xl text-center bg-white text-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={data}
                  onChange={e => handleChange(e.target, index)}
                  onFocus={e => e.target.select()}
                  ref={el => inputsRef.current[index] = el}
                />
              );
            })}
          </div>
          <div className="text-center mb-6">
            <Link to="/">
              <a href="#" className="text-gray-300 hover:underline">Resend code</a>
            </Link>
          </div>
          <button 
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-white text-blue-900 font-medium rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {loading ? 'Verifying...' : 'Continue'}
          </button>
        </form>
        <div className="text-center mt-4">
          <Link to="/">
            <a href="#" className="text-gray-300 hover:underline">Change email</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default User_Verifymail;
