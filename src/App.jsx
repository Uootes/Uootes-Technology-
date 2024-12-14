import Navbar from './component/Navbar';
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

export default App;
