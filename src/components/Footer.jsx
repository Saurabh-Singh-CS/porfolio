import React from 'react';
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'http://www.linkedin.com/in/saurabh-singh-8a1a2b253', // Replace with your LinkedIn profile URL
      icon: <FaLinkedinIn className="text-base" />,
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Saurabh-Singh-CS', // Replace with your GitHub profile URL
      icon: <FaGithub className="text-base" />,
    },
    {
      name: 'Email',
      url: 'mailto:saurabh061singh@gmail.com',
      icon: <FaEnvelope className="text-base" />,
    },
  ];

  return (
    <footer className="bg-[#1A1A1A] border-t border-white/10 pt-16 pb-8 px-6 md:px-16 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        
        {/* Brand & About */}
        <div className="flex flex-col space-y-4">
          <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-orange-400 tracking-wider">
            SAURABH.
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            A Computer Science Engineer specializing in Full Stack Development. Building clean, responsive, and robust web applications.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-bold text-white mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#home" className="hover:text-[#FF6B00] transition-colors duration-300">Home</a></li>
            <li><a href="#skills" className="hover:text-[#FF6B00] transition-colors duration-300">Skills</a></li>
            <li><a href="#projects" className="hover:text-[#FF6B00] transition-colors duration-300">Projects</a></li>
            <li><a href="#education" className="hover:text-[#FF6B00] transition-colors duration-300">Education</a></li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-bold text-white mb-2">Connect</h3>
          <a 
            href="mailto:saurabh061singh@gmail.com" 
            className="text-sm text-gray-400 hover:text-[#FF6B00] transition-colors duration-300 w-fit"
          >
            saurabh061singh@gmail.com
          </a>
          <div className="flex space-x-4 pt-2">
            {socialLinks.map((social) => (
              <a 
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#121212] border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#FF6B00] hover:border-[#FF6B00] hover:shadow-[0_0_10px_rgba(255,107,0,0.5)] transition-all duration-300 transform hover:-translate-y-1"
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Saurabh Singh. All rights reserved.</p>
        <p className="mt-2 md:mt-0">
          Designed with <span className="text-[#FF6B00]">♥</span> in React & Tailwind
        </p>
      </div>
    </footer>
  );
};

export default Footer;