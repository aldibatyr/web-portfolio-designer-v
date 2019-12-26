import React, { useState, useRef, useLayoutEffect } from 'react'
import SideTag from './SideTag'
import { Container, Col, Row } from 'react-bootstrap';

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
            <Row className="3-column-row">
              <Col></Col>
              <Col></Col>
              <Col></Col>
            </Row>
          </Container>
        </div>
      </div>
    </section>
  )
}

export default Skills