import  React  from 'react';

const Navigation = () => {
  return (
    <div className='Navigation-wrapper'>
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
  )
}

export default Navigation;