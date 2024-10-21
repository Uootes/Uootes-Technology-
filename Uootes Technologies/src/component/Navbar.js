import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800  my-auto md:my-[-20px] md:h-40">
        <div className="container mx-auto py-[-16px] flex justify-between items-center">
            <div className="w-[30%] py-[-10px]">
                <a href="/">
                    <img src='./Asset/uootes.png' className='w-[10em] p' alt='uootes-logo' />
                </a>
            </div>

            <div className='hidden md:flex md:text-xs justify-between w-[70%]'>
                <div className="space-x-4 lg:text-2xl md:text-base md:pb-[-10px]">
                <a href="/" className="text-gray-300 hover:text-purple-400">Home</a>
                <a href="/about" className="text-gray-300 hover:text-purple-400">About</a>
                <a href="/services" className="text-gray-300 hover:text-purple-400">Services</a>
                <a href="/roadmap" className="text-gray-300 hover:text-purple-400">RoadMap</a>
                {/* <a href="/howitworks" className="text-gray-300 hover:text-purple-400">How It Works</a> */}
                <a href="/contact" className="text-gray-300 hover:text-purple-400">Contact</a>
                </div>

                <div className="hidden md:flex lg:text-2xl space-x-4 md:text-base">
                <a href="/login" className="text-gray-300  hover:text-purple-400">Login</a>
                <div>
                <a href="/signup" className="bg-blue-500 text-white px-4 py-2 rounded">Sign Up</a>

                </div>
                </div>
            </div>
            
            <div className="md:hidden pr-8">
                <button onClick={toggleMenu} className="text-gray-300 hover:text-purple-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </div>
        {isMenuOpen && (
            <div className="md:hidden text-2xl pl-16">
            <a href="/" className="block text-gray-300 pb-2 hover:text-purple-400">Home</a>
            <a href="/about" className="block text-gray-300 pb-2 hover:text-purple-400">About</a>
            <a href="/services" className="block text-gray-300 pb-2 hover:text-purple-400">Services</a>
            <a href="/contact" className="block text-gray-300 pb-2 hover:text-purple-400">Contact</a>
            <a href="/login" className="block text-gray-300 pb-2 hover:text-purple-400 pt-4 pb-2">Login</a>
            <a href="/signup" className="block bg-blue-500 pb-2 text-white px-4 py-2 text-center rounded w-[6em]">Sign Up</a>
            </div>
        )}
    </nav>
  );
};

export default Navbar;




// import React from 'react';

// function Navbar() {
//   return (
//     <div>
//         <nav className="bg-gray-800 p-4">
//             <div className="container mx-auto flex justify-between items-center">
//                 <div className="text-white text-2xl font-bold">
//                     <a href="/">MyLogo</a>
//                 </div>

//                 <div className="hidden md:flex space-x-4">
//                     <a href="/" className="text-gray-300 hover:text-white">Home</a>
//                     <a href="/about-us" className="text-gray-300 hover:text-white">About Us</a>
//                     <a href="/services" className="text-gray-300 hover:text-white">Services</a>
//                     <a href="/roadmap" className="text-gray-300 hover:text-white">RoadMap</a>
//                     <a href="/howitworks" className="text-gray-300 hover:text-white">How It Works</a>
//                     <a href="/contact" className="text-gray-300 hover:text-white">Contact</a>
//                 </div>

//                 <div className="hidden md:flex space-x-4">
//                     <a href="/login" className="text-gray-300 hover:text-white">Login</a>
//                     <a href="/signup" className="bg-blue-500 text-white px-4 py-2 rounded">Sign Up</a>
//                 </div>

//                 <div className="md:hidden">
//                     <button className="text-gray-300 hover:text-white">
//                         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
//                         </svg>
//                     </button>
//                 </div>
//             </div>
//         </nav>
//     </div>
//   )
// }

// export default Navbar;