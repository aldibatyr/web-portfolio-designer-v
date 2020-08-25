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

  p {
    font-family: "Poppins";
  }
`;

export const Image = styled(motion.img)`
  max-width: 100%;
  height: auto;
  overflow: hidden;
`;

export const ImageWrapper = styled(motion.div)`
  border-radius: 30px;
  box-shadow: 6px 6px 16px #d1cdd780, -6px -6px 16px #ffffff80;
  overflow: hidden;
`;

export  const ProjectDescription = styled.div`
box-shadow: 6px 6px 16px #d1cdd780, -6px -6px 16px #ffffff80;
border-radius: 30px;
padding: 20px 0;

@media screen and (max-width: 768px) {
  margin-top: 10px;
}
h2 {
  font-family: "Montserrat", sans-serif;
  background: #c04848;
  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #480048, #c04848);
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #480048, #c04848);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-decoration: underline;
  text-align: center;

  font-weight: bolder;
}

p {
  font-family: "Poppins";
  padding: 0 15%;
}

a {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 10px;
  margin-left: 15%;
  margin-right: 15%;
  height: 100px;
  background-color: #eeeeee;
  text-align: center;
  transition: 0.3s all ease-in-out;
  box-shadow: 6px 6px 16px #d1cdd780, -6px -6px 16px #ffffff80;
  border-radius: 50px;
  text-decoration: none;
  &:hover {
    background: linear-gradient(to right, #480048, #c04848);
    span {
      color: #eeeeee;
    }
  }
  span {
    color: black;
    font-family: "Poppins";
    font-size: 16px;
  }
}
`;

export const TechnologiesUsedContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 15%;
  margin: 25px 0;
`;

export const Technology = styled.div`
  box-shadow: 6px 6px 16px #d1cdd780, -6px -6px 16px #ffffff80;
  border-radius: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 5px 10px;
  font-family: "Poppins";
`;