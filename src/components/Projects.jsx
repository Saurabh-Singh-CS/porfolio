import React from 'react';

const Projects = () => {
  const projectData = [
    {
      title: 'Vehicle Rental',
      description: 'A vehicle rental platform with booking, document verification, and role-based access. Designed using the Incremental RAD Model, BPMN, and UML diagrams.',
      techStack: ['HTML', 'CSS', 'JavaScript', 'ASP.NET', 'MySQL'],
    },
    {
      title: 'File Sharing',
      description: 'Mobile application enabling secure file transfers without login via QR codes, PIN, Bluetooth, and Wi-Fi. Features session handling and cross-platform support for large files.',
      techStack: ['Mobile App', 'QR/PIN', 'Bluetooth', 'Wi-Fi'],
    },
    {
      title: 'E-Waste Recycler',
      description: 'Platform to simplify selling e-waste, featuring an ML system for self-detection through images and a Credit Points-based reward system for sellers.',
      techStack: ['Web Tech', 'Machine Learning', 'Credit System'],
    }
  ];

  return (
    <section className="w-full py-20 px-6 md:px-16 bg-[#121212] text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16 animate-[fadeIn_1s_ease-out]">
          <h2 className="text-3xl md:text-5xl font-bold tracking-wide">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-orange-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-[#FF6B00] mx-auto mt-4 rounded-full shadow-[0_0_10px_rgba(255,107,0,0.5)]"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <div 
              key={index}
              className="bg-[#1A1A1A] border border-white/5 p-8 rounded-xl hover:border-[#FF6B00]/70 transition-all duration-500 hover:shadow-[0_0_25px_rgba(255,107,0,0.2)] group flex flex-col justify-between h-full transform hover:-translate-y-2"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#FF6B00] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.techStack.map((tech, i) => (
                  <span 
                    key={i} 
                    className="text-xs font-medium text-[#FF6B00] bg-[#FF6B00]/10 px-3 py-1 rounded-full border border-[#FF6B00]/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;