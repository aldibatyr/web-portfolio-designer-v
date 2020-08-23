import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

const fullLineVariants = {
  hidden: {
    width: 0,
  },
  show: {
    width: "70%",
    transition: {
      duration: 1,
    },
  },
};


const FullLine = () => {
  const lineControls = useAnimation();
  const [styledFullLine, inView] = useInView();

  useEffect(() => {
    if (inView) {
      lineControls.start("show");
    }
  }, [lineControls, inView]);

  return (
    <StyledFullLine
      ref={styledFullLine}
      variants={fullLineVariants}
      initial="hidden"
      animate={lineControls}
    />
  );
};

const StyledFullLine = styled(motion.div)`
  margin: 50px 15%;
  height: 2px;
  border: 1px solid black;
`;


export default FullLine;
