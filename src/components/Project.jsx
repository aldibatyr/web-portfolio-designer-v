import React, { useRef } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useIntersection } from 'react-use';
import gsap from 'gsap'


const Project = ({ props }) => {

  const elementClassName = props.order;
  const sectionRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.2
  });

  const fadeIn = element => {
    gsap.to(element, 1, {
      opacity: 1,
      y: -60,
      ease: "power4.out",
      stagger: {
        amount: 0.3
      }
    });
  };

  const fadeOut = element => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -20,
      ease: "power4.out"
    });
  };

  // intersection && intersection.intersectionRatio < 0.2
  //   ? fadeOut(elementClassName)
  //   : fadeIn(elementClassName);

  return (
    <Row ref={sectionRef} className="Project-row" id={props.order}>
      <Col className={elementClassName} lg={5}>
        <div className="technologies-wrapper">
          <div className="technologies-box">
            <div className="front-end">
              <div className="title">
                <h4>FRONT END</h4>
              </div>
              <ul>
                {props.technologies.frontEnd.map((tech, i) => <li key={i}>{tech}</li>)}
              </ul>
            </div>
            <div className="back-end">
              <div className="title">
                <h4>BACK END</h4>
              </div>
              <ul>
                {props.technologies.backEnd.map((tech, i) => <li key={i}>{tech}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </Col>
      <Col className={elementClassName} lg={7}>
        <div className="Project">
          <div id="one" className="Title">
            <h1><b>{props.name}</b></h1>
          </div>
          <div id="one" className="divider">
            <span className="line"></span>
          </div>
          <div id="one" className="description-wrapper">
            <div className="description">
              <p>{props.description}</p>
            </div>
          </div>
          <div id="one" className="links-to-repos">
            <div className="link-wrapper">
              <div className="front-end">
                <a href={props.frontEndRepo} rel="noopener noreferrer" target="_blank">
                  <span>Front</span>
                  <span>End</span>
                  <span>Repo</span>
                </a>
              </div>
            </div>
            <div className="divider-vertical"></div>
            <div className="link-wrapper">
              <div className="back-end">
                <a href={props.backEndRepo} rel="noopener noreferrer" target="_blank">
                  <span>Back</span>
                  <span>End</span>
                  <span>Repo</span>
                </a>
              </div>
            </div>
            <div className="divider-vertical"></div>
            <div className="link-wrapper">
              <div className="live-example">
                <a href={props.liveDemo} rel="noopener noreferrer" target="_blank">
                  <span>Live</span>
                  <span>Example</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  )
}

export default Project;