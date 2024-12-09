import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Login from './component/Login';
import Signup from './component/Signup';
import Home from './pages/Home';
import About from './pages/About';
import Roadmap from './pages/Roadmap';
import Howitworks from './pages/Howitworks';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import Hero from './pages/Hero';
import Services from './pages/Services';
import Digital from './pages/Digital';
import Footer from './component/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
      <Hero />
      <About />
      <Services />
      <Roadmap />
      <Digital />
      <Howitworks />
      <Faq />
      <Contact />
      <Footer />    
    </div>
  );
};

export default App
