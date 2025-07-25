import React, { useState, useEffect, useContext, useRef } from 'react';
import { UserContext } from '../../context/UserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCertificate } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const Home = () => {
    const { user } = useContext(UserContext);
    const [countdown, setCountdown] = useState(12 * 60 * 60); // 12 hours in seconds
    const [referralData, setReferralData] = useState({ referrals: 0, visitors: 0 });
    // Default avatar/fallback
    const [profileImage, setProfileImage] = useState('/src/assets/fin.png');
    const [isUploading, setIsUploading] = useState(false);
    const fileInputRef = useRef(null);

    // Handle image upload and preview
    const handleImageUpload = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        // Instant preview
        const previewUrl = URL.createObjectURL(file);
        setProfileImage(previewUrl);

        setIsUploading(true);
        const formData = new FormData();
        formData.append('profilePicture', file);

        try {
            const token = localStorage.getItem('token');
            const response = await axios.post('https://uootes.onrender.com/api/v1/profile/picture', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                }
            });
            // Persist image URL after upload
            setProfileImage(response.data.profilePicture.imageUrl);
            localStorage.setItem('profileImageUrl', response.data.profilePicture.imageUrl);
        } catch (error) {
            console.error('Error uploading profile picture:', error);
        } finally {
            setIsUploading(false);
        }
    };

    // Load profile image from localStorage or server
    useEffect(() => {
        const localImg = localStorage.getItem('profileImageUrl');
        if (localImg) {
            setProfileImage(localImg);
        } else {
            const fetchProfilePicture = async () => {
                try {
                    const token = localStorage.getItem('token');
                    const response = await axios.get('https://uootes.onrender.com/api/v1/profile/picture', {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    });
                    if (response.data.imageUrl) {
                        setProfileImage(response.data.imageUrl);
                        localStorage.setItem('profileImageUrl', response.data.imageUrl);
                    }
                } catch (error) {
                    console.error('Error fetching profile picture:', error);
                }
            };
            fetchProfilePicture();
        }

        const countdownTimer = setInterval(() => {
            setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(countdownTimer); // Cleanup
    }, []);

    useEffect(() => {
        const fetchReferralData = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('https://uootes.onrender.com/api/v1/referrals/count', {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });
                setReferralData(response.data);
            } catch (error) {
                console.error('Error fetching referral data:', error);
            }
        };

        fetchReferralData();
    }, []);

    const formatCountdown = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes
            .toString()
            .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div className='w-full text-white pt-8 pb-8' id='userhome'>
            {/* Top section */}
            <div className='w-full flex flex-row justify-between '>
                <div className='flex ml-8 gap-4 my-auto'>
                    <div className='w-[40px] h-[40px] relative border-2 rounded-full cursor-pointer' onClick={() => fileInputRef.current.click()}>
                        <input type="file" ref={fileInputRef} onChange={handleImageUpload} className="hidden" accept="image/*" />
                        <img src={profileImage} className='avatar w-full h-full object-cover rounded-full' alt="Profile" />
                        {isUploading && <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center rounded-full">...</div>}
                        <div className='w-[20px] h-[20px] absolute text-green-600 rounded-full ml-[23px] mt-[-14px]'>
                            <FontAwesomeIcon icon={faCertificate} />
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex gap-[4px]'>
                            <h2 className='text-[13px] sm:text-[15px] md:text-[20px] lg:text-[30px] font-semibold'>{user?.username} </h2>
                            {/* <div className='w-[20px] h-[20px] bg-green-600 rounded-full my-auto'></div> */}
                        </div>
                        <div className='w-[60px] h-[24px] bg-blue-800 flex justify-center text-[15px] font-semibold rounded-3xl'>Silver</div>
                    </div>
                </div>

                {/* Top Right */}
                <div className='flex flex-col gap-2 pr-4 font-semibold items-end'>
                    <div className='flex gap-4'>
                        <select name="" id="" className='flex justify-center outline-none font-normal bg-[#262626] rounded-xl pl-1'>
                            <option value="">Eng</option>
                        </select>
                        <span className='text-[20px] my-auto'>
                            <FontAwesomeIcon icon={faBell} />
                        </span>
                    </div>
                    <div>
                        <h3 className='text-[10px] md:text-[17px] lg:text-[20px] font-bold'>Exchanger online: <span className='text-green-500'>$100,250</span></h3>
                    </div>
                </div>
            </div>

            {/* Main dashboard */}
            <div className='mt-16 w-full flex flex-col gap-8  lg:flex-row'>
                <div className='w-[100%] lg:w-[45%]  h-auto  flex flex-col'>
                    <div className='w-[90%] mx-auto h-[100px]  bg-[#262626] border-gray-400 border-[1.8px] rounded-xl flex flex-col justify-center pl-6'>
                        <h4 className='text-[#737373] font-semibold text-[15px]'>Wallet Balance</h4>
                        <h1 className='text-[25px] lg:text-[30px]'>$ 100,000.00</h1>
                    </div>
                    <div className='flex mx-auto gap-2 md:gap-4 mt-8 font-semibold\'>
                        <button className='h-[30px] md:h-[35px] w-[70px] md:w-[100px] text-[12px] md:text-[17px] bg-blue-900 rounded-2xl'>Deposit</button>
                        <button className='h-[30px] md:h-[35px] w-[70px] md:w-[100px] text-[12px] md:text-[17px] bg-gray-900 rounded-2xl'>Withdraw</button>
                        <button className='h-[30px] md:h-[35px] w-[70px] md:w-[100px] text-[12px] md:text-[17px] bg-green-600 rounded-2xl'>Buy</button>
                        <button className='h-[30px] md:h-[35px] w-[70px] md:w-[100px] text-[12px] md:text-[17px] bg-red-600 rounded-2xl'>Sell</button>
                    </div>
                </div>

                {/* Pool Balance */}
                <div className='w-[100%] lg:w-[50%] h-auto pb-16 flex flex-col gap-4'>
                    <div className='w-[90%] lg:w-[100%] mx-auto h-[100px]  bg-[#262626] border-gray-400 border-[1.8px] rounded-xl flex flex-col justify-center text-center'>
                        <h4 className='text-[#737373] font-semibold text-[15px]'>Pool Balance</h4>
                        <h1 className='text-[24px] md:text-[30px]'>$ 5,000,000.00</h1>
                        <h4 className='text-[16px] md:text-[19px] text-yellow-400 text-right mr-8'>
                            {formatCountdown(countdown)}
                        </h4>
                    </div>
                    {/* Supply Balance */}
                    <div className='w-[90%] lg:w-[100%] mx-auto h-[260px]  bg-[#262626] border-gray-400 border-[1.8px] rounded-xl flex flex-col pt-2 mt-4'>
                        <h4 className='text-[#737373] font-semibold text-[15px] text-center'>Supply Balance</h4>
                        <h4 className='text-[16px] md:text-[18px] font-semibold ml-8'>Crude point token</h4>
                        <h4 className='text-[16px] md:text-[18px] text-[#ff8254ec] font-semibold ml-8'>Batch No: 1</h4>
                        <h1 className='text-center text-[20px] md:text-[25px]'>CPT 10,000,000,000.00</h1>

                        <div className='mx-auto flex flex-col gap-2 w-[100%] mt-4 font-semibold'>
                            <div className='flex justify-evenly'>
                                <div className='w-[90px] h-[28px] text-[15px] bg-gray-900 rounded-3xl flex justify-center items-center'>
                                    <h3 className='font-semibold '>Demand</h3>
                                </div>
                                <h2>CPT 500,000,000</h2>
                            </div>
                            <div className='flex justify-evenly'>
                                <div className='w-[90px] h-[28px] text-[15px] bg-gray-900 rounded-3xl flex justify-center items-center'>
                                    <h3 className='font-semibold '>Burned</h3>
                                </div>
                                <h2>CPT 20,000,000</h2>
                            </div>
                            <div className='flex justify-evenly'>
                                <div className='w-[90px] h-[28px] text-[14px] pt-[2px] bg-gray-900 rounded-3xl flex justify-center align-middle'>
                                    <h3 className='font-semibold '>Circulation</h3>
                                </div>
                                <h2>CPT 30,000,000</h2>
                            </div>
                        </div>
                    </div>
                    {/* CPT Balance */}
                    <div className='w-[100%] justify-center items-center flex flex-col md:flex-row mx-auto mt-8 gap-4 md:gap-8 font-semibold'>
                        <div className='w-[90%] md:w-[40%] lg:w-[50%] h-[220px] bg-[#262626] border-2 border-gray-400 rounded-xl flex flex-col justify-evenly'>
                            <div className='text-center flex flex-col'>
                                <h4 className='text-[#737373]'>CPT Balance</h4>
                                <h2 className='text-[18px] md:text-[20px]'>CPT 10,000,000</h2>
                            </div>
                            <div className='text-center flex flex-col'>
                                <h4 className='text-[#737373]'>Incubator Balance</h4>
                                <h2 className='text-[18px] md:text-[20px]'>CPT 100,000,000</h2>
                            </div>
                            <div className='text-center flex flex-col'>
                                <h4 className='text-[#737373] '>Total Token purchased</h4>
                                <h2 className='text-[18px] md:text-[20px]'>CPT 500,000,000</h2>
                            </div>
                        </div>
                        {/* Payout */}
                        <div className='w-[90%] md:w-[50%] lg:w-[50%] h-[220px] bg-blue-800 rounded-xl flex flex-col justify-center text-center'>
                            <h3 className='text-[25px] font-semibold text-[#ff8254ec]'>Payout</h3>
                            <h1 className='text-[22px] '>$ 100,000.00</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* Task */}
            <div className='w-full'>    
                <div className='w-[90%] md:w-[95%] h-[100px] bg-[#262626] border-2  border-gray-400 mx-auto rounded-xl pt-3'>
                    <h2 className='text-[12px] md:text-[17px] font-semibold ml-8 pr-3'>COMPLETE SIMPLE TASKS TO CLAIM AN EXCLUSIVE REWARD OF 100,000 CPT</h2>
                    <div className='w-[90%] flex justify-between mx-auto mt-4'>
                        <button className='bg-blue-800 outline-none w-[80px] h-[30px] font-semibold rounded-3xl '>Open</button>
                        <button className='bg-blue-800 outline-none w-[80px] h-[30px] font-semibold rounded-3xl hidden'>Claim</button>
                        <div className='w-[100px] h-[30px] bg-gray-900 font-semibold text-center flex justify-center'>0/11</div>
                    </div>
                </div>
                {/* Referal */}
                <div className='w-full items-center flex flex-col md:flex-row  justify-center gap-8 mt-16 '>
                    <div className='w-[90%] md:w-[40%] h-[350px] mx-auto bg-blue-800 rounded-xl justify-center flex flex-col text-center'>
                        <h4 className='text-[30px] font-semibold text-[#ff8254ec]'>Referal</h4>
                        <h1 className='text-[27px] font-semibold'>{referralData.referrals}</h1>
                        <h5 className='text-[30px] font-semibold text-[#ff8254ec]'>Visitor</h5>
                        <h1 className='text-[27px] font-semibold'>{referralData.visitors}</h1>
                    </div>
                    <div className='w-[90%] md:w-[40%] h-[350px] mx-auto bg-gray-800 rounded-xl'>
                        <h1 className='text-[20px] text-center mx-auto font-semibold   bg-blue-800 w-[150px]'>Selliing price</h1>

                        {/* Selling Price Section */}
                        <div className='flex w-[100%] flex-col mx-auto gap-2 mt-3'>
                            <div className='flex w-[100%] justify-between'>
                                <div className='flex gap-4 pl-2'>
                                    <div className='w-[8px] h-[8px] my-aut text-green-600 rounded-full'>
                                        <FontAwesomeIcon icon={faCertificate} />
                                    </div>
                                    <h2 className='font-semibold'>Batch 1:</h2>
                                </div>
                                <div className='pr-4'>
                                    <h4 className='font-normal'>0.00004 $</h4>
                                </div>
                            </div>
                            <div className='flex w-[100%] justify-between'>
                                <div className='flex gap-4 pl-2'>
                                    <div className='w-[8px] h-[8px] my-aut text-green-600 rounded-full hidden'>
                                        <FontAwesomeIcon icon={faCertificate} />
                                    </div>
                                    <h2 className='font-semibold'>Batch 2:</h2>
                                </div>
                                <div className='pr-4'>
                                    <h4 className='font-normal'>0.00004 $</h4>
                                </div>
                            </div>
                            <div className='flex w-[100%] justify-between'>
                                <div className='flex gap-4 pl-2'>
                                    <div className='w-[8px] h-[8px] my-aut text-green-600 rounded-full hidden'>
                                        <FontAwesomeIcon icon={faCertificate} />
                                    </div>
                                    <h2 className='font-semibold'>Batch 3:</h2>
                                </div>
                                <div className='pr-4'>
                                    <h4 className='font-normal'>0.002 $</h4>
                                </div>
                            </div>
                            <div className='flex w-[100%] justify-between'>
                                <div className='flex gap-4 pl-2'>
                                    <div className='w-[8px] h-[8px] my-aut text-green-600 rounded-full hidden'>
                                        <FontAwesomeIcon icon={faCertificate} />
                                    </div>
                                    <h2 className='font-semibold'>Batch 4:</h2>
                                </div>
                                <div className='pr-4'>
                                    <h4 className='font-normal'>0.004 $</h4>
                                </div>
                            </div>

                            {/* Buying Price section */}
                            <div className='w-[100%] h-[40px] bg-blue-800 mt-4 flex justify-center items-center text-[20px] font-semibold'>
                                <h2>Batch 1 Buying Price</h2>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='flex w-[100%] justify-between'>
                                    <div className='flex gap-4 pl-2'>
                                        <div className='w-[8px] h-[8px]4 text-green-600 rounded-full hidden'>
                                            <FontAwesomeIcon icon={faCertificate} />
                                        </div>
                                        <h2 className='font-semibold '>Bronze</h2>
                                    </div>
                                    <div className='pr-4'>
                                        <h4 className='font-normal'>0.0000301 $/360hr</h4>
                                    </div>
                                </div>

                                <div className='flex w-[100%] justify-between'>
                                    <div className='flex gap-4 pl-2'>
                                        <div className='w-[8px] h-[8px]4 text-green-600 rounded-full'>
                                            <FontAwesomeIcon icon={faCertificate} />
                                        </div>
                                        <h2 className='font-semibold'>Silver</h2>
                                    </div>
                                    <div className='pr-4'>
                                        <h4 className='font-normal'>0.0000258 $/168hr</h4>
                                    </div>
                                </div>

                                <div className='flex w-[100%] justify-between'>
                                    <div className='flex gap-4 pl-2'>
                                        <div className='w-[8px] h-[8px]4 text-green-600 rounded-full hidden'>
                                            <FontAwesomeIcon icon={faCertificate} />
                                        </div>
                                        <h2 className='font-semibold'>Gold</h2>
                                    </div>
                                    <div className='pr-4'>
                                        <h4 className='font-normal'>0.0000215 $/72hr</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
