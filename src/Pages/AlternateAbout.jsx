import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import styled from "styled-components";

const AlternateAbout = () => {
  return (
    <Container as="section">
      <Row>
        <StyledTitle>About Me</StyledTitle>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <ImagePlaceholder />
        </Col>
        <Col>
          <StyledTitleV2>Nice To Meet You</StyledTitleV2>
          <StyledText>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae,
            veniam magni? Saepe odit velit beatae voluptates, expedita natus
            debitis necessitatibus eos iure itaque eveniet ratione deserunt
            dolorum quae et nisi. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Molestiae, veniam magni? Saepe odit velit beatae
            voluptates, expedita natus debitis necessitatibus eos iure itaque
            eveniet ratione deserunt dolorum quae et nisi. Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Molestiae, veniam magni? Saepe
            odit velit beatae voluptates, expedita natus debitis necessitatibus
            eos iure itaque eveniet ratione deserunt dolorum quae et nisi. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Molestiae,
            veniam magni? Saepe odit velit beatae voluptates, expedita natus
            debitis necessitatibus eos iure itaque eveniet ratione deserunt
            dolorum quae et nisi. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Molestiae, veniam magni? Saepe odit velit beatae
            voluptates, expedita natus debitis necessitatibus eos iure itaque
            eveniet ratione deserunt dolorum quae et nisi.
          </StyledText>
        </Col>
      </Row>
    </Container>
  );
};

const StyledTitle = styled(motion.h1)``;

const StyledTitleV2 = styled(motion.h2)``;

const StyledText = styled(motion.p)``;

const ImagePlaceholder = styled(motion.div)`
  width: 50vh;
  height: 50vh;
  background: gray;
  border-radius: 100%;
`;

export default AlternateAbout;
