import { useState} from 'react';
import LOgo from "/src/assets/LOgo.png";
import Swal from 'sweetalert2';
// import '../App.css';
import { useNavigate } from 'react-router-dom';

const User_ResetInfor = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

  // If you need a token from the URL, extract it here (adjust as needed)
  // Example: /reset-password?token=abc
  // const query = new URLSearchParams(location.search);
  // const token = query.get('token');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Passwords do not match!',
      });
      return;
    }
    setLoading(true);
    try {
      const response = await fetch('https://uootes.onrender.com/api/v1/resetPassword-exchanger', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          newPassword,
          confirmPassword,
          // ...(token && { token }), // Uncomment if backend requires token
        }),
      });

      if (response.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Your password has been successfully reset!',
        }).then(() => {
          navigate('/login'); // Redirect to login or any page
        });
      } else if (response.status === 400) {
        Swal.fire({
          icon: 'error',
          title: 'Invalid Request',
          text: 'Invalid token or request!',
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Server Error',
          text: 'Internal server error. Please try again later.',
        });
      }
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Network Error',
        text: 'Please check your connection and try again.',
      });
    }
    setLoading(false);
  };

  return (
    <div className="bg-white flex justify-center items-center h-screen">
      <div className="bg-blue-900 w-11/12 md:w-1/2 items-center py-6">
        <img src={LOgo} alt="" className='w-26 relative' />
        <div className="md:mx-20 text-center pb-6">
          <h2 className="text-white text-3xl font-semibold py-6">
            Password Reset!
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 my-6">
            <input
              type="password"
              placeholder="New Password"
              className="p-3 rounded"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              minLength={6}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="p-3 rounded"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              minLength={6}
            />
            <button
              type="submit"
              className="bg-white text-black rounded px-10 py-2 font-semibold"
              disabled={loading}
            >
              {loading ? "Resetting..." : "Reset Password"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default User_ResetInfor;