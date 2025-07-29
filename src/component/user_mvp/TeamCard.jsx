import React from 'react';

const TeamCard = ({ user, level }) => {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <img src='' alt="profile" className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-orange-500" />
        <div>
          <h3 className="text-xl font-bold">{user.fullName}</h3>
          <p className="text-orange-400">{user.accountType}</p>
        </div>
        <div className="ml-auto w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center font-bold text-lg">
          {level}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 text-center">
        <div>
          <p className="text-gray-400">Status</p>
          <p className={`font-semibold ${user.activationStatus ? 'text-green-400' : 'text-red-400'}`}>
            {user.activationStatus ? 'Active' : 'Inactive'}
          </p>
        </div>
        <div>
          <p className="text-gray-400">Direct Referrals</p>
          <p className="font-semibold">{user.referralsCount}</p>
        </div>
        <div>
          <p className="text-gray-400">Visitors</p>
          <p className="font-semibold">{user.visitorsCount}</p>
        </div>
        <div>
          <p className="text-gray-400">User ID</p>
          <p className="font-semibold text-red-500">{user.userId}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
