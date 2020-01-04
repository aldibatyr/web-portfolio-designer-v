import React from 'react';
import {Link} from 'react-router-dom'
import Logo from './Logo';

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="link-box">
        <Link to="/info">INFO</Link>
        <span className="underline"></span>
      </div>
      <Logo/>
      <div className="link-box">
        <Link to="/contact">CONTACT</Link>
        <span className="underline"></span>
      </div>
    </nav>
  )
}

export default Navigation;