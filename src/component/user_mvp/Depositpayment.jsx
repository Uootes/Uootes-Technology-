import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy} from '@fortawesome/free-solid-svg-icons';


const PaymentPage = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText('uabwwonxu...');
    alert('Wallet address copied!');
  };
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
    <div className='p-5 bg-black '>
    <div className="bg-black text-white min-h-screen px-4 pt-6">
      
      {/* Title */}
      <h1 className="text-center font-bold text-xl mb-4">Fundhub</h1>
<div className='mb-20 items-center'>
    {/* Stepper Section */}
    <div className="relative flex flex-col items-center  object-center text-center w-full max-w-5xl lg:ml-16">

{/* Background Line */}
<div className=" absolute top-5 w-[75%]  h-1 bg-gray-500"></div>

{/* Steps */}
<div className="flex justify-between items-center w-full max-w-4xl relative z-10 px-2 sm:px-10">

  {/* Step 1 */}
  <div className="flex flex-col items-center">
    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white font-bold border-4 border-orange-600">
      1
    </div>
    <div className="mt-2 text-center text-xs md:text-sm font-semibold">Order</div>
  </div>

  {/* Step 2 */}
  <div className="flex flex-col items-center">
    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white font-bold border-4 border-orange-600">
      2
    </div>
    <div className="mt-2 text-center text-xs md:text-sm font-semibold">Make Payment</div>
  </div>

  {/* Step 3 */}
  <div className="flex flex-col items-center">
    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-800 text-white font-bold border-4 border-orange-700">
      3
    </div>
    <div className="mt-2 text-center text-xs md:text-sm font-semibold">Get Credited</div>
  </div>

</div>
</div>

         </div>
      

      {/* Payment Notice */}
      <p className="text-center text-white font-semibold text-lg ">
        Please complete your payment within 10 minutes.
      </p>

      {/* Timer */}
      <div className="text-4xl font-bold text-green-700 mt-5 text-center mb-4">
        {formatTime(time)}
      </div>

      {/* Instruction Box */}
      <div className="bg-gray-700 text-center p-4 rounded-md text-sm mb-4 outline outline-gray-500">
        If payment is not received within this timeframe, your order will be
        automatically canceled. <br />
        <span className="mt-2 block">Thank you for your prompt payment</span>
      </div>

      {/* Amount */}
      <div className="bg-blue-800 outline outline-slate-400 text-white font-bold text-center py-3 rounded-lg text-xl mb-6">$100.00
      </div>

      {/* Payment Details */}
      <div className="text-center text-lg font-semibold mb-2">Payment Details</div>
      <div className="bg-gray-800 outline outline-slate-600npm p-4 rounded-md mb-4 text-sm">
        <p className="mb-1">
          <span className="font-bold">Stable coin:</span> USDT
        </p>
        <p className="mb-1">
          <span className="font-bold">Network:</span> Tron (Tr20)
        </p>
        <div className="flex items-center justify-between mt-2">
          <p>
            <span className="font-bold">Wallet Address:</span>{' '}
            uabwwonxu...
          </p>
          <button onClick={handleCopy} className="text-orange-500">
          <FontAwesomeIcon icon={faCopy} className='flex-row-reverse  text-orange-500  text-3xl font-bold'/>
          </button>
        </div>
      </div>

      {/* Warning */}
      <p className="text-center text-xs text-red-400 mb-6">
        Warning: Pay to the correct wallet address only. Incorrect payment will
        result in permanent loss of funds. Double-check the address before
        sending.
      </p>

      {/* Buttons */}
      <div className="flex justify-between gap-4 mt-14 ">
        <button className="bg-red-600 w-1/2 py-3 rounded-md font-bold text-lg">Cancel</button>
        <button className="bg-green-600 w-1/2 py-3 rounded-md font-bold text-lg">Paid</button>
      </div>
    </div>
    </div>
  );
};

export default PaymentPage;
