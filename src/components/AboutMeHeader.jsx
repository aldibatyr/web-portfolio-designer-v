import React, { useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const headlineContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const headlineText = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const headlineLine = {
  hidden: { x: "100vw" },
  show: {
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

const AboutMeHeader = ({title}) => {
  const controls = useAnimation();
  const [headline, inView] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  return (
    <Headline
      ref={headline}
      variants={headlineContainer}
      initial="hidden"
      animate={controls}
    >
      <motion.h2 variants={headlineText}>{title}</motion.h2>
      <Line variants={headlineLine} />
    </Headline>
  );
};

const Headline = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 15%;
  margin-top: 75px;
  h2 {
    text-transform: uppercase;
  }
`;

const Line = styled(motion.div)`
  width: 100%;
  margin-left: 20px;
  height: 1px;
  border: 1px solid black;
`;

export default AboutMeHeader;
