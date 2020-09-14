import React, { useEffect } from "react";
import { MyContainer, MyRow, MyColumn } from "./myLayoutCompontents";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const educationVariants = {
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

const Education = () => {
  const educationControls = useAnimation();
  const [educationContainer, inView] = useInView();

  useEffect(() => {
    if (inView) {
      educationControls.start("show");
    }
  }, [educationControls, inView]);
  return (
    <MyContainer
      ref={educationContainer}
      variants={educationVariants}
      initial="hidden"
      animate={educationControls}
    >
      <MyRow>
        <MyColumn>
          <h5>2019</h5>
          <h5>Thinkful</h5>
        </MyColumn>
        <div style={{ minWidth: "33px" }} />
        <MyColumn>
          <h5 style={{ textTransform: "uppercase" }}>
            Full Stack Web Development Courses
          </h5>
          <p>
            Started extended studies of web development using tools such as
            React, Node, Express, and PostgreSQL. Worked closely with senior web
            developers to absorb information on industry leading firms' best
            practices. Kickstarted my career in web development field.
          </p>
        </MyColumn>
      </MyRow>
      <MyRow>
        <MyColumn style={{ maxWidth: "200px" }}>
          <h5>2015-2017</h5>
          <h5>California State University, Northridge</h5>
        </MyColumn>
        <div style={{ minWidth: "33px" }} />
        <MyColumn>
          <h5 style={{ textTransform: "uppercase" }}>
            Bachelor of Science, Marketing
          </h5>
          <p>
            Extended my studies in a field of consumer behavior and consumer
            decision making patterns. Took "Web Infrastructure" as a minor. Was
            a member of the "Coding Dojo Association".{" "}
          </p>
        </MyColumn>
      </MyRow>
      <MyRow>
        <MyColumn style={{ maxWidth: "200px" }}>
          <h5>2012-2015</h5>
          <h5>Los Angeles City College</h5>
        </MyColumn>
        <div style={{ minWidth: "33px" }} />
        <MyColumn>
          <h5 style={{ textTransform: "uppercase" }}>
            Associate of Arts, Social and Behavioral Sciences
          </h5>
          <p>
            Studied how masses think and make decisions based on outside factors
            as well as their emotional state. Got into statistics and crunching
            numbers on Excel spreadsheets. Started my studies in a field of
            marketing and consumer behavior.
          </p>
        </MyColumn>
      </MyRow>
    </MyContainer>
  );
};

export default Education;
