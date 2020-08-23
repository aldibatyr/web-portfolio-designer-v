import React, { useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CircleProgress = ({
  percents,
  stroke = "#8a36d8",
  emptyStroke = stroke,
  emptyStrokeOpacity = 0.25,
  duration = 1,
  delay = 0.5,
  size = 100,
  strokeWidth = 6,
}) => {
  const progressControls = useAnimation();
  const [progressCircle, inView] = useInView();

  useEffect(() => {
    if (inView) {
      progressControls.start("show");
    }
  }, [progressControls, inView]);
  const radius = 45;
  const circumference = Math.ceil(2 * Math.PI * radius);
  const fillPercents = Math.abs(
    Math.ceil((circumference / 100) * (percents - 100))
  );

  const transition = {
    duration: duration,
    delay: delay,
    ease: "easeIn",
  };

  const variants = {
    hidden: {
      strokeDashoffset: circumference,
      transition,
    },
    show: {
      strokeDashoffset: fillPercents,
      transition,
    },
  };
  return (
    <Box ref={progressCircle}>
      <svg
        viewBox="0 0 100 100"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
      >
        <circle
          cx="50"
          cy="50"
          r={radius}
          className="circle"
          strokeWidth={strokeWidth}
          stroke={emptyStroke}
          strokeOpacity={emptyStrokeOpacity}
          fill="transparent"
        />
      </svg>
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        style={{
          position: "absolute",
          transform: "rotate(-90deg)",
          overflow: "visible",
          marginLeft: -size,
        }}
      >
        <motion.circle
          cx="50"
          cy="50"
          r={radius}
          strokeWidth={strokeWidth}
          stroke={stroke}
          fill="transparent"
          strokeDashoffset={fillPercents}
          strokeDasharray={circumference}
          variants={variants}
          initial="hidden"
          animate={progressControls}
        />
      </svg>
    </Box>
  );
};

const Box = styled.div`
  margin: 50px auto;
  width: 100px;
`;

export default CircleProgress;
