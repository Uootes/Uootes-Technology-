import React, { useState, useEffect } from 'react';

const Fundhub = () => {
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
    <div className="min-h-screen w-full bg-black text-white flex flex-col items-center py-10 px-4 hover:bg-slate-900" id='fundhub'>
      
      {/* Page Title */}
      <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Fundhub</h2>

      {/* Stepper Section */}
      <div className="relative flex flex-col items-center w-full max-w-5xl">

        {/* Background Line */}
        <div className=" absolute top-5 w-[85%] h-1 bg-gray-500"></div>

        {/* Steps */}
        <div className="flex justify-between items-center w-full max-w-3xl relative z-10 px-2 sm:px-10">

          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-800 text-black font-bold border-4 border-orange-600">
              1
            </div>
            <div className="mt-2 text-center text-xs md:text-sm font-semibold">Order</div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-800 text-black font-bold border-4 border-orange-600">
              2
            </div>
            <div className="mt-2 text-center text-xs md:text-sm font-semibold">Processing</div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-300 text-black font-bold border-4 border-green-700">
              3
            </div>
            <div className="mt-2 text-center text-xs md:text-sm font-semibold">Release Token</div>
          </div>

        </div>
      </div>

      {/* Payment Processing Section */}
      <h2 className="text-xl md:text-2xl font-bold mt-16 mb-6 text-center">Payment Processing</h2>

      <div className="bg-gray-800 outline outline-slate-300 p-6 rounded-xl shadow-lg w-full max-w-md text-center">
        <p className="text-md mb-4">
          Johnson Kentucky will make payment of $100 within the next 10 minutes.
        </p>
        <p className="text-md">
          Thank you for your patience. We’ll notify you once the exchanger responds.
        </p>
      </div>

      {/* Timer */}
      <div className="text-4xl font-bold text-green-700 mt-10 text-center">
        {formatTime(time)}
      </div>

    </div>
  );
};

export default Fundhub;
