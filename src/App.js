import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import About from './component/About';
import Banner from './component/Banner';
import Howitworks from './component/Howitworks';
import Roadmap from './component/Roadmap';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Service from './component/Services';
import Faq from './component/Faq';
import P404 from './component/P404';

function App() {
  return (
    <div className='bg-black overflow-hidden'>
      <Router>
        {/* Navbar is always visible on all pages */}
        <Navbar />

        <Routes>
          {/* Route for the P404 page */}

          <Route path="/p404" element={
            <div>
              {/* Only show P404 page content */}
              <P404 />

              {/* Footer should also be visible */}
              <Footer />
            </div>
          } />

          {/* Default route - show all sections */}
          <Route path="/" element={
            <div>
              <Banner />
              <div className='md:px-12 p-2'>
                <About />
                <Service />
                <Roadmap />
                <Howitworks />
                <Faq />
                <Contact />
              </div>
              <Footer />
            </div>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
