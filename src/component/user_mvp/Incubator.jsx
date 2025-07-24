import React, { useEffect, useState } from 'react'

const firstcountdown = "6:00:00";

// Helper to convert "hh:mm:ss" to seconds
const timeToSeconds = (time) => {
  const [h, m, s] = time.split(':').map(Number);
  return h * 3600 + m * 60 + s;
};

// Helper to convert seconds to "hh:mm:ss"
const secondsToTime = (secs) => {
  const h = String(Math.floor(secs / 3600)).padStart(2, '0');
  const m = String(Math.floor((secs % 3600) / 60)).padStart(2, '0');
  const s = String(secs % 60).padStart(2, '0');
  return `${h}:${m}:${s}`;
};

const incubatorvalues = [
    {
        id: 2489010725567,
        amount: 500000,
        fee: 10.75,
        status: "",
        countdown: "00:00:10",
    },
    {
        id: 2489010725568,
        amount: 500000,
        fee: 10.75,
        status: "",
        countdown: "00:01:00",
    },
    {
        id: 2489010725569,
        amount: 500000,
        fee: 10.75,
        status: "",
        countdown: "00:10:00",
    },
    {
        id: 2489010725570,
        amount: 500000,
        fee: 10.75,
        status: "",
        countdown: "01:00:00",
    },
    {
        id: 2489010725571,
        amount: 500000,
        fee: 10.75,
        status: "",
        countdown: "72:00:00",
    },
];

const Incubator = () => {
  // Store countdowns in seconds
  const [countdowns, setCountdowns] = useState(
    incubatorvalues.map(item => timeToSeconds(item.countdown))
  );

  // State for the first countdown
  const [firstCountdownSec, setFirstCountdownSec] = useState(timeToSeconds(firstcountdown));

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdowns(prev =>
        prev.map(sec => (sec > 0 ? sec - 1 : 0))
      );
      setFirstCountdownSec(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  let firstCountdownColor = "text-green-500";
  if (firstCountdownSec <= 60) firstCountdownColor = "text-red-500";
  else if (firstCountdownSec <= 600) firstCountdownColor = "text-yellow-500";

  const isActivateActive = firstCountdownSec === 0;

  return (
    <div className="text-white h-screen overflow-y-auto bg-black flex flex-col justify-between">
        <div className="w-full flex justify-center items-center text-center text-white pt-8">
            <h2 className="font-bold text-[30px]">Incubator</h2>
        </div>

        <div className="w-full h-[150px] mt-8 bg-[#262626] border-2 border-[#737373] border-x-transparent flex justify-center items-center">
            <div className="w-[100%] h-[97%] flex flex-row justify-between items-center p-4">
                <div>
                    <h2 className={`${firstCountdownColor} text-[25px] font-bold`}>
                      {secondsToTime(firstCountdownSec)}
                    </h2>
                </div>
                <div>
                    <button
                      className={`w-[150px] h-[58px] text-white text-[22px] font-bold rounded-xl transition
                        ${isActivateActive ? 'bg-orange-400 opacity-100 cursor-pointer' : 'bg-orange-400 opacity-55 cursor-not-allowed'}`}
                      disabled={!isActivateActive}
                    >
                      Activate
                    </button>
                </div>
            </div>
        </div>

        <div className="py-8 flex flex-col gap-4 lg:gap-6">
            {incubatorvalues.map((incubator, idx) => {
              // Red if less than 1 minute, yellow if less than 10 minutes, else white
              let countdownColor = "text-yellow-500";
              if (countdowns[idx] <= 60) countdownColor = "text-red-500";
              else if (countdowns[idx] <= 600) countdownColor = "text-yellow-500";
              else countdownColor = "text-white";
                
              const isClaimActive = countdowns[idx] === 0;
              return (
                <div key={incubator.id} className="p-4 flex flex-row justify-between items-center w-[90%] lg:w-[50%] bg-[#262626] mx-auto rounded-xl py-3 border-2 border-[#737373]">
                  <div className="flex flex-col justify-center">
                      <h1 className="text-white text-[25px] font-bold">CPT {incubator.amount}</h1>
                      <h4 className="text-[17px] text-gray-500 font-bold">GSC {incubator.fee}</h4>
                      <h4 className="text-[18px] text-gray-500 font-bold">#{incubator.id}</h4>
                      <h2 className={`text-[22px] font-bold ${countdownColor}`}>{secondsToTime(countdowns[idx])}</h2>
                  </div>
                  <div>
                      <button
                        className={`w-[100px] h-[50px] rounded-xl text-white text-[18px] font-bold transition 
                          ${isClaimActive ? 'bg-blue-500 opacity-100 cursor-pointer' : 'bg-blue-500 opacity-55 cursor-not-allowed'}`}
                        disabled={!isClaimActive}
                      >
                        Claim
                      </button>
                  </div>
                </div>
              );
            })}
        </div>
    </div>
  )
}

export default Incubator;