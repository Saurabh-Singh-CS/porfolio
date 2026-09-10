import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Core Languages',
      skills: ['Python', 'SQL', 'HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['Django', 'Django REST', 'NumPy', 'Pandas', 'Matplotlib'],
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'PostgreSQL'],
    },
    {
      title: 'Tools & Platforms',
      skills: ['Git & GitHub', 'VS Code', 'RESTful APIs', 'Power BI', 'MS Excel'],
    },
  ];

  return (
    <section className="w-full py-20 px-6 md:px-16 bg-[#121212] text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16 animate-[fadeIn_1s_ease-out]">
          <h2 className="text-3xl md:text-5xl font-bold tracking-wide">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-orange-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-[#FF6B00] mx-auto mt-4 rounded-full shadow-[0_0_10px_rgba(255,107,0,0.5)]"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-[#1A1A1A] border border-white/5 p-8 rounded-xl hover:border-[#FF6B00]/50 transition-all duration-500 hover:shadow-[0_0_20px_rgba(255,107,0,0.15)] group hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold text-[#FF6B00] mb-6 tracking-wide group-hover:scale-105 transition-transform duration-300 origin-left">
                {category.title}
              </h3>
              
              <ul className="space-y-4">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center text-gray-300 group-hover:text-white transition-colors duration-300">
                    <span className="w-2 h-2 rounded-full bg-gray-600 mr-3 group-hover:bg-[#FF6B00] group-hover:shadow-[0_0_8px_rgba(255,107,0,0.8)] transition-all duration-300"></span>
                    <span className="text-sm md:text-base font-medium tracking-wide">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;