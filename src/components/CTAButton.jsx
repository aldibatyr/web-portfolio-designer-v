import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const CTAButton = ({ clickAction }) => {
  return (
    <ContactButton onClick={clickAction} whileHover={{ scale: 1.05 }}>
      <ButtonText>
        <p>
          <b>contact</b>
        </p>
      </ButtonText>
      <ContactButtonArrowWrapper>
        <ButtonArrowBody />
        <ButtonArrowPointer />
      </ContactButtonArrowWrapper>
    </ContactButton>
  );
};

const ContactButton = styled(motion.button)`
  display: flex;
  flex-direction: row;
  width: 120px;
  height: 50px;
  background-color: #eeeeee;
  border-radius: 50px;
  box-shadow: 6px 6px 16px #d1cdd780, -6px -6px 16px #ffffff80;
  overflow: hidden;
  border: none;
  background: #c04848;
  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #480048, #c04848);
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #480048, #c04848);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  color: white;
  font-size: 1rem;
  transition: 0.15s color ease-in-out;

  &:hover {
    color: white;
  }
`;

const ButtonText = styled.div`
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 10px;

  p {
    margin: 0;
  }
  text-decoration: none !important;
  font-family: "Montserrat", "sans-serif";
`;

const ContactButtonArrowWrapper = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: left;
  padding-left: 5px;
  align-items: center;
`;

const ButtonArrowBody = styled.span`
  display: block;
  height: 1px;
  width: 10px;
  border: white 0.5px solid;
`;

const ButtonArrowPointer = styled.span`
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;
  border-left: 5px solid white;
`;

export default CTAButton;
