import {faCheck, faClose, faMedal, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
// import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const tiers = [
  {
    name: "Bronze",
    requirement: null,
    buttonText: "Upgraded",
    buttonStyle: "w-[100%] rounded-3xl bg-[#262626] border-2 border-[#737373] text-white",
    badgeIcon: <FontAwesomeIcon icon={faTrophy} />,
  },
  {
    name: "Silver",
    requirement: "1 Referral",
    buttonText: "Upgrade",
    status: false,
    buttonStyle: "w-[40%] h-[60px] bg-blue-600 border-[#737373] text-white",
    badgeIcon: <FontAwesomeIcon icon={faTrophy} />,
  },

   {
    name: "Gold",
    // requirement: "1 Referral",
    buttonText: "Upgrade",
    status: true,
    buttonStyle: "w-[40%] h-[60px] bg-blue-600 border-[#737373] text-white",
    requirements: {
        upgradeSilver: true,
        
    },
    badgeIcon: <FontAwesomeIcon icon={faTrophy  } />,
  },
  // Add more tiers as needed
];

const referrals = 0;

const UpgradeTiers = () => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + tiers.length) % tiers.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % tiers.length);
  };

  const tier = tiers[current];

  return (
    <div className="w-[100%] flex items-center justify-center min-h-screen bg-black">
      <div className="w-[100%] md:w-[60%] lg:w-[40%] flex flex-col gap-16 p-4 text-center text-white">
        {/* <h1 className="text-lg font-bold mb-4">Upgrade</h1> */}
        <h2 className="text-[40px] font-bold">{tier.name}</h2>

        <div className="relative my-4">
          {/* <FaAngleLeft
            className="text-[40px] absolute left-0 top-1/2 -translate-y-1/2 text-2xl cursor-pointer"
            onClick={handlePrev}
          /> */}
          <img
            src="assets/trophy.png" 
            alt="Trophy"
            className="w-32 h-32 mx-auto"
          />

          {/* <span className="text-[100px]">
            {tier.badgeIcon}
          </span> */}
          {/* <FaAngleRight
            className="text-[40px] absolute right-0 top-1/2 -translate-y-1/2 text-2xl cursor-pointer"
            onClick={handleNext}
          /> */}
        </div>

        {tier.requirement && (
            <>
        <div className="font-semibold text-[25px]">Requirement</div>
          <div className="w-[80%] h-[100px] flex justify-center items-center font-bold text-[25px] border-[#737373] border-2 bg-[#262626] rounded-3xl mx-auto text-gray-400">
                <h2>{tier.requirement}</h2>
               
            {/* <div className="bg-gray-800 py-2 rounded">{tier.requirement}</div> */}
          </div>
          </>
        )}


        {tier.requirements && (
            <>
        <div className="font-semibold text-[25px]">Requirements</div>
          <div className="w-[80%]  h-[100px] flex flex-col gap-2 justify-center items-center font-bold text-[25px] border-[#737373] border-2 bg-[#262626] rounded-3xl mx-auto text-gray-400">
               <div className="flex items-center gap-2 text-[17px]">
                <div>
                  <h2>Upgrade Silver account</h2>
                </div>
                <div>
                  <FontAwesomeIcon icon={faCheck} className={` ${tier.requirements.upgradeSilver == true ? "block" : "hidden"} text-green-600`}/>
                  <FontAwesomeIcon icon={faClose} className={` ${tier.requirements.upgradeSilver == false ? "block" : "hidden"} text-red-600`}/>
                </div>
               </div>
               <div className="flex items-center gap-2 text-[17px]">
                <div>
                    <h2>
                        <span>{referrals}</span>/5 Direct Referrals
                    </h2>
                </div>
                <div>
                    <FontAwesomeIcon icon={faCheck} className={`${referrals === 5 ? "block" : "hidden"} text-green-600`} />
                    <FontAwesomeIcon icon={faClose} className={`${referrals < 5 ? "block" : "hidden"} text-red-600`} />
                </div>
               </div>
          </div>
          </>
        )}

        <button className={`w-[100%] mx-auto h-[100px] gap-4  flex justify-center items-center text-[24px] font-semibold rounded ${tier.buttonStyle}`}>
          {/* {tier.status} */}
          {tier.buttonText}
        </button>
      </div>
    </div>
  );
}

export default UpgradeTiers

// export default function UpgradeTiers() {

//   return (
//     <div className="w-[100%] flex items-center justify-center min-h-screen bg-black">
//       <div className="w-[100%] md:w-[60%] lg:w-[40%] flex flex-col gap-16 p-4 text-center text-white">
//         {/* <h1 className="text-lg font-bold mb-4">Upgrade</h1> */}
//         <h2 className="text-[40px] font-bold">{tier.name}</h2>

//         <div className="relative my-4">
//           {/* <FaAngleLeft
//             className="text-[40px] absolute left-0 top-1/2 -translate-y-1/2 text-2xl cursor-pointer"
//             onClick={handlePrev}
//           /> */}
//           <img
//             src="assets/trophy.png" 
//             alt="Trophy"
//             className="w-32 h-32 mx-auto"
//           />

//           {/* <span className="text-[100px]">
//             {tier.badgeIcon}
//           </span> */}
//           {/* <FaAngleRight
//             className="text-[40px] absolute right-0 top-1/2 -translate-y-1/2 text-2xl cursor-pointer"
//             onClick={handleNext}
//           /> */}
//         </div>

//         {tier.requirement && (
//             <>
//         <div className="font-semibold text-[25px]">Requirement</div>
//           <div className="w-[80%] h-[100px] flex justify-center items-center font-bold text-[25px] border-[#737373] border-2 bg-[#262626] rounded-3xl mx-auto text-gray-400">
//                 <h2>{tier.requirement}</h2>
               
//             {/* <div className="bg-gray-800 py-2 rounded">{tier.requirement}</div> */}
//           </div>
//           </>
//         )}


//         {tier.requirements && (
//             <>
//         <div className="font-semibold text-[25px]">Requirements</div>
//           <div className="w-[80%]  h-[100px] flex flex-col gap-2 justify-center items-center font-bold text-[25px] border-[#737373] border-2 bg-[#262626] rounded-3xl mx-auto text-gray-400">
//                <div className="flex items-center gap-2 text-[17px]">
//                 <div>
//                     <h2>Upgrade Silver account</h2>
//                 </div>
//                 <div >
//                     <FontAwesomeIcon icon={faCheck} className={` ${tier.requirements.upgradeSilver == true ? "block" : "hidden"} text-green-600`}/>
//                     <FontAwesomeIcon icon={faClose} className={` ${tier.requirements.upgradeSilver == false ? "block" : "hidden"} text-red-600`}/>
//                 </div>
//                </div>
//                <div className="flex items-center gap-2 text-[17px]">
//                 <div>
//                     <h2>
//                         <span>{referrals}</span>/5 Direct Referrals
//                     </h2>
//                 </div>
//                 <div>
//                     <FontAwesomeIcon icon={faCheck} className={`${referrals === 5 ? "block" : "hidden"} text-green-600`} />
//                     <FontAwesomeIcon icon={faClose} className={`${referrals < 5 ? "block" : "hidden"} text-red-600`} />
//                 </div>
//                </div>
//           </div>
//           </>
//         )}

//     <button className={`w-[100%] mx-auto h-[100px] gap-4  flex justify-center items-center text-[24px] font-semibold rounded ${tier.buttonStyle}`}>
//           {/* {tier.status} */}
//           {tier.buttonText}
//         </button>
//       </div>
//     </div>
//   );
// }