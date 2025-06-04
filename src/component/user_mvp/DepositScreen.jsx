import React, { useState } from "react";

const DepositScreen = () => {
  const [amount, setAmount] = useState("");
  const usdValue = (parseFloat(amount) || 0) * 1.0; // Example: 1 GSC = 1 USD

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-start pt-4">
      

      <h1 className="text-2xl font-bold mt-4">Deposit</h1>
      <p className="text-green-500 text-xl mt-2">$1.20</p>

      <div className="bg-gray-900 rounded-2xl mt-4 p-6 w-11/12 max-w-md text-center">
        <div className="bg-gray-500 rounded-xl px-4 py-3 flex items-center justify-between">
          <input
            type="number"
            placeholder="Please enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="bg-transparent text-white placeholder-gray-400 outline-none flex-1"
          /> 
       
          <span className="text-white text-lg font-semibold">GSC</span>
        </div>

        <p className="text-gray-300 mt-4"> you' ll pay</p>
        <p className="text-green-500 text-2xl font-bold mt-1">
          $ {usdValue.toFixed(2)}
        </p>
      </div>

      <button
        className="mt-8 bg-blue-800 text-white text-2xl font-bold px-8 py-4  outline outline-gray-400 rounded-lg w-11/12 max-w-md"
        onClick={() => alert(`Proceeding with deposit of ${amount} GSC`)}
      >
        Proceed
      </button>
    </div>
  );
};

export default DepositScreen;
