import React from 'react';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import About from './component/About';
import Banner from './component/Banner';
import Howitworks from './component/Howitworks';
import Roadmap from './component/Roadmap/Roadmap';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Service from './component/services/Services';
import Faq from './component/Faq';
import Login from './component/Login&signup/Login';

function App() {
  return (

    <div className='bg-black overflow-hidden'>
      {/* browser router */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* Add more routes as needed */}
        </Routes>
      </BrowserRouter>
      {/* <Navbar /> */}

      {/* banner section */}
      <Banner />

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