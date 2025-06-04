import React, { useState } from 'react'

const WithdrawForm = ({  balance = '$1.10',
  currency = 'GSC',
  onProceed,
  addresses = [
    { label: 'Stablecoin', value: 'USDT' },
    { label: 'Network', value: 'Ton' },
    { label: 'Wallet Address', value: 'kanshseb bndndd' },
  ],
 }) => {
    const [amount, setAmount] = useState('');
    const insufficient = parseFloat(amount || '0') === 0;


  return (
    <div  className="h-['100px'] w-full bg-black flex flex-col items-center px-4 py-16 rounded-md hover:bg-slate-900" id='withraw'>
        {/* Header */}
      <h1 className="text-white text-2xl font-bold hover:text-green-100">Withdraw</h1>
      <span className="text-red-500 text-xl mt-2 hover:text-green-100">{balance}</span>

      {/* Input card */}
      <div className="bg-gray-800 rounded-xl border border-gray-600 p-6 my-6 max-w-xl w-full hover:text-green-100">
        <h2 className={`text-white text-2xl font-bold mb-4 ${insufficient ? 'text-red-500' : ''}`}>
          {insufficient ? 'Insufficient' : ''}
        </h2>
        <div className="flex items-center bg-gray-700 rounded-lg p-4">
          <input
            type="number"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            placeholder="Please enter amount"
            className="flex-1 bg-transparent placeholder-gray-400 text-white text-lg outline-none"
          />
          <span className="text-white text-lg font-semibold ml-2">{currency}</span>
        </div>
        <p className="text-gray-400 text-sm text-center mt-4">
          You will receive a sum of:
        </p>
        <p className="text-red-500 text-3xl font-bold text-center mt-2">$0.00</p>
      </div>

       {/* Address selection */}
      <p className="text-white text-center text-lg mb-4 hover:text-green-100">
        Please select the address you want for payment settlement.
      </p>
      <div className="bg-gray-800 rounded-xl border border-gray-600 p-6 max-w-xl w-full mb-8 hover:text-green-100">
        {addresses.map((addr, i) => (
          <div key={i} className="flex justify-between mb-4 last:mb-0">
            <span className="text-gray-400">{addr.label}:</span>
            <span className="text-white font-medium">{addr.value}</span>
          </div>
        ))}
        {/* <div className="absolute top-6 right-6 w-6 h-6 border-2 border-orange-400" /> */}
      </div>

      {/* Add Bank & Proceed */}
      <button
        onClick={() => {/TODO: add bank flow/}}
        className="text-white text-2xl font-bold mb-4 hover:text-green-100"
      >
        Add Address
      </button>
      <button
        onClick={onProceed}
        className="bg-blue-700 hover:bg-blue-800 w-full max-w-xl text-white text-2xl font-semibold py-4 rounded-lg"
      >
        Proceed
      </button>

    </div>
  )
}

export default WithdrawForm
