import React, { useEffect, useState } from 'react';

const API_URL = 'https://uootes.onrender.com/api/v1/profile';

// Helper components for field display/edit
function EditableField({ label, value, onChange }) {
  const [editing, setEditing] = useState(false);
  return (
    <div className="flex items-center justify-center">
      {editing ? (
        <input
          className="text-black px-2 py-1 rounded w-3/4"
          value={value}
          onChange={e => onChange(e.target.value)}
          onBlur={() => setEditing(false)}
          autoFocus
        />
      ) : (
        <p className="cursor-pointer font-semibold text-xl" onClick={() => setEditing(true)}>
          {label}: {value}
        </p>
      )}
    </div>
  );
}

function Field({ label, value }) {
  return <p className="font-semibold text-xl">{label}: {value}</p>;
}

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  // Fetch profile data on mount
  useEffect(() => {
    async function fetchProfile() {
      setLoading(true);
      try {
        const token = localStorage.getItem('token'); // Assuming token is in localStorage
        if (!token) {
          throw new Error('Unauthorized - Invalid or missing token');
        }

        const res = await fetch(API_URL, {
          headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });
        if (res.status === 401) {
          throw new Error('Unauthorized - Invalid or missing token');
        }
        if (res.status === 404) {
          throw new Error('User not found');
        }
        if (!res.ok) throw new Error('Failed to fetch profile');
        const data = await res.json();
        setProfile(data.profile);
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    }
    fetchProfile();
  }, []);

  // Handle field change
  const handleChange = (field, value) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  // Handle image change (UI only, not sent to API)
  const handleImageChange = e => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setProfile(prev => ({
        ...prev,
        profilePicture: {
          ...prev.profilePicture,
          imageUrl: URL.createObjectURL(file)
        }
      }));
    }
  };

  // Handle save changes
  const handleSave = async () => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem('token'); // Assuming token is in localStorage
      if (!token) {
        throw new Error('Unauthorized - Invalid or missing token');
      }
      // Only send required fields to the API
      const payload = {
        firstName: profile.firstName,
        lastName: profile.lastName,
        country: profile.country,
      };
      const res = await fetch(API_URL, {
        method: 'PUT',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      });
      if (res.status === 401) {
        throw new Error('Unauthorized - Invalid or missing token');
      }
      if (res.status === 404) {
        throw new Error('User not found');
      }
      if (!res.ok) throw new Error('Failed to update profile');
      const data = await res.json();
      setProfile(prev => ({
        ...prev,
        ...data.profile
      }));
      alert(data.message || 'Profile updated!');
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;
  if (!profile) return null;

  return (
     <div className='h-screen bg-black hover:bg-slate-900' id='profile'>
      <div className="flex flex-col items-center text-white p-6 rounded-lg max-w-sm mx-auto bt-10">
        <h2 className="text-2xl font-bold mb-4">Profile</h2>
        <div className="relative mb-4">
          <img
            src={profile.profilePicture?.imageUrl}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-white"
          />
          <label className="absolute bottom-0 right-0 bg-orange-500 rounded-full p-2 cursor-pointer">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </label>
        </div>
        <div className="text-center space-y-3 w-full px-2">
          <EditableField
            label="First Name"
            value={profile.firstName}
            onChange={val => handleChange('firstName', val)}
          />
          <EditableField
            label="Last Name"
            value={profile.lastName}
            onChange={val => handleChange('lastName', val)}
          />
          <Field label="Email" value={profile.email} />
          <EditableField
            label="Country"
            value={profile.country}
            onChange={val => handleChange('country', val)}
          />
          <Field label="Referral Code" value={profile.referralCode} />
          <Field label="Account Type" value={profile.accountType} />
          <Field label="Activation Status" value={profile.activationStatus} />
        </div>
        <div className="pt-5 text-center mt-12">
          <button
            className='bg-blue-950 text-white px-4 py-2 rounded-lg text-xl'
            onClick={handleSave}
            disabled={loading}
          >
            SAVE CHANGES
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile
