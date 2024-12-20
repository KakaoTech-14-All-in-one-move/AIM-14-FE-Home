import React from 'react';
import Hero from '../components/sections/Hero.tsx';
import GetStarted from '../components/sections/GetStarted.tsx';
import MainFeatures from '../components/sections/MainFeatures.tsx';
import BlogSlider from '../components/sections/BlogSlider.tsx';

const Home = () => {
  return (
    <div> 
      <Hero />
      <MainFeatures />
      <GetStarted />
      <BlogSlider />
    </div>
  );
};

export default Home; 