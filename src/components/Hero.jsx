import React from "react";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "http://www.linkedin.com/in/saurabh-singh-8a1a2b253", // Replace with your LinkedIn profile URL
      icon: <FaLinkedinIn className="text-base" />,
    },
    {
      name: "GitHub",
      url: "https://github.com/Saurabh-Singh-CS", // Replace with your GitHub profile URL
      icon: <FaGithub className="text-base" />,
    },
    {
      name: "Email",
      url: "mailto:saurabh061singh@gmail.com", // Replace with your email address
      icon: <FaEnvelope className="text-base" />,
    },
  ];

  return (
    <section className="w-full min-h-[90vh] flex items-center pt-24 pb-12 px-6 md:px-16 bg-[#121212] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Text Content & Animations */}
        <div className="flex flex-col space-y-6 z-10 animate-[slideInLeft_1s_ease-out]">
          <div className="space-y-1">
            <p className="text-gray-400 text-lg md:text-xl font-medium tracking-wide">
              Hi I am
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
              Saurabh Singh
            </h1>
            <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-orange-400 mt-2 py-2">
              Python Developer
            </h2>
          </div>

          <p className="text-gray-400 max-w-md leading-relaxed text-sm md:text-base">
            Computer Science Engineer specializing in Python Full Stack
            Development. Skilled in building web applications with Django,
            developing RESTful APIs, and working with SQL databases.
          </p>

          {/* Social Icons with Links & Brand Icons */}
          <div className="flex space-x-5 pt-2">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-[#FF6B00] hover:border-[#FF6B00] hover:shadow-[0_0_10px_rgba(255,107,0,0.5)] cursor-pointer transition-all duration-300 transform hover:-translate-y-1"
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-[#FF6B00] hover:bg-transparent hover:text-[#FF6B00] border border-[#FF6B00] text-white px-8 py-3 rounded-md font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(255,107,0,0.3)] hover:shadow-[0_0_25px_rgba(255,107,0,0.6)] transform hover:-translate-y-1">
              Hire Me
            </button>
            <a
              href="/Saurabh_Singh_Resume.pdf"
              download="Saurabh_Singh_Resume.pdf"
              className="inline-block"
            >
              <button className="bg-transparent border border-gray-500 text-gray-300 hover:text-white hover:border-white px-8 py-3 rounded-md font-semibold transition-all duration-300 transform hover:-translate-y-1 w-full">
                Download CV
              </button>
            </a>
          </div>

          {/* Dynamic Stats Based on Resume */}
          <div className="grid grid-cols-3 gap-4 pt-8 mt-4 border-t border-white/10 w-full max-w-md">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-[#FF6B00]">3+</span>
              <span className="text-xs text-gray-400 uppercase tracking-wider mt-1">
                Projects Done
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-[#FF6B00]">10+</span>
              <span className="text-xs text-gray-400 uppercase tracking-wider mt-1">
                Tech Skills
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-[#FF6B00]">3</span>
              <span className="text-xs text-gray-400 uppercase tracking-wider mt-1">
                Certifications
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Profile Image Section */}
        <div className="relative flex justify-center items-center mt-10 md:mt-0 animate-[fadeIn_1.5s_ease-in-out]">
          {/* Background Decorative Circle */}
          <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-[#1A1A1A] rounded-full shadow-[0_0_50px_rgba(0,0,0,0.5)] z-0"></div>

          {/* Image Container */}
          <div className="relative z-10 w-[280px] h-[380px] md:w-[350px] md:h-[480px] overflow-hidden group">
            <img
              src="/profile.jpg"
              alt="Saurabh Singh"
              className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out rounded-b-full rounded-t-[150px]"
            />
            {/* Orange Overlay Glow Effect on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#FF6B00]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-b-full rounded-t-[150px]"></div>
          </div>
        </div>
      </div>

      {/* Add Custom Animation Styles inline for ease of use */}
      <style>{`
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
