import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import styled from "styled-components";
import gsap from "gsap";
import ModalComponent from "../components/Modal";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 4,
      staggerChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

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
      <Container
        as="section"
        style={{ minHeight: "100vh", fontFamily: "Poppins" }}
      >
        <Row style={{ marginTop: "100px" }}>
          <Col xs={12} md={6}>
            <LargeTextContainer
              variants={container}
              initial="hidden"
              animate="show"
            >
              <motion.span variants={item}>
                I am
              </motion.span>
              <motion.span variants={item}>
                a
              </motion.span>
              <motion.span variants={item}>
                good
              </motion.span>
              <motion.span variants={item}>
                person.
              </motion.span>
            </LargeTextContainer>
          </Col>
        </Row>
      </Container>
      <ModalComponent show={show} onHide={() => setShow(false)} />
    </>
  );
};

const LargeTextContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  span {
    font-size: 15vmin;
    line-height: 1;
    @media screen and (max-width: 500px) {
      font-size: 18vmin;
    }
  }
`;

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
