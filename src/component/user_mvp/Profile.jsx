import React, { useState } from 'react';
// import { FaPen, FaCamera } from 'react-icons/fa';
// import Gii12 from '../assets/Gii.jpg'

const Profile = () => {
  const [phone, setPhone] = useState('09033489935');
  const [address, setAddress] = useState('No 24 Abad Lagos kebbi');
  const [state, setState] = useState('Benue');

  const [editPhone, setEditPhone] = useState(false);
  const [editAddress, setEditAddress] = useState(false);
  const [editState, setEditState] = useState(false);

  const [profileImage, setProfileImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className='h-screen bg-black hover:bg-slate-900' id='profile'>
    <div className="flex flex-col items-center text-white p-6 rounded-lg max-w-sm mx-auto bt-10">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>

      <div className="relative mb-4">
        <img
          // src={Gii12} // Provide a default path or image
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover border-4 border-white"
        />
        <label className="absolute bottom-0 right-0 bg-orange-500 rounded-full p-2 cursor-pointer">
          {/* <FaCamera className="text-white" /> */}
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </label>
      </div>

      <div className="text-center space-y-3 w-full px-2">
        <p className="font-bold text-lg ">Robinson Taiwo Ezekiel</p>
        <p className='font-semibold text-xl'>Nigeria</p>
        <p className='font-semibold text-xl'>92382769</p>

        <div className="flex items-center justify-center">
          {editPhone ? (
            <input
              className="text-black px-2 py-1 rounded w-3/4"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              onBlur={() => setEditPhone(false)}
              autoFocus
            />
          ) : (
            <p className="cursor-pointer font-semibold text-xl" onClick={() => setEditPhone(true)}>
              {phone}
              {/* <FaPen className="inline-block ml-2 text-orange-500" /> */}
            </p>
          )}
        </div>

        <div className="flex items-center justify-center">
          {editAddress ? (
            <input
              className="text-black   px-2 py-1 rounded w-3/4"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              onBlur={() => setEditAddress(false)}
              autoFocus
            />
          ) : (
            <p className="cursor-pointer font-semibold text-xl" onClick={() => setEditAddress(true)}>
              {address}
              {/* <FaPen className="inline-block ml-2 text-orange-500" /> */}
            </p>
          )}
        </div>

        <div className="flex items-center justify-center">
          {editState ? (
            <input
              className="text-black px-2 py-1 rounded w-3/4"
              value={state}
              onChange={(e) => setState(e.target.value)}
              onBlur={() => setEditState(false)}
              autoFocus
            />
          ) : (
            <p className="cursor-pointer text-xl font-semibold" onClick={() => setEditState(true)}>
              {state}
              {/* <FaPen className="inline-block ml-2 text-orange-500" /> */}
            </p>
          )}
        </div>
      </div>
      <div className="pt-5 text-center mt-12">
            <button className='bg-blue-950 text-white px-4 py-2 rounded-lg text-xl'>
              SAVE CHANGES
            </button>
          </div>
    </div>

    </div>
  );
};

export default Profile;
