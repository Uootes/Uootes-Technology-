import React from 'react';
import './App.css';
import Navbar from '../component/Navbar';

const Banner = () => {
    return (
        <header className='w-full bg-gradient-to-r from-blue-900 to-black pt-[100px] ' id="home">
            <div className="w-full flex flex-col md:flex-row  md:justify-between justify-center items-center md:mx-12 mx-2">

                <div className="md:w-[70%] w-full">
                    {/* heading */}
                    <h1 className="bg-gradient-to-r from-[#AD66F9] via-[#EF9570] to-[#EF9570] bg-clip-text text-transparent font-bold text-2xl font-manrope lg:text-4xl text-center md:text-left">
                        <span className='text-4xl'>Earn Easy.</span>
                        <br />Go Borderless with Uootes.
                    </h1>

                    {/* paragraph */}

                    <p className="text-white font-semibold md:my-4 my-2 text-sm md:text-lg font-manrope">
                        Imagine a World of Financial Freedom: We Make it a Reality.
                    </p>

                    {/* mail */}
                    <div className="flex">
                        <input type="email" placeholder="Your Email Address" className=" w-full  rounded-l-[10px] bg-[#2a156b9b] text-[14px] text-blue-400 font-semibold md:p-4 p-2 focus:outline-none" />
                        {/* button */}
                        <button className="banner-btn md:w-[30%] w-[50%] bg-red-700 rounded-r-[10px] md:p-4 text-white font-normal"><a href="/signup_user">Get Started</a></button>
                    </div>
                </div>
                {/* banner img */}
                <div className='flex flex-col'>
                    <div className='m-3 w-full p-4 '>
                        <img src="./Asset/Top.png" alt="" className='md:w-1/2 m-auto' />
                    </div>
                    <a href="https://forms.gle/W6aQ9dk9ztSjuC2W6" target='_blank' className='text-white text-center m-auto font-bold text-md border rounded p-2'>Claim Your GOSSERCOIN!</a>
                </div>
            </div>

            <section className="w-full flex flex-col items-center justify-center md:mt-[100px] mt-[40px]">

                <div className="flex flex-row flex-wrap space-x-12 mx-3">
                    <img className="w-1/5 md:w-auto p-2" src="./Asset/slack.png" alt="" />
                    <img className="w-1/5 md:w-auto p-2" src="./Asset/atlassian.png" alt="" />
                    <img className="w-1/5 md:w-auto p-2" src="./Asset/google.png" alt="" />
                    <img className="w-1/5 md:w-auto p-2" src="./Asset/dropbox.png" alt="" />
                    <img className="w-1/5 md:w-auto p-2" src="./Asset/shopify-1.png" alt="" />
                </div>

                <div className="bg-gradient-to-l from-blue-900 to-gray-900 flex flex-row justify-between items-center md:w-[70%] w-[90%] mt-[40px] md:p-6 md:my-6 mb-3 p-3">

                    <div className="text-[#fff] font-bold flex flex-row ">
                        {/* image */}
                        <div className="my-auto">
                            <img src="./Asset/Gll.jpg" alt="Profile Image" className=" rounded w-[50px] md:w-[60px]  md:ml-4" />
                        </div>

                        {/* details */}
                        <div className="ml-2">
                            <p className="text-[13px] md:text-lg  font-semibold ">Ethan Carter</p>
                            <p className="md:text-[12px] text-sm ">Highest CPT tokens purchased</p>
                            <p className="md:text-[12px] text-sm text-[#ffd700]">50 CPT</p>
                        </div>
                    </div>
                    {/* number */}
                    <div className="text-white opacity-40 md:text-6xl text-4xl md:mr-8">01</div>

                </div>
            </section>

        </header>
    )
}

export default Banner