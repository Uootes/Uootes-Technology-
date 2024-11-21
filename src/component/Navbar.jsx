import React, { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="w-full">
            <div className="container flex justify-between items-center md:px-4">

                {/* Logo */}
                <a href="/">
                    <img src='./Asset/uooteslg.png' className='w-[10em]' alt='Uootes Logo' />
                </a>

                {/* Navigation Links */}
                <div className="hidden md:flex space-x-4 lg:text-2xl">
                    <a href="#home" className="text-gray-300 hover:text-purple-400 transition duration-300 ease-in-out" aria-label="Home">Home</a>
                    <a href="#about" className="text-gray-300 hover:text-purple-400 transition duration-300 ease-in-out" aria-label="About">About</a>
                    <a href="#services" className="text-gray-300 hover:text-purple-400 transition duration-300 ease-in-out" aria-label="Services">Services</a>
                    <a href="#roadmap" className="text-gray-300 hover:text-purple-400 transition duration-300 ease-in-out" aria-label="Roadmap">RoadMap</a>
                    <a href="#contact" className="text-gray-300 hover:text-purple-400 transition duration-300 ease-in-out" aria-label="Contact">Contact</a>
                    <a href="#faq" className="text-gray-300 hover:text-purple-400 transition duration-300 ease-in-out" aria-label="FAQ">FAQ</a>
                </div>

                {/* Login & Signup */}
                <div className="hidden md:flex space-x-2">
                    <a href="/login" className="text-gray-300 hover:text-purple-400 p-2 border rounded">Login</a>
                    <a href="/signup" className="bg-blue-500 text-white p-2 rounded">Sign Up</a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden pr-8">
                    <button
                        onClick={toggleMenu}
                        className="text-gray-300 hover:text-purple-400"
                        aria-label="Toggle Menu"
                        aria-expanded={isMenuOpen}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden text-2xl pl-4 pb-4">
                    <ul>
                        <li><a href="#home" className="block text-gray-300 pb-2 hover:text-purple-400">Home</a></li>
                        <li><a href="#about" className="block text-gray-300 pb-2 hover:text-purple-400">About</a></li>
                        <li><a href="#services" className="block text-gray-300 pb-2 hover:text-purple-400">Services</a></li>
                        <li><a href="#roadmap" className="block text-gray-300 pb-2 hover:text-purple-400">RoadMap</a></li>
                        <li><a href="#contact" className="block text-gray-300 pb-2 hover:text-purple-400">Contact</a></li>
                        <li><a href="#faq" className="block text-gray-300 pb-2 hover:text-purple-400">FAQ</a></li>
                        <li><a href="/login" className="block text-gray- 300 pb-2 hover:text-purple-400">Login</a></li>
                        <li><a href="/signup" className="block bg-blue-500 pb-2 text-white px-4 py-2 text-center rounded w-[6em]">Sign Up</a></li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
