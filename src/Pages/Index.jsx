import React from 'react';
import Hero from '../components/Hero';
import Stitch from '../components/Stitch';
import Projects from '../components/Projects';

const Index = () => {
  return (
    <>
      <Hero />
      <Stitch name="projects" />
      <Projects />
    </>
  )
}

export default Index;