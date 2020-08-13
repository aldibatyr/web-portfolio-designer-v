import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { Container, Row, Col } from "react-bootstrap";
import ModalComponent from "../components/Modal";
import Background from "../components/Background";
import styled from "styled-components";
import { motion } from "framer-motion";

const About = () => {
  const [show, setShow] = useState(false);

  let tl = gsap.timeline();
  useEffect(() => {
    tl.fromTo(".spotlight", 0.5, { scale: 0 }, { scale: 1 })
      .to(".spotlight", 2, { x: 220, ease: "power4.inOut" }, "-=0.2")
      .to(".spotlight", 0.5, { scale: 0 }, "-=0.2")
      .to(".overlay-animation", 1, { y: "-100vh", ease: "power4.inOut" });
  }, []);

  return (
    <Container style={{ marginBottom: "100px" }}>
      <LargeTextContainer>I am a good person.</LargeTextContainer>
    </Container>
  );
};

const LargeTextContainer = styled(motion.div)``;

export default About;
