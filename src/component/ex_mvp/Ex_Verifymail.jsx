import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';

const Ex_Verifymail = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [loading, setLoading] = useState(false);
    const {email, isPasswordReset } = location.state || {};

    const handleInputChange = (id, value) => {
        if (/^[0-9]?$/.test(value)) { // Allow only single digit
            const newOtpDigits = [...otp];
            newOtpDigits[id] = value;
            setOtp(newOtpDigits);
    
            // Auto-focus next input
            if (value && id < 5) {
            document.getElementById(`otp-${id + 1}`).focus();
            }
        }
    };
    
    const handlePaste = (e) => {
    const pastedData = e.clipboardData.getData('text').slice(0, 6);
    if (/^\d{6}$/.test(pastedData)) {
        setOtpDigits(pastedData.split(''));
        document.getElementById('otp-5').focus();
    }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const otpDigits = otp.join('');
        if (!otpDigits || otpDigits.length !== 6) {
        Swal.fire({
            title: 'Error!',
            text: 'Please enter a valid 6-digit OTP.',
            icon: 'error',
        });
        setLoading(false);
        return;
        }

        try {
            const res = await axios.post(
            'https://uootes.onrender.com/api/v1/verifyOtp-exchanger',
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
                ? 'https://uootes.onrender.com/api/v1/forgotPassword-exchanger'
                : 'https://uootes.onrender.com/api/v1/verifyOtp-exchanger',
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
                text: 'Failed to resend OTP.',
                icon: 'error',
            });
        }
    };

    return (
        <div className='flex w-full items-center h-screen md:m-auto px-2 max-w-md'>
            <div className="bg-blue-900 text-white p-8 rounded-lg shadow-lg   ">
                {/* heading */}
                <h1 className="text-2xl font-bold mb-4 text-center">Verify your email</h1>
                <p className="text-center mb-6">Please enter the 6 digit code sent to your email
                </p>
                {/* input box */}
                <form onSubmit={handleSubmit} >
                    <div className="flex justify-center space-x-2 mb-6" onPaste={handlePaste}>
                        {otp.map((digit, id) => (
                            <input 
                                type="text"
                                key={id}
                                id={`otp-${id}`}
                                value={digit} 
                                onChange={(e) => handleInputChange(id, e.target.value)}
                                maxLength="1" 
                                className="w-8 h-8 md:w-12 md:h-12 text-2xl text-center bg-white text-black rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            />
                        ))}

                    </div>

                    {/* resend link */}
                    <div className="text-center mb-6">
                        <button 
                        type='submit'
                        onClick={handleResend}
                        className="text-gray-300 hover:underline">
                            Resend code
                        </button>
                    </div>

                    {/* confirm button */}
                    <button 
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 bg-white text-blue-900 font-medium rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        {loading ? 'Verifying...' : 'Verify OTP'}
                    </button>

                    {/* changed mail link */}
                    <div className="text-center mt-4">
                        <Link to="/UserSignup" className="text-gray-300 hover:underline">Change email
                        </Link>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Ex_Verifymail