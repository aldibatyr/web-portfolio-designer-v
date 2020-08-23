import React, { useEffect } from "react";
import CTAButton from "./CTAButton";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ctaVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

const AboutMeCTASection = ({ clickAction }) => {
  const ctaSectionControls = useAnimation();
  const [ctaContainer, inView] = useInView();

  useEffect(() => {
    if (inView) {
      ctaSectionControls.start("show");
    }
  }, [ctaSectionControls, inView]);
  return (
    <CTASection
      ref={ctaContainer}
      variants={ctaVariants}
      initial="hidden"
      animate={ctaSectionControls}
    >
      <h2>Ready to connect?</h2>
      <div style={{ width: "50px" }} />
      <CTAButton clickAction={clickAction} />
    </CTASection>
  );
};

const CTASection = styled(motion.div)`
  width: 70%;
  margin: 50px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;

  h2 {
    font-family: "Montserrat";
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export default AboutMeCTASection;
