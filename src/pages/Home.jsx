import React from 'react';
import About from './About';
import Roadmap from './Roadmap';
import Howitworks from './Howitworks';
import Faq from './Faq';
import Contact from './Contact';
import Hero from './Hero';
import Services from './Services';
import Digital from './Digital';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Roadmap />
      <Digital />
      <Howitworks />
      <Faq />
      <Contact />
    </div>
  )
}

export default Home