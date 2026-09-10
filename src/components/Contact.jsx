import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Yahan MERN backend API call aayegi future mein
    console.log('Form Submitted:', formData);
    alert('Message Sent Successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="w-full py-20 px-6 md:px-16 bg-[#121212] text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16 animate-[fadeIn_1s_ease-out]">
          <h2 className="text-3xl md:text-5xl font-bold tracking-wide">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-orange-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-[#FF6B00] mx-auto mt-4 rounded-full shadow-[0_0_10px_rgba(255,107,0,0.5)]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-[#1A1A1A] p-8 md:p-12 rounded-2xl border border-white/5 shadow-2xl">
          
          {/* Left Side: Contact Info */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Let's Connect</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                I'm currently looking for new opportunities as a Python Full Stack Developer. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-[#121212] rounded-full flex items-center justify-center border border-white/10 group-hover:border-[#FF6B00] group-hover:shadow-[0_0_15px_rgba(255,107,0,0.4)] transition-all duration-300">
                  <span className="text-[#FF6B00] font-bold">@</span>
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wider">Email</p>
                  <p className="text-white font-medium group-hover:text-[#FF6B00] transition-colors duration-300">saurabh061singh@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-[#121212] rounded-full flex items-center justify-center border border-white/10 group-hover:border-[#FF6B00] group-hover:shadow-[0_0_15px_rgba(255,107,0,0.4)] transition-all duration-300">
                  <span className="text-[#FF6B00] font-bold">#</span>
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wider">Phone</p>
                  <p className="text-white font-medium group-hover:text-[#FF6B00] transition-colors duration-300">+91 8085235251</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-400 text-sm font-medium mb-2">Your Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-[#121212] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] transition-all duration-300"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-gray-400 text-sm font-medium mb-2">Your Email</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-[#121212] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] transition-all duration-300"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-gray-400 text-sm font-medium mb-2">Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full bg-[#121212] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] transition-all duration-300 resize-none"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full bg-[#FF6B00] hover:bg-transparent hover:text-[#FF6B00] border border-[#FF6B00] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(255,107,0,0.3)] hover:shadow-[0_0_25px_rgba(255,107,0,0.6)]"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;