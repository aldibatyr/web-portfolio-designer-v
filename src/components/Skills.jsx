import React, { useState, useRef, useLayoutEffect } from 'react'
import SideTag from './SideTag'
import { Container, Col, Row } from 'react-bootstrap';
import SocialMediaImg from '../Assets/laptop-and-iphone-x-xs.jpg';
import WorkEthics from '../Assets/business-strategic-planning.jpg';
import ProductsOnDesk from '../Assets/apple-products-on-desk-web-development.jpg';
import IphoneImage from '../Assets/iphone-x-xs-11-pro-max-on the-desk.jpg';
import Form from './Form';


const Skills = () => {
  const [height, setHeight] = useState(null);
  const ref = useRef(null);
  useLayoutEffect(() => {
    setHeight(ref.current.clientHeight)
  }, [height])
  console.log('divHeight is', height)
  return (
    <section ref={ref} className="Skills" id="skills">
      <SideTag zIndex="3" height={height} name="skills" side="right" />
      <div className="Skills-full-screen">
        <div className="Light">
          <div className="Light-text-wrapper">
            <p>
              THROUGH THE YEARS OF CONSTANT WORK AND SELF IMPROVEMENT I FOUND THAT THE BEST MOTIVATION FOR A PROGRESS IS THE ABILITY TO THINK FREELY AND IMPLEMENT SELF’S VISION.
              THROUGH THE YEARS OF CONSTANT WORK AND SELF IMPROVEMENT I FOUND THAT THE BEST MOTIVATION FOR A PROGRESS IS THE ABILITY TO THINK FREELY AND IMPLEMENT SELF’S VISION.
              THROUGH THE YEARS OF CONSTANT WORK AND SELF IMPROVEMENT I FOUND THAT THE BEST MOTIVATION FOR A PROGRESS IS THE ABILITY TO THINK FREELY AND IMPLEMENT SELF’S VISION.
              THROUGH THE YEARS OF CONSTANT WORK AND SELF IMPROVEMENT I FOUND THAT THE BEST MOTIVATION FOR A PROGRESS IS THE ABILITY TO THINK FREELY AND IMPLEMENT SELF’S VISION.
              THROUGH THE YEARS OF CONSTANT WORK AND SELF IMPROVEMENT I FOUND THAT THE BEST MOTIVATION FOR A PROGRESS IS THE ABILITY TO THINK FREELY AND IMPLEMENT SELF’S VISION.
              THROUGH THE YEARS OF CONSTANT WORK AND SELF IMPROVEMENT I FOUND THAT THE BEST MOTIVATION FOR A PROGRESS IS THE ABILITY TO THINK FREELY AND IMPLEMENT SELF’S VISION.
            </p>
          </div>
        </div>
        <div className="overlay">
          <Container className="Skills-main-content">
            <Row className="Three-column-row">
              <Col xs={12} lg={4} className="Social-media-column">
                <div className="Social-media-text">
                  <div className="Text-box">
                    <p>At Mojo Hookah Lounge, with the help of the most awesome team I have worked with *yet*. We created the YouTube channel that is constantly growing. You can check it by following the link:</p>
                    <div className="Youtube-link">
                      <a href="https://www.youtube.com/channel/UCtK5rxP5E-FMU9LFpT9S4Rg">YouTube</a>
                      <span className="underline"></span>
                    </div>
                    <p>I learned to express my thoughts on camera, organize the projects, and create content.</p>
                    <p>Managerial skills were also obtained vwhile at Mojo Hookah Lounge.</p>
                  </div>
                </div>
                <span className='Pointer' ></span>
                <div className="Social-media-image-box">
                  <div className="image">
                    <span className="Left-text"><h3>MANAGERIAL SKILLS</h3></span>
                    <div className="Right-text"><h3>CONTENT CREATION</h3></div>
                    <div className="Bottom-text"><h3>SOCIAL</h3><h3>MEDIA</h3></div>
                    <img src={SocialMediaImg} alt="iphone x or xs or xs max on a desktop next to Macbook" />
                  </div>
                </div>
              </Col>
              <Col xs={12} lg={4} className="Form-and-animations-column">
                <div className="Form-container">
                  <div className="Left-text"><h3>INTERACTIVE FORMS</h3></div>
                  <div className="Right-text"><h3>ANIMATIONS</h3></div>
                  <Form />
                </div>

                <span className='Pointer different' ></span>
                <div className="Form-and-animations-text-box">
                  <p>Animations and Forms are necessity in todays web development. We see the forms all the time but never pay attention how important they are. </p>
                  <p>Cleverly set up forms can land a huge success. Every interaction should feel native and tangible.</p>
                  <p>Animations come in handy for this application.</p>
                </div>
              </Col>
              <Col xs={12} lg={4} className="Work-ethics-column">
                <div className="Work-ethics-image-wrapper">
                  <div className="Left-text"><h3>WORK ETHICS</h3></div>
                  <div className="Right-text"><h3>DRIVE</h3></div>
                  <div className="Work-ethics-image">
                    <img src={WorkEthics} alt="two persons discussing the strategy of a business growth" />
                  </div>
                </div>

                <span className='Pointer different' ></span>
                <div className="Work-ethics-text-box">
                  <p>Work ethics are a great addition to the skill set of a person. Humbleness and dedication to do the best drive better results.</p>
                </div>
              </Col>
            </Row>
            <Row className='Two-column-row'>
              <Col xs={12} lg={6} className="Right-column">
                <div className="Image-wrapper">
                  <div className="Top-text"><h3>mobile first design</h3></div>
                  <div className="Bottom-text"><h3>responsive design</h3></div>
                  <div className="Image">
                    <img src={ProductsOnDesk} alt="apple products on the desk"/>
                  </div>
                </div>
              </Col>
              <Col xs={12} lg={6} className="Left-column">
                <div className="text-box">
                  <p>Todays media consumption medium calls for a solution that is not only informative, but looks great on multiple devices. By implementing responsive and mobile first design we are able to achieve a better conversion rate.</p>
                </div>
              </Col>
            </Row>
            <Row className="Two-column-row">
              <Col xs={12} lg={6} className="Left-column">
                <div className="text-box">
                  <p>I am currently working on mobile development skills by creating hybrid and PWA</p>
                </div>
              </Col>
              <Col xs={12} lg={6} className="Right-column">
                <div className="Image-wrapper">
                  <div className="Bottom-text"><h3>mobile applications</h3></div>
                  <div className="Image">
                    <img src={IphoneImage} alt="iphone on desk and keyboard on the background"/>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </section>
  )
}


export default Skills;