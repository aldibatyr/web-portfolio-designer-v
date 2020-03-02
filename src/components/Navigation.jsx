import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import '../styles/Navigation.scss';

const Navigation = () => {
  return (
    <nav className="navigation">
      <Logo />
      <div className="links-wrapper">
        <div className="link-box">
          <Link to="/about">ABOUT</Link>
          <span className="underline"></span>
        </div>
        <div className="link-box">
          <Link to="/contact">CONTACT</Link>
          <span className="underline"></span>
        </div>
      </div>
    </nav>
  )
}

export default Navigation;