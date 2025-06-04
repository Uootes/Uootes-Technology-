import React, { useState, useEffect } from 'react';

// Function to generate trades with fresh countdown timers
const generateTrades = () => [
  {
    id: 1,
    amount: 100,
    price: 100000,
    code: '#2368903yaou245',
    endTime: Date.now() + 60000, // 1 min
  },
  {
    id: 2,
    amount: 150,
    price: 150000,
    code: '#2368903y9kd245',
    endTime: Date.now() + 120000, // 2 min
  },
  {
    id: 3,
    amount: 20,
    price: 20000,
    code: '#5688903y9kd245',
    endTime: Date.now() + 180000, // 3 min
  },
  {
    id: 4,
    amount: 1000,
    price: 1000000,
    code: '#8888903y9kd245',
    endTime: Date.now() + 12000, // 2 min
  },
  {
    id: 5,
    amount: 100,
    price: 100000,
    code: '#8888903y9kd245',
    endTime: Date.now() + 90000, // 1.5 min
  },
  {
    id: 6,
    amount: 150,
    price: 150000,
    code: '#8888903y907d45',
    endTime: Date.now() + 60000, // 1 min
  },
];

const TradeCenter = () => {
  const [activeTab, setActiveTab] = useState('Buy');
  const [currentTime, setCurrentTime] = useState(Date.now());
  const [tradeList, setTradeList] = useState(generateTrades()); // dynamic trades

  // Update current time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => clearInterval(timer); // Cleanup
  }, []);

  // When activeTab changes, regenerate trades
  useEffect(() => {
    setTradeList(generateTrades());
  }, [activeTab]);

  const formatTimeLeft = (endTime) => {
    const totalSeconds = Math.floor((endTime - currentTime) / 1000);

    if (totalSeconds <= 0) {
      return 'Expired';
    }

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className='bg-black w-[100%] min-h-screen flex items-center justify-center' id='Tradecenter'>
     
    <div className="w-[100%] md:w-[60%] mx-auto p-4 bg-black text-white rounded-lg shadow-lg">
    <h2 className="text-2xl font-bold mb-4 text-center">Tasks</h2>
      <div className="flex justify-center mb-4 space-x-2">
        {['Buy', 'Sell'].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 font-semibold rounded ${activeTab === tab ? 'text-white' : 'text-gray-400'}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Filter trade"
          className="flex-1 p-2 rounded-l-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
        />
        <button className="bg-orange-500 p-2 rounded-r-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>

      <div className="w-[100%] space-y-8 ">
        {tradeList.map((trade) => (
          <div key={trade.id} className="flex w-full items-center justify-between border-2  border-gray-400 p-4 bg-[#262626]0 rounded-lg">
            <div>
              <div className="font-bold text-lg">GSC {trade.amount}.00</div>
              <div className="text-gray-400 text-sm">$ {trade.price.toLocaleString()}</div>
              <div className="text-gray-500 text-xs">{trade.code}</div>
            </div>
            <div className="flex flex-col items-end">
              <span
                className={`font-bold text-sm ${
                  formatTimeLeft(trade.endTime) === 'Expired' ? 'text-red-500' : 'text-yellow-400'
                }`}
              >
                {formatTimeLeft(trade.endTime)}
              </span>
              <button
                className={`mt-2 px-4 py-1 rounded-md text-white font-semibold ${
                  activeTab === 'Buy' ? 'bg-green-500' : 'bg-red-500'
                }`}
                disabled={formatTimeLeft(trade.endTime) === 'Expired'}
              >
                {activeTab}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default TradeCenter;
