import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { Container, Row, Col } from 'react-bootstrap';
import ModalComponent from '../components/Modal';


const About = () => {

  const [show, setShow] = useState(false);

  let tl = gsap.timeline();
  useEffect(() => {
    tl
      .fromTo('.spotlight', 0.5, {scale: 0}, {scale: 1} )
      .to('.spotlight', 2 ,{ x: 220, ease: 'power4.inOut'}, '-=0.2')
      .to('.spotlight', 0.5, {scale: 0}, '-=0.2')
      .to('.overlay-animation', 1, {y: '-100vh', ease: 'power4.inOut'})
  }, [])

  return (
    <>
    <div className="overlay-animation">
        <div className="spotlight">

        </div>
        <div className="animation-box">
          <span>About Me</span>

        </div>
      </div>
    <Container style={{marginBottom: '100px'}}>
      <Row>
        <div className="heading">
          <h2>1994-2001</h2>
          <div className="underline"></div>
        </div>
      </Row>
      <Row>
        <Col xs={12} md={5}>
          <div className="text-wrapper">
            <div className="text-card">
              <h1>Arrival</h1>
              <div className="divider"></div>
              <p>
                I was born in Almaty, Kazakhstan in 1994 to a family of 2 lovely people. I was growing attended kindergarten and socialized. Just a regular good old childhood.
              </p>
              <em>*Starts reminiscing and wiping tears*</em>
            </div>
          </div>
        </Col>
        <Col>
        </Col>
      </Row>
      <Row>
        <div className="heading">
          <h2>2001-2011</h2>
          <div className="underline"></div>
        </div>
      </Row>
      <Row>
        <Col>
        </Col>
        <Col xs={12} md={5}>
          <div className="text-card">
            <h1>School Years</h1>
            <div className="divider"></div>
            <p>
              This is where the fun part begins. September 1st, 2001. 1st class (*called grade in US), smiles, laughter, smell of the future, and realization that next 11 years (10 years in my case) are going to be great and full of knowledge.</p>

            <p>Here I got influenced by natural sciences, especially Physics. It was kinda my jam during the high school years. I was also great with computers and created couple projects using Delphi.
              </p>
            <em>*Erupts in tears and whips out old photo album.*</em>
          </div>
        </Col>
      </Row>
      <Row>
        <div className="heading">
          <h2>2012-2017</h2>
          <div className="underline"></div>
        </div>
      </Row>
      <Row>
        <Col xs={12} md={5}>
          <div className="text-card">
            <h1>College Life</h1>
            <div className="divider"></div>
            <p>July 2012. After graduating school it was time for me to leave my nest, spread the wings, and fly off towards the future. I decided to pursue a Major in Business Administration and Marketing.</p>
            <p>California State University, Northridge was a school of my choice for my Bachelor's Degree. I received a great experience and tasted the life away from home and formed my personality.</p>
            <p>In May 2017 I graduated with the degree in Marketing and set my sails back home to apply all my knowledge! </p>
            <em>*Excited facial expression*</em>
          </div>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <div className="heading">
          <h2>2017-2019</h2>
          <div className="underline"></div>
        </div>
      </Row>
      <Row>
        <Col>
        </Col>
        <Col xs={12} md={5}>
          <div className="text-card">
            <h1>Career</h1>
            <div className="divider"></div>
            <p>
              When you study abroad, life gives you some perks when you return back home. You get job offers right off the plane, and everyone wants to work with you.
            </p>
            <p>
              <b>GOODVIBES AGENCY</b>
            </p>
            <p>We built online presence and marketing strategies for local businesses in Almaty. I was assigned to a team of 5 where we implemented most adventurous solutions to a market's needs. It was fun times, but I always wanted to be within a tech industry so I took a leap.</p>
            <p>
              <b>RybProm</b>
            </p>
            <p>
              Me and my team built User Interface for an internal in-house developed interface for tracking orders and communication with customers, suppliers, and management.
              The product was a commercial success leading to 15% increase in efficiency rate.
            </p>
            <p>
              <b>QAMALLADIN MEDIA</b>
            </p>
            <p>
              Shortly after my internship was over I got in QAMALLADIN MEDIA as a front-end web developer and was responsible for building landing pages for e-commerce stores using React, and Gatsby in particular. I was also involved in designing of Soyleu App which is a mobile application for learning kazakh language.
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <div className="heading">
          <h2>2019-Present</h2>
          <div className="underline"></div>
        </div>
      </Row>
      <Row>
        <Col xs={12} md={5}>
          <div className="text-card">
            <h1>I'm going, going back, back to Cali, Cali</h1>
            <div className="divider"></div>
            <p>
              After many sleepless nights of contemplating and weighting options, I pulled a trigger and moved back to the US.

            </p>
            <p>
              On April 2019 I decided to solidify my knowledge in Web Development and learn how companies in US do the development. and I signed up for a Thinkful's full time web development program. I learned a lot of cool new stuff and ready to apply my accumulated knowledge at a new position somewhere here in US.
            </p>
          </div>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <div className="heading">
          <h2>So Why Me?</h2>
          <div className="underline"></div>
        </div>
      </Row>
      <Row>
        <Col xs={12} md={5}>
          <div className="text-card">
            <h1>Background</h1>
            <div className="divider"></div>
            <p>I am 25 years old now. I am young but have seen a thing or two. I am relatable if you have ever followed your dreams. I have a world in front of me and it is for grabs and I feel it.</p>
            <p>I interact with people on a daily basis. This means that I would be able to become a part of a team at no time.</p>
            <p>Being from other culture helps me to look at things different. As much as I love to learn about other cultures, I believe that I can bring another point of view.</p>
            <h1>Personality</h1>
            <p>I think I described who I am and where it leads me clearly. But, as all things there are, words cannot transfer the whole picture. So let's talk.</p>
            <h1>Dedication</h1>
            <p>Having seen a lot of things, I am dedicated to perform at the best possible state. I once promised myself to make a living in a new environment and up to this day doing my best to fulfill this promise</p>
          </div>
        </Col>
        <Col xs={12} md={7}>
          <div className="text-card">
            <h1>Tech I know</h1>
            <Row>
              <Col xs={6}>
                <h2>Front End</h2>
                <ul>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>GSAP</li>
                  <li>Gatsby</li>
                  <li>CMS</li>
                </ul>
              </Col>
              <Col>
                <h2>Back End</h2>
                <ul>
                  <li>Node</li>
                  <li>Express</li>
                  <li>RESTful API creation</li>
                  <li>JWT authentication</li>
                  <li>PostgreSQL</li>
                  <li>MongoDB</li>
                  <li>Heroku</li>
                </ul>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <Row>
        <div className="Contact-button-wrapper">
          <button onClick={() => setShow(true)} className="Contact-button">
            <div className="Contact-button-text">
              <p><b>contact</b></p>
            </div>
            <div className="Contact-button-arrow"><span className="Arrow-body"></span><span className="Arrow-triangle"></span></div>
          </button>
        </div>
        <ModalComponent
          show={show}
          onHide={() => setShow(false)}
        />
      </Row>
    </Container>
    </>
  )
}

export default About;
