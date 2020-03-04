import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import ModalComponent from './Modal';
import { useState } from 'react';
import gsap from 'gsap';

import '../styles/Hero.scss';

const Hero = () => {

  const [show, setShow] = useState(false);

  let tl = gsap.timeline();

  useEffect(() => {
    tl
      .from('.h1-animate', 1, {opacity: 0, y: 40, ease: 'power4.out'}, '+=4')
      .from('.h1-animate', 0.5, {scale: 1.1}, '-=0.8')
      .from('.h2-animate', 1, {opacity: 0, y: -40, scale: 0.8, ease: 'power4.out'}, '-=0.7')
  }, [])

  return (
    <Container as="section" className="Hero">
      <Row className="Hero-row">
        <Col className="Hero-hello-col" xs={12} md={{span: 10, offset: 1}}>
          <h1 className='h1-animate'>Hello, my name is Aldiyar.</h1>
          <h2 className="Red-text h2-animate">I build stuff online.</h2>
          <div className="Contact-button-wrapper">
            <button onClick={() => setShow(true)} className="Contact-button">
              <div className="Contact-button-text">
                <p><b>contact</b></p>
              </div>
              <div className="Contact-button-arrow"><span className="Arrow-body"></span><span className="Arrow-triangle"></span></div>
            </button>
          </div>
        </Col>
      </Row>
      <ModalComponent
        show={show}
        onHide={() => setShow(false)}
      />
      <Row className="add-text-row">
        <Col>
          <div className="add-text">
            <p>Scroll down to see recent projects</p>
            <a href="#websites">
              <div className="chevron-box">
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Hero;