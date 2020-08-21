import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
const item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
  },
};

const TechnologyPresenterCell = ({ tech }) => {
  const colors = ["#d6d680", "#8a36d8", "#128cb1", "#ad0855", "#8cb629"];

  return (
    <TechStackElement
      size={75}
      color={colors[Math.floor(Math.random() * Math.floor(colors.length))]}
      variants={item}
      // whileHover={{ margin: "30px" }}
    >
      <img
        src={tech}
        alt=""
        style={{ width: "75%", height: "75%", margin: "auto" }}
      />
    </TechStackElement>
  );
};

const TechStackElement = styled(motion.div)`
  height: ${({ size }) => `${size}px`};
  width: ${({ size }) => `${size}px`};
  background: ${({ color }) => color};
  border-radius: ${({ size }) => `${size / 2}px`};
  display: flex;
  overflow: hidden;
  margin: 10px;
`;

export default TechnologyPresenterCell;
