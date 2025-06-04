import React from 'react';

const DepositCard = ({ time, date, referenceNo, amount, worth, statusText, statusColor, timer }) => {
  return (
    <div className="bg-zinc-800 rounded-xl p-8 m-4 shadow-md">
      {/* Header with title and timer */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-white hover:text-green-100">Deposit</h3>
        <span className="text-green-400 font-semibold">{timer}</span>
      </div>

      {/* Body: each row is label/value */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-neutral-300 hover:text-green-100">
          <span className="font-medium">Data/time</span>
          <span className="text-white">
            {date} &nbsp; {time}
          </span>
        </div>
        <div className="flex justify-between text-sm text-neutral-300 hover:text-green-100">
          <span className="font-medium">Reference No</span>
          <span className="text-white">{referenceNo}</span>
        </div>
        <div className="flex justify-between text-sm text-neutral-300 hover:text-green-100">
          <span className="font-medium">Amount</span>
          <span className="text-white">{amount} GSC</span>
        </div>
        <div className="flex justify-between text-sm text-neutral-300 hover:text-green-100">
          <span className="font-medium">Worth</span>
          <span className="text-white">${worth}</span>
        </div>
        <div className="flex justify-between text-sm text-neutral-300 hover:text-green-100">
          <span className="font-medium">Status</span>
          <span className={statusColor}>{statusText}</span>
        </div>
      </div>
    </div>
  );
};

export default DepositCard;