import React from 'react';

const WithdrawalCard = ({ time, date, referenceNo, amount, worth, statusText, statusColor
}) => {
  return (
    <div className="bg-zinc-800 rounded-xl p-8 m-4 shadow-md">
      <h3 className="text-lg font-semibold text-white mb-2 hover:text-green-100">Withdrawal</h3>
      <div className="space-y-2">
        {/* Data/time */}
        <div className="flex justify-between text-sm text-neutral-300 hover:text-green-100">
          <span className="font-medium">Data/time</span>
          <span>{date} &nbsp; {time}</span>
        </div>
        {/* Reference No */}
        <div className="flex justify-between text-sm text-neutral-300 hover:text-green-100">
          <span className="font-medium">Reference No</span>
          <span>{referenceNo}</span>
        </div>
        {/* Amount */}
        <div className="flex justify-between text-sm text-neutral-300 hover:text-green-100">
          <span className="font-medium">Amount</span>
          <span>{amount} GSC</span>
        </div>
        {/* Worth */}
        <div className="flex justify-between text-sm text-neutral-300 hover:text-green-100">
          <span className="font-medium">Worth</span>
          <span>${worth}</span>
        </div>
        {/* Status */}
        <div className="flex justify-between text-sm text-neutral-300 hover:text-green-100">
          <span className="font-medium">Status</span>
          <span className={statusColor}>{statusText}</span>
        </div>
      </div>
    </div>
  );
};

export default WithdrawalCard;