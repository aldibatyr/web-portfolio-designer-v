const { default: styled } = require("styled-components");
const { motion } = require("framer-motion");

export const MyContainer = styled(motion.div)`
  margin-right: 15%;
  width: 85%;
  background: #8a36d8;
  color: white;
  padding-left: 15%;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const MyRow = styled.div`
  display: flex;
  margin-bottom: 50px;

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const MyColumn = styled.div`
  min-width: 200px;
  h5 {
    font-family: "Poppins";
  }
`;
