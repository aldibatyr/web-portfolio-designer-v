import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Hero = () => {
  return (
    <Container as="section" className="Hero">
      <Row className="Hero-row">
        <Col className="Hero-hello-col" lg={5} xs={12}>
          <div className="Text-box-hello">
            <h1 className="Hello-h1"><span className="Hello-span">HELLO</span></h1>
            <h1 className="My-name-h1"><span className="My-name-span">MY NAME</span></h1>
          </div>
          <div className="Text-box-is">
            <h1 className="Is-h1"><span className="Is-span">IS</span></h1>
          </div>
          <div className="Text-box-Aldiyar">
            <h1 className="Aldiyar-h1"><span className="Aldiyar-span">ALDIYAR</span></h1>
          </div>
        </Col>
        <Col className="Contact-button-col" lg={2} xs={12}>
          <div className="Contact-button-wrapper">
            <button className="Contact-button">
              <div className="Contact-button-text">
                <p><b>contact</b></p>
              </div>

              <div className="Contact-button-arrow"><span className="Arrow-body"></span><span className="Arrow-triangle"></span></div>
            </button>
          </div>
        </Col>
        <Col>
          Three
        </Col>
      </Row>
    </Container>
  )
}

export default Hero;