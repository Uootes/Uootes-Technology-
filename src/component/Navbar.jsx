import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false);
    const [isSignupDropdownOpen, setIsSignupDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleLoginDropdown = () => {
        setIsLoginDropdownOpen(!isLoginDropdownOpen);
        if (isSignupDropdownOpen) setIsSignupDropdownOpen(false); // Close Sign Up dropdown if it's open
    };

    const toggleSignupDropdown = () => {
        setIsSignupDropdownOpen(!isSignupDropdownOpen);
        if (isLoginDropdownOpen) setIsLoginDropdownOpen(false); // Close Login dropdown if it's open
    };

    // Close menu on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isMenuOpen]);

    return (
        <nav className="bg-gradient-to-r from-blue-900 to-black shadow-md shadow-gray-400 w-full fixed z-55">
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

                {/* Login & Signup with Dropdowns */}
                <div className="hidden md:flex space-x-2 relative">
                    <div>
                        <button onClick={toggleLoginDropdown} className="text-gray-300 hover:text-purple-400 p-2 border rounded">
                            Login
                        </button>
                        {isLoginDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                                <a href="/login/email" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Login with Email</a>
                                <a href="/login/social" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Login with Social Media</a>
                            </div>
                        )}
                    </div>
                    <div>
                        <button onClick={toggleSignupDropdown} className="bg-blue-500 text-white p-2 rounded">
                            Sign Up
                        </button>
                        {isSignupDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                                <a href="/signup/email" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Sign Up with Email</a>
                                <a href="/signup/social" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Sign Up with Social Media</a>
                            </div>
                        )}
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="md :hidden pr-8">
                    <button
                        onClick={toggleMenu}
                        className="text-gray-300 hover:text-purple-400"
                        aria-label="Toggle Menu"
                        aria-expanded={isMenuOpen}
                    >
                        {isMenuOpen ? (
                            // Close icon (times)
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            // Hamburger icon
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
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
                        <li><a href="#contact" className="block text-gray-300 pb-2 hover:text-purple-400">Contact</a></li>
                        <li>
                            <button onClick={toggleLoginDropdown} className="block text-gray-300 pb-2 hover:text-purple-400">Login</button>
                            {isLoginDropdownOpen && (
                                <div className="pl-4">
                                    <a href="/login/email" className="block text-gray-300 pb-2 hover:text-purple-400">Login with Email</a>
                                    <a href="/login/social" className="block text-gray-300 pb-2 hover:text-purple-400">Login with Social Media</a>
                                </div>
                            )}
                        </li>
                        <li>
                            <button onClick={toggleSignupDropdown} className="block bg-blue-500 text-white px-4 py-2 rounded">Sign Up</button>
                            {isSignupDropdownOpen && (
                                <div className="pl-4">
                                    <a href="/signup/email" className="block text-gray-300 pb-2 hover:text-purple-400">Sign Up with Email</a>
                                    <a href="/signup/social" className="block text-gray-300 pb-2 hover:text-purple-400">Sign Up with Social Media</a>
                                </div>
                            )}
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;