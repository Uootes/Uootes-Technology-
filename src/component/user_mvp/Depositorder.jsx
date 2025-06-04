
import React, { useState, useEffect } from 'react';

const DepositStatus = () => {
  const [time, setTime] = useState(10 * 60); // 10 minutes in seconds

  useEffect(() => {
    if (time <= 0) return;
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [time]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-start px-4 pt-10 text-center">
      
      {/* Title */}
      <h1 className="text-xl font-semibold mb-6">Fundhub</h1>

      {/* Stepper Section */}
      <div className="mb-20 w-full max-w-5xl flex justify-center">
        <div className="relative flex flex-col items-center w-full">

          {/* Background Line */}
          <div className="absolute top-5 w-[75%] h-1 bg-gray-500"></div>

          {/* Steps */}
          <div className="flex justify-between items-center w-full max-w-4xl relative z-10 px-2 sm:px-10">
            {[{label: 'Order'}, {label: 'Make Payment'}, {label: 'Get Credited'}].map((step, idx) => (
              <div className="flex flex-col items-center" key={step.label}>
                <div className={`flex items-center justify-center w-10 h-10 rounded-full text-white font-bold border-4 ${
                  idx === 2 ? 'bg-blue-800 border-orange-700' : 'bg-green-500 border-orange-600'
                }`}>
                  {idx + 1}
                </div>
                <div className="mt-2 text-xs md:text-sm font-semibold">{step.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Status Box */}
      <h2 className="text-xl font-bold mb-4">Deposit Request Submitted!</h2>
      <div className="bg-[#2a2a2a] rounded-xl px-4 py-6 text-sm text-gray-200 mb-6 outline outline-slate-600 max-w-2xl">
        <p>Your deposit request has been sent to the exchanger. Please wait for approval within the next 10 minutes.</p>
        <br />
        <p>Important: If approval is not received within this timeframe, your order will be automatically canceled.</p>
        <br />
        <p>Thank you for your patience. We'll notify you once the exchanger responds.</p>
      </div>

      {/* Timer */}
      <div className="text-4xl font-bold text-green-700 mb-5">
        {formatTime(time)}
      </div>

      {/* Cancel Button */}
      <div className="w-full flex justify-center">
        <button className="bg-red-700 w-full max-w-md text-white text-xl font-bold py-3 rounded-md hover:bg-red-800 transition duration-300">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DepositStatus
