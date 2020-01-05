import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import ModalComponent from './Modal';
import { useState, useRef, useEffect } from 'react';
import {gsap} from 'gsap';

const Hero = () => {

  const [show, setShow] = useState(false);
  const text1 = useRef(null);
  const text2 = useRef(null);
  const buttonEl = useRef(null);
  const addText = useRef(null);


  // useEffect(() => {
  //   effect
   
  // }, [input])
  return (
    <Container as="section" className="Hero">
      <Row className="Hero-row">
        <Col className="Hero-hello-col" md={6} xs={12}>
          <div className="Text-box-hero" ref={el => {
            text2 = el;
          } }>
            <h1><span>HELLO,</span></h1>
            <h1><span>MY NAME</span></h1>
            <h1><span>IS</span></h1>
            <h1><span className="Red-text">ALDIYAR</span></h1>
          </div>
        </Col>
        <Col className="Hero-I-am-col" md={6} xs={12}>
          <div ref={el => {
              text1 = el;
            }} className="Text-box-hero">
            <h1><span>I AM</span></h1>
            <h1><span>A</span></h1>
            <h1><span>WEB</span></h1>
            <h1><span className="Red-text">DEVELOPER</span></h1>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="Contact-button-col" xs={12}>
          <div ref={el => {
            buttonEl = el;
          }} className="Contact-button-wrapper">
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
        onHide={()=> setShow(false)}
      />
      <Row ref={el => {
        addText = el;
      }} className="add-text-row">
        <Col>
          <div className="add-text">
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