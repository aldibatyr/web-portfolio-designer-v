import React, {useState, useLayoutEffect, useRef} from 'react'
import SideTag from './SideTag'
import { Row, Col, Container } from 'react-bootstrap'
import BAO from '../Assets/BAO-almaty-image.jpg'
import LA from '../Assets/los-angeles.jpg'
import Wireframe from '../Assets/wireframes-sketch-image.jpg'

const About = () => {
  const [divHeight, setDivHeight] = useState(null)
  const ref = useRef(null)
  useLayoutEffect(() => {
    setDivHeight(ref.current.clientHeight)
  }, [divHeight])
  console.log(divHeight)
  return (
    <section ref={ref} className="About" id="about">
      <SideTag height={divHeight} name="about" side="left" />
      <Container className="About-container">
        <Row className="About-main-section">
          <Col md={6} lg={4} xs={12} className="About-text">
            <div className="Technologies">
              <p>I specialize in REACT, GSAP, SCROLLMAGIC, RESPONSIVE WEB DESIGN, NODEJS, EXPRESS, POSTGRESQL.</p>
            </div>
            <div className="Personal-info">
              <p>
                I am also fluent in 3 spoken languages: KAZAKH, RUSSIAN, AND ENGLISH.
              </p>
            </div>
            <div className="Personal-info-big">
              <div className="Text-one">
                <p>For the past 8 years I have lived in Los Angeles, CA.</p>
                <p>I grew up in Almaty, Kazakhstan.</p>
                <p>I love front end development, promoting my vision, and creating styles.</p>
              </div>
              <div className="Text-two">
                <p>I love designing user interfaces.</p>
                <p>My daily routine consists of consuming information about technology and design, then applying the concepts in code.</p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={8} className="About-images">
            <div className="image-wrapper top">
              <div className="vertical image">
                <img src={BAO} alt="Big Almaty Lake" />
              </div>
              <div className="horizontal image">
                <img src={LA} alt="los angeles during sunset" />
              </div>
            </div>
            <div className="image-wrapper down">
              <div className="bottom image">
                <img src={Wireframe} alt="" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About;