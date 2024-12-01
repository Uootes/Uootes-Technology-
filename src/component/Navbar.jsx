import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ isOpen, toggle, options }) => {
    return (
        <div className="relative">
            <button
                onClick={toggle.toggle} // Use toggle.toggle to execute the function
                className="text-gray-300 hover:text-purple-400 p-2 border rounded"
                aria-haspopup="true"
                aria-expanded={isOpen}
            >
                {toggle.name}
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                    {options.map((option, index) => (
                        <a key={index} href={option.path} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                            {option.label}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false);
    const [isSignupDropdownOpen, setIsSignupDropdownOpen] = useState(false);

    const loginDropdownRef = useRef(null);
    const signupDropdownRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleLoginDropdown = () => {
        setIsLoginDropdownOpen(!isLoginDropdownOpen);
        if (isSignupDropdownOpen) setIsSignupDropdownOpen(false);
    };

    const toggleSignupDropdown = () => {
        setIsSignupDropdownOpen(!isSignupDropdownOpen);
        if (isLoginDropdownOpen) setIsLoginDropdownOpen(false);
    };

    // Close menu on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isMenuOpen]);

    // Close the dropdowns when clicking outside of them
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (loginDropdownRef.current && !loginDropdownRef.current.contains(event.target)) {
                setIsLoginDropdownOpen(false);
            }
            if (signupDropdownRef.current && !signupDropdownRef.current.contains(event.target)) {
                setIsSignupDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className="bg-gradient-to-r from-blue-900 to-black shadow-md shadow-gray-400 w-full fixed z-50 p-4">

            <div className="container flex justify-between items-center md:px-4">
                <a href="/">
                    <img src='./Asset/utlogo.png' className='w-[7em]' alt='Uootes Logo' />
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
                    <Dropdown
                        isOpen={isLoginDropdownOpen}
                        toggle={{ name: 'Login', toggle: toggleLoginDropdown }}
                        options={[
                            { label: 'User', path: '/p404' },
                            { label: 'Exchanger', path: '*' },
                        ]}
                    />
                    <Dropdown
                        isOpen={isSignupDropdownOpen}
                        toggle={{ name: 'Sign Up', toggle: toggleSignupDropdown }}
                        options={[
                            { label: 'As User', path: '/p404' },
                            { label: 'As Exchanger', path: '*' },
                        ]}
                    />
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">

                    <button
                        onClick={toggleMenu}
                        className="text-gray-300 hover:text-purple-400"
                        aria-label="Toggle Menu"
                        aria-expanded={isMenuOpen}
                    >
                        {isMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>

                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden text-2xl pl-4 pb-4 mx-2">
                    <ul>

                        <li><a href="#home" className="block text-gray-300 pb-2 hover:text-purple-400">Home</a></li>

                        <li><a href="#about" className="block text-gray-300 pb-2 hover:text-purple-400">About</a></li>

                        <li><a href="#services" className="block text-gray-300 pb-2 hover:text-purple-400">Services</a></li>

                        <li><a href="#roadmap" className="block text-gray-300 pb-2 hover:text-purple-400">RoadMap</a></li>

                        <li><a href="#contact" className="block text-gray-300 pb-2 hover:text-purple-400">Contact</a></li>

                        <li><a href="#faq" className="block text-gray-300 pb-2 hover:text-purple-400">FAQ</a></li>
                        <li>
                            <button onClick={toggleLoginDropdown} className="w-full block border border-white border-2 p-1 my-2 text-gray-300 pb-2 hover:text-purple-400 rounded">
                                Login
                            </button>
                            {isLoginDropdownOpen && (
                                <div className="pl-4">
                                    <a href="*" className="block text-gray-300 pb-2 hover:text-purple-400">Login as User</a>
                                    <a href="*" className="block text-gray-300 pb-2 hover:text-purple-400">Login As Exchanger</a>
                                </div>
                            )}
                        </li>
                        <li>
                            <button
                                onClick={toggleSignupDropdown}
                                className="block bg-blue-400 p-1 text-white rounded w-full"
                            >
                                <span>Sign Up</span>
                                <i className={`fas ${isSignupDropdownOpen ? 'fa-chevron-up' : 'fa-chevron-down'} text-white`} />
                            </button>
                            {isSignupDropdownOpen && (
                                <div className="pl-4">
                                    <a href="/" className="block text-gray-300 pb-2 hover:text-purple-400">Sign Up As User</a>
                                    <a href="/" className="block text-gray-300 pb-2 hover:text-purple-400">Sign Up As Exchanger</a>
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
