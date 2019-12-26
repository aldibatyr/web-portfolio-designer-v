import React, { useState, useRef, useLayoutEffect } from 'react'
import SideTag from './SideTag'
import { Container, Col, Row } from 'react-bootstrap';
import SocialMediaImg from '../Assets/laptop-and-iphone-x-xs.jpg'

const Skills = () => {
  const [height, setHeight] = useState(null);
  const ref = useRef(null);
  useLayoutEffect(() => {
    setHeight(ref.current.clientHeight)
  }, [height])
  console.log('divHeight is', height)
  return (
    <section ref={ref} className="Skills">
      <SideTag zIndex="3" height={height} name="skills" side="right" />
      <div className="Skills-full-screen">
        <div className="Light">
          <div style={{ maxHeight: height }} className="Light-text-wrapper">
            <p>
              THROUGH THE YEARS OF CONSTANT WORK AND SELF IMPROVEMENT I FOUND THAT THE BEST MOTIVATION FOR A PROGRESS IS THE ABILITY TO THINK FREELY AND IMPLEMENT SELF’S VISION.
            </p>
          </div>
        </div>
        <div className="overlay">
          <Container className="Skills-main-content">
            <Row className="Three-column-row">
              <Col className="Social-media-column">
                <div className="Social-media-text">
                  <div className="Social-media-text-box">
                    <p>At Mojo Hookah Lounge, with the help of the most awesome team I have worked with *yet*. We created the YouTube channel that is constantly growing. You can check it by following the link:</p>
                    <div className="Youtube-link">
                      <a href="https://www.youtube.com/channel/UCtK5rxP5E-FMU9LFpT9S4Rg">YouTube</a>
                      <span className="underline"></span>
                    </div>
                    <p>I learned to express my thoughts on camera, organize the projects, and create content.</p>
                    <p>Managerial skills were also obtained vwhile at Mojo Hookah Lounge.</p>
                  </div>
                  <div className="Social-media-text-box-back"></div>
                </div>
                <span className='Pointer'></span>
                <div className="Social-media-image-box">
                  <div className="image">
                    <div className="Left-text"><h3>MANAGERIAL SKILLS</h3></div>
                    <div className="Right-text"><h3>CONTENT CREATION</h3></div>
                    <div className="Bottom-text"><h3>SOCIAL</h3><h3>MEDIA</h3></div>
                    <img src={SocialMediaImg} alt="iphone x or xs or xs max on a desktop next to Macbook"/>
                  </div>
                </div>
              </Col>
              <Col className="Form-and-animations-column"></Col>
              <Col className="Work-ethics-column"></Col>
            </Row>
          </Container>
        </div>
      </div>
    </section>
  )
}

export default Skills