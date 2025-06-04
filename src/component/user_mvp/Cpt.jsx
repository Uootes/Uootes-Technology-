import React from 'react';

// const WalletActivation = () => {
const Cpt = () => {
  return (
    
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center">
     <div className="bg-black outline w-[380px]  h-[540px] outline-gray-300 rounded-lg shadow-lg ">
      {/* Main Content */}
      <div className="text-center p-6">
        <h1 className="text-5xl font-bold  mb-20">
          You need 10.75 GSC to complete the activation.
        </h1>
        <p className="text-lg mb-5 font-bold">
          Wallet Balance: <span className="text-gray-400">GSC 0.00</span>
        </p>
<br />
        {/* Buttons */}
        <div className="flex space-x-6  lg:ml-[45px] mt-58 ml-[70px] ">
          <button className="px-6 py-3 outline outline-slate-300 outline-2 bg-orange-500 text-white rounded-lg font-bold">
            Deposit
          </button>
          <button className="px-6 py-3 outline outline-slate-300 outline-2 bg-blue-600 text-white rounded-lg font-bold">
            Proceed
          </button>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Cpt;