

import { useState } from 'react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isGalleryDropdownOpen, setIsGalleryDropdownOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleGalleryDropdown = () => {
        setIsGalleryDropdownOpen(!isGalleryDropdownOpen);
    };

    return (
        <nav className="flex justify-between items-center px-4 py-4 md:px-8 bg-white shadow-lg sticky top-0 z-50 w-full">
            {/* Left side - School Logo */} <a href="/" className="flex items-center gap-3 hover:opacity-90 transition-all duration-300 group">
                <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-500 rounded-full blur opacity-30 group-hover:opacity-70 transition duration-300"></div>
                    <div className="relative">
                        <img
                            src="/logo.png"
                            alt="Little Light English School"
                            className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover shadow-md border-2 border-white group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                </div>
                <div className="flex flex-col">                            <span className="text-base md:text-lg lg:text-xl font-bold transition-colors duration-300 text-gray-800 font-['Poppins',sans-serif]">
                        Little Light English School
                    </span>
                    <span className="text-xs font-medium hidden md:block transition-colors duration-300 text-indigo-600 font-['Poppins',sans-serif]">Where Little Dreams Take Flight</span>
                </div>
            </a>

            {/* Right side - Navigation Menu - Desktop */}
            <div className="hidden md:flex items-center">
                <ul className="flex items-center space-x-5">
                    <li>
                        <a
                            href="/"
                            className="block px-6 py-3 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 font-medium transition-colors duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Home
                        </a>
                    </li>
                    <li className="flex items-center">
                        <a
                            href="/about"
                            className="text-gray-700 hover:text-indigo-600 font-medium px-4 py-2 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:-translate-y-0.5 flex items-center"
                        >
                            About Us
                        </a>
                    </li>
                    <li className="relative group flex items-center">
                        <button
                            className="text-gray-700 hover:text-indigo-600 font-medium px-4 py-2 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:-translate-y-0.5 flex items-center"
                            onMouseEnter={() => setIsGalleryDropdownOpen(true)}
                            onMouseLeave={() => setIsGalleryDropdownOpen(false)}
                        >
                            Gallery
                            <svg className="ml-1 h-4 w-4 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>

                        {/* Desktop Dropdown */}
                        <div
                            className={`absolute top-full left-0 mt-1 w-58 bg-white border border-gray-200 rounded-lg shadow-lg transition-all duration-200 ${isGalleryDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                                }`}
                            onMouseEnter={() => setIsGalleryDropdownOpen(true)}
                            onMouseLeave={() => setIsGalleryDropdownOpen(false)}
                        >
                            <ul className="py-2">
                                <li>
                                    <a
                                        href="/gallery/events"
                                        className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200"
                                    >
                                        🎪 Events
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/gallery/classrooms"
                                        className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200"
                                    >
                                        🏫 Classrooms
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/gallery/sports"
                                        className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200"
                                    >
                                        ⚽ Sports
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/gallery/fun-activities"
                                        className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200"
                                    >
                                        🎈 Fun Activities
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/gallery/celebrations"
                                        className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200"
                                    >
                                        � Celebrations
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="flex items-center">
                        <a
                            href="/admissions"
                            className="text-gray-700 hover:text-indigo-600 font-medium px-4 py-2 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:-translate-y-0.5 flex items-center"
                        >
                            Admissions
                        </a>
                    </li>
                    <li className="flex items-center">
                        <a
                            href="/contact-us"
                            className="text-gray-700 hover:text-indigo-600 font-medium px-4 py-2 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:-translate-y-0.5 flex items-center"
                        >
                            Contact Us
                        </a>
                    </li>
                </ul>
            </div>

            {/* Mobile menu toggle button */}
            <button
                className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none"
                onClick={toggleMobileMenu}
            >
                <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                    }`}></span>
                <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''
                    }`}></span>
                <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                    }`}></span>
            </button>

            {/* Mobile menu dropdown */}
            <div className={`absolute top-full left-0 right-0 bg-white shadow-lg md:hidden transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}>
                <ul className="flex flex-col py-4">

                    <li>
                        <a
                            href="/"
                            className="block px-6 py-3 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 font-medium transition-colors duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="/about"
                            className="block px-6 py-3 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 font-medium transition-colors duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            About Us
                        </a>
                    </li>
                    <li>
                        <button
                            className="w-full text-left block px-6 py-3 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 font-medium transition-colors duration-200 flex items-center justify-between"
                            onClick={toggleGalleryDropdown}
                        >
                            Gallery
                            <svg className={`h-4 w-4 transition-transform duration-200 ${isGalleryDropdownOpen ? 'rotate-180' : ''
                                }`} fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>

                        {/* Mobile Dropdown */}
                        <div className={`overflow-hidden transition-all duration-300 ${isGalleryDropdownOpen ? 'max-h-56 opacity-100' : 'max-h-0 opacity-0'
                            }`}>
                            <ul className="bg-gray-50">
                                <li>
                                    <a
                                        href="/gallery/events"
                                        className="block px-8 py-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors duration-200"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        🎪 Events
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/gallery/classrooms"
                                        className="block px-8 py-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors duration-200"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        🏫 Classrooms
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/gallery/sports"
                                        className="block px-8 py-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors duration-200"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        ⚽ Sports
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/gallery/fun-activities"
                                        className="block px-8 py-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors duration-200"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        🎈 Fun Activities
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/gallery/celebrations"
                                        className="block px-8 py-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors duration-200"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        � Celebrations
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a
                            href="/admissions"
                            className="block px-6 py-3 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 font-medium transition-colors duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Admissions
                        </a>
                    </li>
                    <li>
                        <a
                            href="/contact-us"
                            className="block px-6 py-3 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 font-medium transition-colors duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Contact Us
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}



export default Navbar