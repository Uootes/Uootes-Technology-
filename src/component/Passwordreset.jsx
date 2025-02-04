import React from 'react';
import LOgo from "/src/assets/LOgo.png";

const Passwordreset = () => {
  return (
    <div className="bg-white flex justify-center items-center h-screen">
        <div className="bg-blue-900 w-11/12 md:w-1/2 items-center py-6">
        {/* <div className=""> */}
          <img src={LOgo} alt="" className='w-26 relative' />
            
          <div className="md:mx-20 text-center pb-6">
                <h2 className="text-white text-3xl font-semibold py-6">
                    Password Reset!
                </h2>

                <p className='text-slate-200 md:mx-6'>Your password has been successfully reset!. Click below to continue your access.</p>

                <button className="bg-white text-center text-black rounded my-6 px-10 py-2">Continue</button>
          </div>
        {/* </div> */}
        </div>
    </div>
  )
}

export default Passwordreset