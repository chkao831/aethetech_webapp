import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import OurTeam from './components/pages/OurTeam';
import CaseStudies from './components/pages/CaseStudies';
import Resource from './components/pages/Resource';
import Contact from './components/pages/Contact';

function App() {
  // Set document language to English
  React.useEffect(() => {
    document.documentElement.lang = 'en';
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/resource" element={<Resource />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App; 