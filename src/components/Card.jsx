import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import CircleProgress from "./CircleProgress";

const Card = ({ skill }) => {
  return (
    <StyledCard>
      <Title>{skill.title || "Not Available"}</Title>
      <CircleProgress percents={skill.percents || 5} />
      <Description>{skill.description || "Not Available"}</Description>
    </StyledCard>
  );
};

const StyledCard = styled(motion.div)`
  box-shadow: 6px 6px 16px #d1cdd780, -6px -6px 16px #ffffff80;
  border-radius: 30px;
  height: 300px;
  padding: 20px;
  margin: 10px 0;
`;

const Title = styled.h3`
  font-family: "Poppins";
`;

const Description = styled.p`
  font-family: "Poppins";
  color: gray;
  text-align: right;
`;

export default Card;
