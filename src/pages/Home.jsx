import React from 'react';
import Hero from '../components/Hero';
import Work from '../components/Work';
import Skills from '../components/Skills';
import About from '../pages/About';
import Contact from '../pages/Contact';

const Home = () => {
  return (
    <div>
      <Hero />
      <Work />
      <Skills />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
