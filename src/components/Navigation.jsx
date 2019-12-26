import React, { useState } from 'react';
import Logo from './Logo';

const Navigation = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <>
      <div className='Navigation-wrapper d-none d-lg-block'>
        <nav role='navigation' className='Navigation'>
          <a className="Link-to-section" href="#about">
            <span className="text">about</span>
            <span className="overlay"></span>
          </a>
          <a className="Link-to-section" href="#skills">
            <span className="text">skills</span>
            <span className="overlay"></span>
          </a>
          <a className="Link-to-section" href="#projects">
            <span className="text">projects</span>
            <span className="overlay"></span>
          </a>
          <a className="Link-to-section" href="#contact">
            <span className="text">contact</span>
            <span className="overlay"></span>
          </a>
        </nav>
      </div>
      <div className="Navigation-smaller-than-laptop-box d-lg-none">
        <nav role="navigation" className="Navigation-smaller-than-laptop-nav">
          <Logo />
          <button onClick = {e => setDrawerOpen(!drawerOpen)} className="hamburger">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
          </button>
        </nav>
      </div>
    </>
  )
}

export default Navigation;