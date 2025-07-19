import React, { useState, useEffect } from 'react';
import TeamCard from './TeamCard';
// import Gii1 from '../assets/Gii.jpg'// Adjust the path if needed

const Team = () => {
  const [copySuccess, setCopySuccess] = useState(false);
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [counts, setCounts] = useState({ visitors: 0, referrals: 0 });
  

  const handleCopy = () => {
    navigator.clipboard.writeText(invitationLink);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await fetch('https://uootes.onrender.com/api/v1/referrals/dashboarddata');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setTeamMembers(data.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    const fetchCounts = async () => {
      try {
        const response = await fetch('https://uootes.onrender.com/api/v1/referrals/count');
        if (!response.ok) {
          throw new Error('Failed to fetch counts');
        }
        const data = await response.json();
        setCounts({ visitors: data.visitors, referrals: data.referrals });
      } catch (error) {
        console.error(error);
      }
    };

    fetchTeamData();
    fetchCounts();
  }, []);

  return (
    <div className="bg-black text-white min-h-screen p-4 hover:bg-slate-900" id='team'>
      <h1 className="text-2xl font-bold text-center mb-4">Teams</h1>

      <div className="bg-gray-900 p-4 border-2 outline-2 outline-slate-50 rounded-md mb-4 text-center">
        <p className="text-lg font-semibold">UID: <span className="text-white">2438285</span></p>
        <div className="flex justify-around my-3">
          <div>
            <p className="text-orange-500 font-semibold">Visitor</p>
            <p className="text-xl">{counts.visitors}</p>
          </div>
          <div>
            <p className="text-orange-500 font-semibold">Referral</p>
            <p className="text-xl">{counts.referrals}</p>
          </div>
        </div>
       
      </div>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {teamMembers.map((member, index) => (
        <TeamCard key={index} user={member} level={index + 1} />
      ))}
      
    </div>
  );
};

export default Team;
