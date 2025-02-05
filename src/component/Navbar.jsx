import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import utLogo from '../assets/utlogo.png'; // Import the image as a module

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        if(isMenuOpen) {
            setIsMenuOpen(false);
            // enablePageScroll();
        } else {
            setIsMenuOpen(true);
            // disablePageScroll();
        }
    };

    // const scrollToSection = (id) => {
    //     const section = document.getElementById(id);
    //     section.scrollIntoView({ behavior: 'smooth' });
    // };

    const handleLinkClick = () => {
        if (!isMenuOpen) return; 
            
        setIsMenuOpen(false);
        // enablePageScroll();
    };

    return (
        <nav className="w-full bg-slate-900">
            <div className="fixed top-0 z-10 bg-gradient-to-r from-blue-900 to-black shadow-blue-900 w-full right-0 flex justify-between items-center py-3 md:px-10">
                <a href="#home">
                    <img src={utLogo} alt="Uootes Technology Logo" className="w-[10em] h-10 mr-2" /> {/* Updated image import */}
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
                <div className="hidden md:flex space-x-2 lg:text-2xl">
                    <Link to="/login" className="text-gray-300 hover:text-purple-400 p-2">Login</Link>
                    <Link to="/signup" className="text-gray-300 hover:text-purple-400 hover:bg-black p-2 border border-blue-900 rounded bg-blue-900">Signup</Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden pr-8">
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
                l                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden text-2xl pl-2 pt-20  pb-10 leading-loose h-screen w-[100%] fixed bg-gradient-to-r from-blue-900 to-black">
                    <ul>
                        <li><a href="#home" className="block text-gray-300 pb-2 hover:text-purple-400" onClick={handleLinkClick}>Home</a></li>
                        <li><a href="#about" className="block text-gray-300 pb-2 hover:text-purple-400" onClick={handleLinkClick}>About</a></li>
                        <li><a href="#services" className="block text-gray-300 pb-2 hover:text-purple-400" onClick={handleLinkClick}>Services</a></li>
                        <li><a href="#roadmap" className="block text-gray-300 pb-2 hover:text-purple-400" onClick={handleLinkClick}>RoadMap</a></li>
                        <li><a href="#contact" className="block text-gray-300 pb-2 hover:text-purple-400" onClick={handleLinkClick}>Contact</a></li>
                        <li><a href="#faq" className="block text-gray-300 pb-2 hover:text-purple-400" onClick={handleLinkClick}>FAQ</a></li>
                        {/* <li><a href="/login" className="block text-gray-300 pb-2 hover:text-purple-400" onClick={handleLinkClick}>Login</a></li>
                        <li><a href="/signup" className="block bg-blue-500 pb-2 text-white px-4 py-2 text-center rounded w-[6em]" onClick={handleLinkClick}>Sign Up</a></li> 
                        */}
                        <div className="md:hidden flex  flex-row space-x-20 mt-11">
            <Link to="/login" onClick={handleLinkClick} className="block pb-2 text-white  px-6 py-2 text-center rounded-[10px] ring-4 ring-white hover:bg-gradient-to-r from-[#77248c] to-[#673907cd] ">LOGIN</Link>
            <Link to="/signup" onClick={handleLinkClick} className="block bg-gradient-to-r from-[#77248c] to-[#673907cd]  pb-2 text-white px-4 py-2 text-center rounded-[10px] ring-4 ring-white hover:bg-clip-text">SIGN UP</Link>
            </div> 
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;