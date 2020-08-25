import React, { useRef } from "react";
import styled from "styled-components";
import { motion, useMotionValue } from "framer-motion";

import react from "../Assets/logos/react.png";
import bootstrap from "../Assets/logos/bootstrap.png";
import contentful from "../Assets/logos/contentful.png";
import figma from "../Assets/logos/figma.png";
import flutter from "../Assets/logos/flutter.png";
import framer from "../Assets/logos/framer.png";
import gatsby from "../Assets/logos/gatsby.png";
import html from "../Assets/logos/html.png";
import netlify from "../Assets/logos/netlify.png";
import nodejs from "../Assets/logos/nodejs.png";
import sass from "../Assets/logos/sass.png";
import swift from "../Assets/logos/swift.png";
import vue from "../Assets/logos/vue.png";
import xd from "../Assets/logos/xd.png";
import styledComponents from "../Assets/logos/styledComponents.png";
import gsapLogo from "../Assets/logos/gsap.png";
import postman from "../Assets/logos/postman.png";
import postgresql from "../Assets/logos/postgresql.png";
import mongo from "../Assets/logos/mongo.png";
import notion from "../Assets/logos/notion.png";
import TechnologyPresenterCell from "./TechnologyPresenterCell";

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

const TechnologiesIUse = () => {
  const techStackContainer = useRef(null);
  const techs = [
    react,
    bootstrap,
    contentful,
    figma,
    flutter,
    framer,
    gatsby,
    html,
    netlify,
    nodejs,
    sass,
    swift,
    vue,
    xd,
    styledComponents,
    gsapLogo,
    postman,
    postgresql,
    mongo,
    notion,
  ];

  return (
    <TechStackContainer
      ref={techStackContainer}
      variants={container}
      initial="hidden"
      animate="show"
    >
      {techs.map((tech, i) => (
        <TechnologyPresenterCell key={i} tech={tech} />
      ))}
    </TechStackContainer>
  );
};

const TechStackContainer = styled(motion.div)`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    margin-top: 75px;
    margin-bottom: 75px;
  }
`;

export default TechnologiesIUse;
