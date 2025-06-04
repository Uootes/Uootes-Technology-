import React, { useState } from 'react';
import DepositCard from './DepositCard';
import WithdrawalCard from './WithdrawalCard';

const Fundhub2 = () => {
  const [activeTab, setActiveTab] = useState('deposit');

  // Example data arrays (could come from props or API)
  const depositData = [
    {
      time: '5:38',
      date: '2025 - 26 - 02',
      referenceNo: '83b398y49',
      amount: '100.00',
      worth: '130.00',
      statusText: 'Pending',
      statusColor: 'text-yellow-400',
      timer: '9:59',
    },
    {
      time: '5:38',
      date: '2025 - 26 - 02',
      referenceNo: '83b398y49',
      amount: '100.00',
      worth: '130.00',
      statusText: 'Make Payment',
      statusColor: 'text-orange-400',
      timer: '9:59',
    },
     {
      time: '5:38',
      date: '2025 - 26 - 02',
      referenceNo: '83b398y49',
      amount: '100.00',
      worth: '130.00',
      statusText: 'Get Credited',
      statusColor: 'text-green-400',
      timer: '29:59',
    }
];

const withdrawalData = [
  {
    time: '5:38',
    date: '2025 - 26 - 02',
    referenceNo: '83b398y49',
    amount: '100.00',
    worth: '130.00',
    statusText: 'Successful',
    statusColor: 'text-green-400',
  },
  {
    time: '5:38',
    date: '2025 - 26 - 02',
    referenceNo: '83b398y49',
    amount: '100.00',
    worth: '130.00',
    statusText: 'Cancel',
    statusColor: 'text-red-400',
  },
    {
    time: '5:38',
    date: '2025 - 26 - 02',
    referenceNo: '83b398y49',
    amount: '100.00',
    worth: '130.00',
    statusText: 'Successful',
    statusColor: 'text-green-400',
  }
];

  return (
    <div className="min-h-screen bg-black text-white px-4 py-6">
      <div className="text-center text-2xl font-bold mb-4">Fundhub</div>

      <div className="flex justify-center mb-6 border-b border-gray-700">
        <button
          onClick={() => setActiveTab('deposit')}
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === 'deposit'
              ? 'border-b-2 border-white text-white'
              : 'text-gray-400'
          }`}
        >
          Deposit
        </button>
        <button
          onClick={() => setActiveTab('withdrawal')}
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === 'withdrawal'
              ? 'border-b-2 border-white text-white'
              : 'text-gray-400'
          }`}
        >
          Withdrawal
        </button>
      </div>

      <div>
        {activeTab === 'deposit'
          ? depositData.map((d, i) => <DepositCard key={i} {...d} />)
          : withdrawalData.map((w, i) => <WithdrawalCard key={i} {...w} />)}
      </div>
    </div>
  );
};

export default Fundhub2;