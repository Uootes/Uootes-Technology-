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
        <Navbar />
        <Routes>
          <Route path="/userpage" element={<P404 />} /> {/* Add route for UserPage */}
          {/* Other routes */}
        </Routes>
      </Router>

      <Navbar />

      {/* banner section */}
      <div> <Banner /></div>

      {/* other section */}
      <div className='md:px-12 p-2'>
        <About />
        <Service />
        <Roadmap />
        <Howitworks />
        <Faq />
        <Contact />
      </div>

      {/* footer section */}
      <Footer />
    </div>

  );
}

export default App;