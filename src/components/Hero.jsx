import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import ModalComponent from "./Modal";
import { useState } from "react";
import gsap from "gsap";
import manLookingUp from "../Assets/manLookingUp.png";
import noHandLady from "../Assets/noHandLady.png";
import manThinking from "../Assets/manThinking.png";
import "../styles/Hero.scss";
import { motion, useViewportScroll } from "framer-motion";

const Hero = () => {
  const creativeContainer = useRef(null);
  const [show, setShow] = useState(false);

  const { scrollY } = useViewportScroll();
  let tl = gsap.timeline();

  const handleMouseMove = (e) => {
    parallax(e, ".circleYellow", -30);
    parallax(e, ".circlePurple", 20);
    parallax(e, ".circleBlue", -50);
    parallax(e, ".circleGreen", 100);
    parallax(e, ".circleMalina", -80);
  };

  const parallax = (e, target, movement) => {
    let parent = creativeContainer.current.getBoundingClientRect();
    let relX = e.pageX - parent.left;
    let relY = e.pageY - parent.top;

    gsap.to(target, 1, {
      x: ((relX - parent.width / 2) / parent.width) * movement,
      y: ((relY - parent.height / 2) / parent.height) * movement,
    });
  };

  useEffect(() => {
    tl.from(".h1-animate", 1, { opacity: 0, y: 40, ease: "power4.out" }, "+=4")
      .from(".h1-animate", 0.5, { scale: 1.1 }, "-=0.8")
      .from(
        ".h2-animate",
        1,
        { opacity: 0, y: -40, scale: 0.8, ease: "power4.out" },
        "-=0.7"
      );
  }, []);

  return (
    <Container as="section" className="Hero">
      <Row className="Hero-row">
        <Col className="Hero-hello-col" xs={12} md={{ span: 6 }}>
          <h1 className="h1-animate">Hello, my name is Aldiyar.</h1>
          <h2 className="Red-text h2-animate">I build stuff online.</h2>
          <div className="Contact-button-wrapper">
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 4,
              }}
              onClick={() => setShow(true)}
              className="Contact-button"
            >
              <div className="Contact-button-text">
                <p>
                  <b>contact</b>
                </p>
              </div>
              <div className="Contact-button-arrow">
                <span className="Arrow-body"></span>
                <span className="Arrow-triangle"></span>
              </div>
            </motion.button>
          </div>
        </Col>
        <Col>
          <div
            onMouseMove={(e) => handleMouseMove(e)}
            ref={creativeContainer}
            className="creativeContainer"
          >
            <motion.div
              className="circleYellow"
              initial={{ scale: 0, x: 100 }}
              animate={scrollY > 100 ? { y: 1000 } : { x: 0, scale: 1 }}
              transition={{
                ease: "backInOut",
                delay: 4,
                duration: 0.9,
              }}
            >
              <img src={manLookingUp} alt="statue of a man looking up" />
            </motion.div>
            <motion.div
              initial={{ scale: 0, y: 30 }}
              animate={{ y: 0, scale: 1 }}
              transition={{
                ease: "backInOut",
                delay: 4.1,
                duration: 0.9,
              }}
              className="circlePurple"
            >
              <img src={noHandLady} alt="statue of a woman with no hands" />
            </motion.div>
            <motion.div
              initial={{ scale: 0, y: -70 }}
              animate={{ y: 0, scale: 1 }}
              transition={{
                ease: "backInOut",
                delay: 4.2,
                duration: 0.9,
              }}
              className="circleBlue"
            >
              <img src={manThinking} alt="statue of a man thinking" />
            </motion.div>
            <motion.div
              initial={{ scale: 0, x: 30 }}
              animate={{ x: 0, scale: 1 }}
              transition={{
                ease: "backInOut",
                delay: 4.2,
                duration: 0.9,
              }}
              className="circleMalina"
            ></motion.div>
            <motion.div
              initial={{ scale: 0, x: 50 }}
              animate={{ xChannelSelector: 0, scale: 1 }}
              transition={{
                ease: "backInOut",
                delay: 4.15,
                duration: 0.9,
              }}
              className="circleGreen"
            ></motion.div>
          </div>
        </Col>
      </Row>
      <ModalComponent show={show} onHide={() => setShow(false)} />
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
  );
};

export default Hero;
