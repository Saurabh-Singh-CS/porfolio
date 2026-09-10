import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#121212] font-sans">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
      
      {/* Simple Footer directly in App.jsx */}
      <footer className="text-center py-6 text-gray-500 text-sm border-t border-white/5">
        © {new Date().getFullYear()} Saurabh Singh. All rights reserved.
      </footer>
    </div>
  );
}

export default App;