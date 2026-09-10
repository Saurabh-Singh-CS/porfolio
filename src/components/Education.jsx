import React from 'react';

const Education = () => {
  const educationData = [
    {
      degree: 'B.Tech in Computer Science and Engineering',
      institution: 'Gyan Ganga Institute of Technology and Sciences, Jabalpur',
      duration: '2022 - 2026',
      score: 'CGPA: 7.4/10',
    },
    {
      degree: 'Higher Secondary School (Class XII)',
      institution: 'Madhya Pradesh Board of Secondary Education, Satna',
      duration: '2022',
      score: '74%',
    },
    {
      degree: 'High School (Class X)',
      institution: 'Madhya Pradesh Board of Secondary Education, Satna',
      duration: '2020',
      score: '90%',
    }
  ];

  const certifications = [
    {
      title: 'Python Essentials 1 & 2',
      issuer: 'Cisco Networking Academy',
      description: 'Fundamentals of Python, OOP concepts, data types, and problem-solving.',
    },
    {
      title: 'Database Programming with SQL',
      issuer: 'Oracle Academy',
      description: 'Proficiency in SQL fundamentals and relational database concepts.',
    },
    {
      title: 'Cybersecurity Essentials',
      issuer: 'CISCO',
      description: 'Core cybersecurity concepts, threat analysis, and defense techniques.',
    }
  ];

  return (
    <section className="w-full py-20 px-6 md:px-16 bg-[#121212] text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Education Timeline */}
        <div className="animate-[slideInLeft_1s_ease-out]">
          <h2 className="text-3xl font-bold mb-10 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-orange-400">
            Education
          </h2>
          <div className="space-y-8 border-l-2 border-[#FF6B00]/30 ml-3">
            {educationData.map((edu, index) => (
              <div key={index} className="relative pl-8 group hover:-translate-y-1 transition-transform duration-300">
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#121212] border-2 border-[#FF6B00] group-hover:bg-[#FF6B00] group-hover:shadow-[0_0_10px_rgba(255,107,0,0.8)] transition-all duration-300"></div>
                
                <div className="bg-[#1A1A1A] p-6 rounded-xl border border-white/5 group-hover:border-[#FF6B00]/50 transition-colors duration-300">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#FF6B00] transition-colors duration-300">{edu.degree}</h3>
                  <p className="text-gray-400 text-sm mt-2">{edu.institution}</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-xs font-semibold text-[#FF6B00] bg-[#FF6B00]/10 px-3 py-1 rounded-full">{edu.duration}</span>
                    <span className="text-sm font-medium text-gray-300">{edu.score}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="animate-[fadeIn_1.5s_ease-in-out]">
          <h2 className="text-3xl font-bold mb-10 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-orange-400">
            Certifications
          </h2>
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="bg-[#1A1A1A] p-6 rounded-xl border border-white/5 hover:border-[#FF6B00]/50 transition-all duration-500 hover:shadow-[0_0_20px_rgba(255,107,0,0.15)] group flex flex-col justify-center"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-[#FF6B00] transition-colors duration-300">{cert.title}</h3>
                  <span className="text-xs font-semibold text-[#FF6B00] border border-[#FF6B00]/30 px-2 py-1 rounded-md ml-2 text-right shrink-0">{cert.issuer}</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;