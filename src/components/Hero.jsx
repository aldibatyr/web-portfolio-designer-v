import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import ModalComponent from './Modal';

const Hero = () => {

  const [show, setShow] = useState(false);
  let firstTextBox = useRef(null);
  let secondTextBox = useRef(null);
  let actionButton = useRef(null);
  let describeText = useRef(null);


  useEffect(() => {
    let tl = gsap.timeline();
    tl
      .from(secondTextBox.current, { duration: 2.5, y: 20, opacity: 0, ease: 'elastic.inOut(1.5, 0.75)' })
      .from(firstTextBox.current, { duration: 2.5, y: 20, opacity: 0, ease: 'elastic.inOut(1.5, 0.75)' }, '-=2.2')
      .from(actionButton.current, { duration: 1.5, scale: 0.5, opacity: 0, ease: 'elastic.inOut(1.2, 1)' }, '-=2')
      .from(describeText.current, { duration: 0.5, y: 100, opacity: 0 }, '-=1')

  }, [])




  // useEffect(() => {
  //   effect
   
  // }, [input])
  return (
    <Container as="section" className="Hero">
      <Row className="Hero-row">
        <Col className="Hero-hello-col" md={6} xs={12}>
          <div ref={firstTextBox} className="Text-box-hero">
            <h1><span>HELLO,</span></h1>
            <h1><span>MY NAME</span></h1>
            <h1><span>IS</span></h1>
            <h1><span className="Red-text">ALDIYAR</span></h1>
          </div>
        </Col>
        <Col className="Hero-I-am-col" md={6} xs={12}>
          <div ref={secondTextBox} className="Text-box-hero">
            <h1><span>I AM</span></h1>
            <h1><span>A</span></h1>
            <h1><span>WEB</span></h1>
            <h1><span className="Red-text">DEVELOPER</span></h1>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="Contact-button-col" xs={12}>
          <div ref={actionButton} className="Contact-button-wrapper">
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
      <Row ref={el => {
        addText = el;
      }} className="add-text-row">
        <Col>
          <div ref={describeText} className="add-text">
            <p>Scroll down to see recent projects</p>
            <div className="chevron-box">
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Hero;