import React from 'react';
import intro8 from '../assets/intro8.png'; // Import the image as a module

const Digital = () => {
  return (
    <section className='w-full bg-gradient-to-r from-blue-900 to-black pt-14 mx-auto' id="home">
        <div className="w-full flex flex-col md:flex-row  md:justify-between justify-center items-center md:mx-12 mx-2">
            <div className='flex flex-col'>
                <div className='m-3 w-full p-4 '>
                    <img src={intro8} alt="Intro" className='m-auto' /> {/* Use the imported image */}
                </div>
            </div>

            <div className="md:w-[50%]  text-center md:text-left leading-10 px-10">
                <h6 className='text-white'>Request Early Access to Get Started</h6>
                
                <h1 className="bg-gradient-to-r from-[#AD66F9] via-[#EF9570] to-[#EF9570] bg-clip-text text-transparent font-bold text-2xl font-manrope lg:text-4xl text-center md:text-left py-2">
                    Embracing the limitless possibilities of the digital age.
                </h1>

                <p className="text-white md:my-4 my-2 text-sm md:text-sm font-manrope px-2 md:px-0 pb-4">
                    At Uootes Technologies, our vision transcends boundaries, envisioning a future <br /> where financial freedom is universally accessible. We strive to be a pioneering <br /> force in the web3 space, empowering individuals and businesses globally to <br /> thrive in a decentralized economy.
                    
                </p>

                <h6 className='text-white'>Request Early Access to Get Started</h6>
            </div>
        </div>
    </section>
  );
}

export default Digital;
