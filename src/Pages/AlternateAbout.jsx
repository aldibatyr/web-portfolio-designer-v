import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import styled from "styled-components";
import gsap from "gsap";
import ModalComponent from "../components/Modal";
import TechnologiesIUse from "../components/TechnologiesIUse";
import Resume from "../components/Resume";
import { useInView } from "react-intersection-observer";
import AboutMeHeader from "../components/AboutMeHeader";
import Experience from "../components/Experience";
import Education from "../components/Education";
import FullLine from "../components/FullLine";
import CTAButton from "../components/CTAButton";
import AboutMeCTASection from "../components/AboutMeCTASection";

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
        <Row style={{ marginTop: "100px", minHeight: "90vh" }}>
          <Col xs={12} md={6}>
            <LargeTextContainer
              variants={container}
              initial="hidden"
              animate="show"
            >
              <motion.span variants={item}>Tools</motion.span>
              <motion.span variants={item} style={{ color: "#8a36d8" }}>
                <em>I</em>
              </motion.span>
              <motion.span variants={item}>use</motion.span>
              <motion.span variants={item}>daily.</motion.span>
            </LargeTextContainer>
          </Col>
          <Col xs={12} md={6}>
            <TechnologiesIUse />
          </Col>
        </Row>
        <Row>
          <Resume />
        </Row>
      </Container>
      <AboutMeHeader title="experience" />
      <Experience />
      <AboutMeHeader title="education" />
      <Education />
      <FullLine />
      <AboutMeCTASection clickAction={() => setShow(true)} />
      
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
      font-size: 28vmin;
    }
  }
`;

export default AlternateAbout;
