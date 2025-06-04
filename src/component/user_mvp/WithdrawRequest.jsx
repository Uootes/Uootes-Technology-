import React from 'react';
import WithdrawalCard from './WithdrawalCard';

export default function WithdrawalRequest({ onCancel, timer = '09:59', amount, onRelaese }) {
  return (
    <div className="h-['100px'] w-full bg-black flex flex-col items-center px-4 py-16 rounded-md hover:bg-slate-900" id='withrequest' >
      {/* Progress */}
      <div className="flex items-center space-x-4 mt-4 hover:text-green-100">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-green-500 border-4 border-orange-400 flex items-center justify-center">
            <span className="text-white font-bold">1</span>
          </div>
          <span className="text-white ml-2 hover:text-green-100">Order</span>
        </div>
        <div className="flex-1 h-1 bg-white" />
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-blue-700 border-4 border-orange-400 flex items-center justify-center">
            <span className="text-white font-bold">2</span>
          </div>
          <span className="text-white ml-2 hover:text-green-100">Payment Processing</span>
        </div>
        <div className="flex-1 h-1 bg-white" />
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-blue-700 border-4 border-orange-400 flex items-center justify-center">
            <span className="text-white font-bold">3</span>
          </div>
          <span className="text-white ml-2 hover:text-green-100">Release Token</span>
        </div>
      </div>

      {/* Title */}
      <h1 className="text-white text-2xl font-bold mt-8 hover:text-green-100">Payment Sent</h1>

      {/* Message box */}
      <div className="bg-gray-800 rounded-xl border border-gray-600 p-6 my-6 max-w-xl w-full">
        <p className="text-gray-300 leading-relaxed hover:text-green-100">
          We are pleased to inform you that a payment of{' '}
          <span className="text-white">{amount}</span> has been successfully made.
        </p>
        <p className="text-gray-300 leading-relaxed mt-4">
          Please check your wallet to confirm receipt of the payment and acknowledge
          it to release your token within 30 minutes.
        </p>
      </div>

      {/* Important notice */}
      <p className="text-white italic text-center max-w-xl hover:text-green-100">
        Important: Before releasing tokens, please verify the payment on the
        blockchain network. Click ‘Explore Blockchain’ under Transaction History to
        confirm the transaction. Ensure the payment is recorded on the blockchain
        before releasing tokens to avoid any issues.
      </p>firstladybetty,

      {/* Timer */}
      <span className="text-green-500 text-5xl font-bold mt-6 hover:text-green-100">{timer}</span>

      {/* Release Token Button */}
       <button
        // onClick={onRelease}
        className="mt-6 bg-red-700 hover:bg-red-800 w-full max-w-xl text-white text-2xl font-semibold py-4 rounded-lg hover:text-slate-300"
      >
        Release Token
      </button>
    </div>
  );
}