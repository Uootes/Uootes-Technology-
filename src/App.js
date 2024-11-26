import React from 'react';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './component/Navbar';
import About from './component/About';
import Banner from './component/Banner';
import Howitworks from './component/Howitworks';
import Roadmap from './component/Roadmap/Roadmap';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Service from './component/services/Services';
import Faq from './component/Faq';

function App() {
  return (

    <div className='bg-black overflow-hidden'>
      <Navbar />
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

  );
}

export default App;