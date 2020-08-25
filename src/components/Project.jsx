import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Row, Col } from "react-bootstrap";
import { useAnimation, motion } from "framer-motion";

const Project = ({ project }) => {
  const controls = useAnimation();
  const [projectRow, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={projectRow}
      animate={controls}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
          },
        },
        hidden: {
          opacity: 0,
          y: 100,
        },
      }}
    >
      <Row className="Project-row">
        <Col lg={7}>
          <div className="Project">
            <div className="Title">
              <h1>
                <b>{project.fields.name || "Untitled"}</b>
              </h1>
            </div>
            <div className="divider">
              <span className="line"></span>
            </div>
            <div className="description-wrapper">
              <div className="description">
                <p>
                  {project.fields.description || "No description available"}
                </p>
              </div>
            </div>
            <div className="links-to-repos">
              <div className="link-wrapper">
                <div className="front-end">
                  <a
                    href={project.fields.frontEndCode || "#"}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span>Front</span>
                    <span>End</span>
                    <span>Repo</span>
                  </a>
                </div>
              </div>
              <div className="divider-vertical"></div>
              <div className="link-wrapper">
                <div className="back-end">
                  <a
                    href={project.fields.backEndCode || "#"}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span>Back</span>
                    <span>End</span>
                    <span>Repo</span>
                  </a>
                </div>
              </div>
              <div className="divider-vertical"></div>
              <div className="link-wrapper">
                <div className="live-example">
                  <a
                    href={project.fields.projectLink || "#"}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span>Live</span>
                    <span>Example</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={5}>
          <div className="technologies-wrapper">
            <div className="technologies-box">
              <div className="front-end">
                <div className="title">
                  <h4>FRONT END</h4>
                </div>
                <ul style={{ paddingLeft: "5px" }}>
                  {project.fields.frontEndTechnologies ? (
                    project.fields.frontEndTechnologies.map((technology, i) => (
                      <li key={i}>{technology}</li>
                    ))
                  ) : (
                    <li>Not Available</li>
                  )}
                </ul>
              </div>
              <span className="divider-projects" />
              <div className="back-end">
                <div className="title">
                  <h4>BACK END</h4>
                </div>
                <ul style={{ paddingLeft: "5px" }}>
                  {project.fields.backEndTechnologies ? (
                    project.fields.backEndTechnologies.map((technology, i) => (
                      <li key={i}>{technology}</li>
                    ))
                  ) : (
                    <li>Not Available</li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </motion.div>
  );
};

export default Project;
