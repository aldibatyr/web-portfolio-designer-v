import React, { useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Experience = () => {
  const experienceControls = useAnimation();
  const [experienceContainer, inView] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      experienceControls.start("show");
    }
  }, [experienceControls, inView]);

  return (
    <ExperienceContainer ref={experienceContainer}>
      <ExperienceRow>
        <ExperienceColumn>
          <h5>2019-2020</h5>
          <h5>Camino Financial</h5>
        </ExperienceColumn>
        <div style={{ minWidth: "33px" }} />
        <ExperienceColumn>
          <h5 style={{ textTransform: "uppercase" }}>
            Front-End Web Developer
          </h5>
          <p>
            Started as an intern back in mid-2019. After 2 months of extensive
            hands-on experience in React and GatsbyJS solidified my position as
            Front-End Web Developer. Was primarily responsible for form
            validations, animations, and implementing proposed UI. Worked
            closely with the design team to transform prototypes made in Xd,
            Figma, and Framer to React-based components. The latest project that
            our team tackled involved Vue, Nuxt, styled-components, and GSAP.
            Projects that I participated in involved styled-components,
            Framer-Motion, React, GatsbyJS, Firebase, and Node.
          </p>
        </ExperienceColumn>
      </ExperienceRow>
      <ExperienceRow>
        <ExperienceColumn>
          <h5>2017 - 2019</h5>
          <h5>CalState Moving & Storage</h5>
        </ExperienceColumn>
        <div style={{ minWidth: "33px" }} />
        <ExperienceColumn>
          <h5 style={{ textTransform: "uppercase" }}>
            Customer Service Representative
          </h5>
          <p>
            Provided assistance to customers in regards to their move over the
            phone. Sold moving services. Created spreadsheets for the upkeeping
            of active and scheduled jobs. And performed various boring office
            tasks.
          </p>
        </ExperienceColumn>
      </ExperienceRow>
    </ExperienceContainer>
  );
};

const ExperienceContainer = styled(motion.div)`
  margin-right: 15%;
  width: 85%;
  background: #8a36d8;
  color: white;
  padding-left: 15%;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const ExperienceRow = styled.div`
  display: flex;
  margin-bottom: 50px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ExperienceColumn = styled.div`
  min-width: 200px;
  h5 {
    font-family: "Poppins";
  }
`;

export default Experience;
