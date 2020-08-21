import React, { useEffect } from "react";
import { Col } from "react-bootstrap";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import me from "../Assets/me.JPG";
import { useInView } from "react-intersection-observer";

const Resume = () => {
  const controls = useAnimation();
  const [resume, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <ResumeContainer
      ref={resume}
      animate={controls}
      initial="notInView"
      variants={{
        notInView: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
        },
      }}
    >
      <Col xs={1} md={3} lg={6}>
        <NameWrapper>
          <LargeName>Aldiyar</LargeName>
          <ColoredLargeName>Batyrbekov</ColoredLargeName>
        </NameWrapper>
      </Col>
      <Col xs={11} md={6}>
        <InfoSection>
          <AddressSection>
            <SectionHeader>MY LOCATIONS</SectionHeader>
            <h6>Los Angeles, CA 90012</h6>
            <h6>Almaty, Kazakhstan 050000</h6>
          </AddressSection>
          <LanguagesSection>
            <SectionHeader>MY LANGUAGES</SectionHeader>
            <LanguagesList>
              <Language>eng</Language>
              <Language>rus</Language>
              <Language>kaz</Language>
            </LanguagesList>
          </LanguagesSection>
        </InfoSection>
        <MyImageContainer>
          <Image src={me} alt="Me standing in Mojave Desert" />
        </MyImageContainer>
      </Col>
    </ResumeContainer>
  );
};

const ResumeContainer = styled(motion.div)`
  display: flex;
`;

const NameWrapper = styled(motion.div)`
  display: flex;
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  margin-left: auto;
  margin-top: 100px;
`;

const LargeName = styled(motion.span)`
  font-size: 80px;
  font-family: "Poppins";
`;

const ColoredLargeName = styled(motion.span)`
  font-size: 80px;
  font-family: "Poppins";
  background: #8a36d8;
  color: #ededed;
  padding: 10px 0;
`;

const InfoSection = styled(motion.div)`
  width: 100%;
  display: flex;
  background: #8a36d8;
  padding: 10px;
  color: white;
  font-family: "Poppins";
`;

const SectionHeader = styled.div`
  letter-spacing: 1px;
  display: block;
  margin-bottom: 30px;
`;

const AddressSection = styled.div``;

const LanguagesSection = styled.div`
  margin: auto;
`;

const LanguagesList = styled.div`
  display: flex;
`;

const Language = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 25px;
  border: 2px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  margin-right: 30px;
`;

const MyImageContainer = styled.div`
  width: 100%;
  overflow: hidden;
  height: 700px;
  margin-top: 10px;
`;

const Image = styled.img`
  transform: translateY(-200px);
  filter: grayscale(50%);
`;

export default Resume;
