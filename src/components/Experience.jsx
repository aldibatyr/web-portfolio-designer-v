import React, { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MyContainer, MyRow, MyColumn } from "./myLayoutCompontents";

const experienceVariants = {
  hidden: {
    x: "-80vw",
  },
  show: {
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

const Experience = () => {
  const experienceControls = useAnimation();
  const [experienceContainer, inView] = useInView();

  useEffect(() => {
    if (inView) {
      experienceControls.start("show");
    }
  }, [experienceControls, inView]);

  return (
    <MyContainer
      ref={experienceContainer}
      variants={experienceVariants}
      initial="hidden"
      animate={experienceControls}
    >
      <MyRow>
        <MyColumn>
          <h5>2019-2020</h5>
          <h5>Camino Financial</h5>
        </MyColumn>
        <div style={{ minWidth: "33px" }} />
        <MyColumn>
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
            Framer-Motion, React, GatsbyJS, MongoDB, PostgreSQL, Express, Firebase, Node,
            and my personal favorite - GSAP.
          </p>
        </MyColumn>
      </MyRow>
      <MyRow>
        <MyColumn style={{ maxWidth: "200px" }}>
          <h5>2017 - 2019</h5>
          <h5>CalState Moving & Storage</h5>
        </MyColumn>
        <div style={{ minWidth: "33px" }} />
        <MyColumn>
          <h5 style={{ textTransform: "uppercase" }}>
            Customer Service Representative
          </h5>
          <p>
            Provided assistance to customers in regards to their move over the
            phone. Sold moving services. Created spreadsheets for the upkeeping
            of active and scheduled jobs. And performed various boring office
            tasks.
          </p>
        </MyColumn>
      </MyRow>
    </MyContainer>
  );
};

export default Experience;
