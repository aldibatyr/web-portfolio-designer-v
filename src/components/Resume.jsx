import React, { useEffect } from "react";
import { Col } from "react-bootstrap";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import me from "../Assets/me.JPG";
import { useInView } from "react-intersection-observer";

const fadeUpVariants = {
  notInView: {
    opacity: 0,
    y: 200,
  },
  visible: {
    opacity: 1,
    y: 0,
    // transition: {
    //   duration: 0.5,
    // },
  },
};

const Resume = () => {
  const controls = useAnimation();
  const [resume, inView] = useInView({
    threshold: 0.5,
  });

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
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      <LeftCol variants={fadeUpVariants}>
        <NameWrapper>
          <ColoredLargeName>Aldiyar</ColoredLargeName>
          <LargeName>Batyrbekov</LargeName>
        </NameWrapper>
      </LeftCol>
      <RightCol variants={fadeUpVariants}>
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
      </RightCol>
    </ResumeContainer>
  );
};

const ResumeContainer = styled(motion.div)`
  display: flex;
`;

const LeftCol = styled(motion.div)`
  width: 6vw;
  @media screen and (max-width: 768px) {
    width: 15vw;
  }
`;

const RightCol = styled(motion.div)`
  max-width: 600px;
`;
const NameWrapper = styled(motion.div)`
  display: flex;
  writing-mode: vertical-rl;
  margin-left: auto;
  margin-top: 100px;
`;

const LargeName = styled(motion.span)`
  font-size: 5vw;
  font-family: "Poppins";

  @media screen and (max-width: 768px) {
    font-size: 10vw;
  }
`;

const ColoredLargeName = styled(motion.span)`
  font-size: 5vw;
  font-family: "Poppins";
  background: #8a36d8;
  color: #ededed;
  padding: 10px 0;

  @media screen and (max-width: 768px) {
    font-size: 10vw;
  }
`;

const InfoSection = styled(motion.div)`
  width: 100%;
  display: flex;
  background: #8a36d8;
  padding: 10px;
  color: white;
  font-family: "Montserrat";

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const SectionHeader = styled.div`
  letter-spacing: 1px;
  display: block;
  margin-bottom: 30px;
`;

const AddressSection = styled.div`
  @media screen and (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

const LanguagesSection = styled.div`
  margin-left: 10px;

  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
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
  margin-top: 10px;
  max-height: 750px;
`;

const Image = styled.img`
  transform: translateY(-200px);
  filter: grayscale(50%);

  @media screen and (max-width: 768px) {
    transform: translate(-200px, -200px);
  }
`;

export default Resume;
