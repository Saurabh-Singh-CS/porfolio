import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');

  // Updated to include href IDs for smooth scrolling
 const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' }
];

  // Optional: Update active tab based on scroll position could go here

  return (
    <nav className="fixed w-full top-0 z-50 bg-[#121212]/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-5 flex justify-between items-center">
        
        <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-orange-400 cursor-pointer tracking-wider hover:scale-105 transition-transform duration-300">
          SAURABH.
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-10 text-gray-300 font-medium text-sm">
          {navLinks.map((link) => (
            <li
              key={link.name}
              onClick={() => setActiveTab(link.name)}
              className="relative group"
            >
              <a 
                href={link.href}
                className={`cursor-pointer transition-all duration-300 ${
                  activeTab === link.name ? 'text-[#FF6B00]' : 'hover:text-[#FF6B00]'
                }`}
              >
                {link.name}
              </a>
              <span
                className={`absolute -bottom-1 left-0 h-[2px] bg-[#FF6B00] transition-all duration-300 ease-out ${
                  activeTab === link.name ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              ></span>
            </li>
          ))}
        </ul>

        {/* Desktop Call to Action Button */}
        <a href="#contact" className="hidden md:block bg-[#FF6B00] hover:bg-transparent hover:text-[#FF6B00] border border-[#FF6B00] text-white px-7 py-2.5 rounded-full font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(255,107,0,0.3)] hover:shadow-[0_0_25px_rgba(255,107,0,0.6)] transform hover:-translate-y-1">
          Hire Me
        </a>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-gray-300 hover:text-[#FF6B00] focus:outline-none transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-8 h-8 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div
        className={`md:hidden absolute w-full bg-[#1A1A1A] border-b border-white/10 transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[400px] opacity-100 py-6' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <ul className="flex flex-col items-center space-y-6 text-gray-300 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => {
                  setActiveTab(link.name);
                  setIsOpen(false);
                }}
                className={`cursor-pointer transition-colors duration-300 text-lg ${
                  activeTab === link.name ? 'text-[#FF6B00]' : 'hover:text-[#FF6B00]'
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
          <a href="#contact" onClick={() => setIsOpen(false)} className="bg-[#FF6B00] text-center text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(255,107,0,0.3)] w-3/4 mt-4 block">
            Hire Me
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;