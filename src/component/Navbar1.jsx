import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-gray-800 my-auto md:my-[-20px] md:h-40">
            <div className="container mx-auto py-[-16px] flex justify-between items-center">
                <div className="w-[30%] py-[-10px]">
                    <Link to="">
                        <img src='./Asset/uootes.png' className='w-[10em] p' alt='uootes-logo' />
                    </Link>
                </div>

                <div className='hidden md:flex md:text-xs justify-between w-[70%]'>
                    <div className="space-x-4 lg:text-2xl md:text-base md:pb-[-10px]">
                        <Link to="" className="text-gray-300 hover:text-purple-400">Home</Link>
                        <Link to="" className="text-gray-300 hover:text-purple-400">About</Link>
                        <Link to="" className="text-gray-300 hover:text-purple-400">Services</Link>
                        <Link to="" className="text-gray-300 hover:text-purple-400">RoadMap</Link>
                        <Link to="" className="text-gray-300 hover:text-purple-400">Contact</Link>
                        <a href="" className="text-gray-300 hover:text-purple-400">FAQ</a>
                    </div>

                    <div className="hidden md:flex lg:text-2xl space-x-4 md:text-base">
                        <Link to="" className="text-gray-300 hover:text-purple-400">Login</Link>
                        <div>
                            <Link to="" className="bg-blue-500 text-white px-4 py-2 rounded">Sign Up</Link>
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
                    <Link to="" className="block text-gray-300 pb-2 hover:text-purple-400">Home</Link>
                    <Link to="" className="block text-gray-300 pb-2 hover:text-purple-400">About</Link>
                    <Link to="" className="block text-gray-300 pb-2 hover:text-purple-400">Services</Link>
                    <Link to="" className="block text-gray-300 pb-2 hover:text-purple-400">RoadMap</Link>
                    <Link to="" className="block text-gray-300 pb-2 hover:text-purple-400 ">Contact</Link>
                    <Link to="" className="block text-gray-300 pb-2 hover:text-purple-400 ">FAQ</Link>
                    <Link to="" className="block text-gray-300 pb-2 hover:text-purple-400 pt-4 pb-2">Login</Link>
                    <Link to="" className="block bg-blue-500 pb-2 text-white px-4 py-2 text-center rounded w-[6em]">Sign Up</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
