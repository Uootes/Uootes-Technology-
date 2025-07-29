import React, { useState, useEffect } from 'react';
import TeamCard from './TeamCard';

const API_URL = 'https://uootes.onrender.com/api/v1/profile';

const Team = () => {
  const [copySuccess, setCopySuccess] = useState(false);
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [counts, setCounts] = useState({ visitors: 0, referrals: 0 });
  const [profile, setProfile] = useState(null);

  const handleCopy = () => {
    if (profile && profile.referralCode) {
      navigator.clipboard.writeText(profile.referralCode);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error('Unauthorized - Invalid or missing token');
        }

        // Fetch team data
        const teamResponse = await fetch('https://uootes.onrender.com/api/v1/referrals/dashboarddata', {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        if (!teamResponse.ok) {
          throw new Error('Failed to fetch team data');
        }
        const teamData = await teamResponse.json();
        setTeamMembers(teamData.data);
        
        const countsResponse = await fetch('https://uootes.onrender.com/api/v1/referrals/count', {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        if (!countsResponse.ok) {
          throw new Error('Failed to fetch counts data');
        }
        const countsData = await countsResponse.json();
        setCounts({
          visitors: countsData.visitors,
          referrals: countsData.referrals,
        });

        // Fetch profile data
        const profileResponse = await fetch(API_URL, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });
        if (!profileResponse.ok) {
          throw new Error('Failed to fetch profile data');
        }
        const profileData = await profileResponse.json();
        setProfile(profileData.profile);

      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4 md:p-8" id='team'>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-2 text-orange-500">Your Team</h1>
        <p className="text-center text-gray-400 mb-8">View your team members and track your referral progress.</p>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
          {profile && (
            <div className="text-center mb-6">
              <p className="text-lg font-semibold">Your Referral Code</p>
              <div className="flex items-center justify-center mt-2">
                <span className="text-2xl font-bold text-orange-500 mr-4">{profile.referralCode}</span>
                <button
                  onClick={handleCopy}
                  className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors duration-300"
                >
                  {copySuccess ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>
          )}
          <div className="flex justify-around text-center">
            <div>
              <p className="text-gray-400 font-semibold">Visitors</p>
              <p className="text-3xl font-bold text-white">{counts.visitors}</p>
            </div>
            <div>
              <p className="text-gray-400 font-semibold">Referrals</p>
              <p className="text-3xl font-bold text-white">{counts.referrals}</p>
            </div>
          </div>
        </div>

        {loading && <p className="text-center">Loading team members...</p>}
        {error && <p className="text-center text-red-500">Error: {error}</p>}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} user={member} level={index + 1} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
