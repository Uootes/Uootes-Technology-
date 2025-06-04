import React from 'react';
// import Gii1 from '../assets/Gii.jpg'

const TeamCard = ({ user, level }) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg mb-4 shadow-lg border-2 outline-2 outline-slate-50  ">
      <div className="flex justify-between items-center ">
        <div className="flex gap-4">
          <img src='' alt="profile" className="w-14 h-14 rounded-md object-cover" />
          <div>
            <h3 className="text-lg font-bold">{user.name}</h3>
            <p className="text-orange-400 font-semibold">{user.level}</p>
            <p>Status: <span className="font-medium">{user.status}</span></p>
            <p>Direct Referral: {user.referrals}</p>
            <p>Visitor: {user.visitors}</p>
            <p>User ID: <span className="text-red-500">{user.userId}</span></p>
          </div>
        </div>
        <div className="w-8 h-8 rounded-full bg-blue-700 border-2 outline-2 outline-gray-50 text-white flex items-center justify-center font-bold">
          {level}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
