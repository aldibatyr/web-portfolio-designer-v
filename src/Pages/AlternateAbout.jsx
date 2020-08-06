import React, { useEffect, useLayoutEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useRef } from "react";
import { useState } from "react";
import gsap from "gsap";
import ModalComponent from "../components/Modal";
import lenz from "../Assets/lenz.png";
const AlternateAbout = () => {
  const [show, setShow] = useState(false);
  const colors = ["#d6d680", "#8a36d8", "#128cb1", "#ad0855", "#8cb629"];
  const technologies = [
    "React",
    "GSAP",
    "GatsbyJS",
    "Framer Motion",
    "SwiftUI",
    "Flutter",
    "React Native",
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 4.7,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: { scale: 0 },
    show: { scale: 1 },
  };
  let tl = gsap.timeline();

  useEffect(() => {
    tl.fromTo(".spotlight", 0.5, { scale: 0 }, { scale: 1 })
      .to(".spotlight", 2, { x: 220, ease: "power4.inOut" }, "-=0.2")
      .to(".spotlight", 0.5, { scale: 0 }, "-=0.2")
      .to(".overlay-animation", 1, { y: "-100vh", ease: "power4.inOut" });
  }, []);
  return (
    <>
      <div className="overlay-animation">
        <div className="spotlight"></div>
        <div className="animation-box">
          <span>About Me</span>
        </div>
      </div>
      <Container as="section" style={{ minHeight: "100vh" }}>
        <Row style={{ marginTop: "100px" }}>
          <Col xs={12} md={6}>
            <ImagePlaceholder />
          </Col>
          <Col>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 4.5,
              }}
            >
              <StyledTitleV2>Nice To Meet You</StyledTitleV2>
              <StyledText>
                <b>Well, few words about me.</b>
              </StyledText>
              <StyledText>
                Currently in Los Angeles, born and raised in Almaty, Kazakhstan.
              </StyledText>
              <StyledText>
                I love front-end web development. Want to see my face when I
                code? Hover on the image or tap if you are on mobile device.
                You'll love it!
              </StyledText>
              <StyledText>
                <b>Here is the list of technologies that I use daily.</b>
              </StyledText>
              <StyledList
                // initial={{ opacity: 0 }}
                // animate={{ opacity: 1 }}
                variants={container}
                initial="hidden"
                animate="show"
              >
                {technologies.map((tech, i) => (
                  <StyledElement
                    variants={item}
                    key={i}
                    color={colors[Math.floor(Math.random() * 5)]}
                  >
                    {tech}
                  </StyledElement>
                ))}
              </StyledList>
              <StyledText>
                <b>BTW, you can always find me here</b>
              </StyledText>
              <div className="Contact-button-wrapper">
                <motion.button
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 4.7,
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
            </motion.div>
          </Col>
        </Row>
      </Container>
      <ModalComponent show={show} onHide={() => setShow(false)} />
    </>
  );
};

const StyledTitle = styled(motion.h1)``;

const StyledTitleV2 = styled(motion.h2)``;

const StyledText = styled(motion.p)``;

const ImagePlaceholder = styled(motion.div)`
  height: 60vh;
  width: 100%;
  margin: 0 auto;
  background: #eeeeee;
  border-radius: 10px;
  box-shadow: 6px 6px 16px #d1cdd780, -6px -6px 16px #ffffff80;
`;

const StyledList = styled(motion.ul)`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const StyledElement = styled(motion.li)`
  margin-bottom: 15px;
  padding: 5px 10px;
  background: ${({ color }) => color};
  color: white;
  font-weight: 600;
  border-radius: 6px;
`;

export default AlternateAbout;
