import React, { useState } from 'react';
import TeamCard from './TeamCard';
// import Gii1 from '../assets/Gii.jpg'// Adjust the path if needed

const Team = () => {
  const [copySuccess, setCopySuccess] = useState(false);
  const invitationLink = 'https://example.com/invite/2438285';

  const handleCopy = () => {
    navigator.clipboard.writeText(invitationLink);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const teamMembers = [
    {
      name: 'Robinson Taiwo Ezekiel',
      level: 'Silver',
      status: 'Activated',
      referrals: 10,
      visitors: '50,000',
      userId: '26492672',
      // image: {Gii1},
    },
    {
      name: 'Robinson Taiwo Ezekiel',
      level: 'Gold',
      status: 'Inactive',
      referrals: 5,
      visitors: '2,000,000',
      userId: '46402673',
      // image: {Gii1},
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen p-4 hover:bg-slate-900" id='team'>
      <h1 className="text-2xl font-bold text-center mb-4">Teams</h1>

      <div className="bg-gray-900 p-4 border-2 outline-2 outline-slate-50 rounded-md mb-4 text-center">
        <p className="text-lg font-semibold">UID: <span className="text-white">2438285</span></p>
        <div className="flex justify-around my-3">
          <div>
            <p className="text-orange-500 font-semibold">Visitor</p>
            <p className="text-xl">100</p>
          </div>
          <div>
            <p className="text-orange-500 font-semibold">Referral</p>
            <p className="text-xl">10</p>
          </div>
        </div>
        <button
          onClick={handleCopy}
          className="bg-blue-600 text-white px-6 py-2 rounded-full border-2 outline-2 outline-gray-50"
        >
          {copySuccess ? 'Copied!' : 'Copy Invitation Link'}
        </button>
      </div>

      {teamMembers.map((member, index) => (
        <TeamCard key={index} user={member} level={index + 1} />
      ))}
      
    </div>
  );
};

export default Team;
