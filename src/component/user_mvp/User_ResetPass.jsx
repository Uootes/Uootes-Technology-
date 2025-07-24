// import { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Swal from 'sweetalert2';

// const ResetPassword = () => {
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();
//   const { email } = useLocation().state || {};

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     if (!newPassword || !confirmPassword) {
//       Swal.fire({
//         title: 'Error!',
//         text: 'Please fill all fields.',
//         icon: 'error',
//       });
//       setLoading(false);
//       return;
//     }

//     if (newPassword !== confirmPassword) {
//       Swal.fire({
//         title: 'Error!',
//         text: 'Passwords do not match.',
//         icon: 'error',
//       });
//       setLoading(false);
//       return;
//     }

//     try {
//       await axios.post(
//         'https://uootes.onrender.com/api/v1/reset-password',
//         'https://uootes.onrender.com/api/v1/resetPassword',
//         { email, newPassword },
//         { headers: { 'Content-Type': 'application/json' } }
//       );

//       Swal.fire({
//         title: 'Success!',
//         text: 'Password reset successfully.',
//         icon: 'success',
//         timer: 1500,
//       });
//       navigate('/Login');
//     } catch (error) {
//       Swal.fire({
//         title: 'Oops!',
//         text: error.response?.data?.message || 'Failed to reset password.',
//         icon: 'error',
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="w-full h-[100vh]">
//       <div className="w-full h-[100%] my-auto flex justify-center">
//         <div className="modal w-full sm:w-[90%] md:w-[80%] lg:scale-100 lg:w-[60%] h-[100vh] sm:h-[70vh] md:h-[70vh] lg:h-[70vh] bg-[#E3E5EE] my-auto sm:rounded-xl  pr-0 flex justify-center">

//           <div className="fixed z-[2000] flex flex-row w-[100%] pt-8 md:mt-0 lg:mt-0 ">
//             <div className="w-full flex justify-center">
//               <h2 className="headText font-semibold text-xl md:text-3xl text-[#000] ">
//                 Reset Password
//               </h2>
//             </div>
//           </div>

//           <div className="w-[100%] md:w-[60%] lg:w-[60%] fixed flex justify-center mt-[90px] md:mt-[90px] lg:mt-[90px]">
//             <h2 className="text-center w-[90%] text-[10px] font-semibold">
//               Enter your new password for {email || 'your account'}.
//             </h2>
//           </div>

//           <form
//             onSubmit={handleSubmit}
//             className="w-[100%] md:w-[60%] lg:w-[60%] fixed flex flex-col justify-center mt-[170px] md:mt-[190px] lg:mt-[190px]"
//           >
//             <input
//               type="password"
//               value={newPassword}
//               onChange={(e) => setNewPassword(e.target.value)}
//               placeholder="New Password"
//               className="mx-auto w-[80%] h-[40px] bg-transparent rounded-lg border-[1px] pl-[10px] border-black outline-none text-[16px] font-semibold"
//             />
//             <input
//               type="password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               placeholder="Confirm Password"
//               className="mx-auto w-[80%] h-[40px] bg-transparent rounded-lg border-[1px] pl-[10px] border-black outline-none text-[16px] font-semibold mt-4"
//             />
//             <button
//               type="submit"
//               disabled={loading}
//               className="mx-auto w-[80%] md:w-[400px] h-[45px] hover:bg-gray-600 mt-[28px] rounded-lg bg-[#002853] shadow-md shadow-blue-200 outline-none text-white font-semibold text-lg"
//             >
//               {loading ? 'Resetting...' : 'Reset Password'}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResetPassword;








import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import LOgo from "../../assets/LOgo.png";
import { Gradient } from '../design/svg';

const User_ResetPass = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!newPassword || !confirmPassword) {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill all fields.',
        icon: 'error',
      });
      setLoading(false);
      return;
    }

    if (newPassword !== confirmPassword) {
      Swal.fire({
        title: 'Error!',
        text: 'Passwords do not match.',
        icon: 'error',
      });
      setLoading(false);
      return;
    }

    try {
      await axios.post(
        'https://uootes.onrender.com/api/v1/resetPassword',
        { newPassword, confirmPassword },
        { headers: { 'Content-Type': 'application/json' } }
      );

      Swal.fire({
        title: 'Success!',
        text: 'Password reset successfully.',
        icon: 'success',
        timer: 1500,
      });
      navigate('/Login');
    } catch (error) {
      Swal.fire({
        title: 'Oops!',
        text: error.response?.data?.message || 'Failed to reset password.',
        icon: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white flex relative justify-center items-center h-screen">
      <div className='bg-[#E3E5EE] relative w-11/12 h-2/3 md:w-1/2 md:h-2/3 items-center justify-center pt-6 rounded-md'>
        <img src={LOgo} alt="" className='w-26 mt-[-10px] relative' />
        
        <form action="" onSubmit={handleSubmit} className='flex flex-col absolute z-10 items-center justify-center md:mt-[-60px] text-center md:ml-4 pb-6'>
          <h2 className="text-black text-3xl font-semibold py-4 ">Create New Password! </h2>
          <p className="pb-4 text-slate-800 md:px-[7rem] mt-4">Your new password must be different from any of your previous passwords.</p>

          <input 
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="New Password" 
            className='py-2 md:my-4 my-4 pl-6 bg-transparent rounded-lg border border-[#767679] w-[85%] outline-none md:w-[70%]' 
          />

          <input 
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password" 
            className='py-2 md:my-4 my-4 pl-6 bg-transparent rounded-lg border border-[#767679] outline-none w-[85%] md:w-[70%]' 
          />

          <button 
            type="submit"
            disabled={loading}
            className="bg-[#002853] text-center relative text-blue-200 rounded mt-6 md:my-4 px-10 py-2">
              {loading ? 'Resetting...' : 'Reset Password'}
          </button>
        </form>

        <Gradient className="h-[500px]" />
      </div>
    </div>
  )
}

export default User_ResetPass