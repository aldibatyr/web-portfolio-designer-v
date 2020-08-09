import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { contentfulClient } from "../contentfulClient";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const loadProjects = async () => {
    try {
      setLoading(true);
      setError(false);
      let projectsData = await contentfulClient.getEntries();
      setProjects(projectsData.items);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
      console.error(error);
    }
  };
  useEffect(() => {
    loadProjects();
  }, []);
  return (
    <Container as="section" className="Projects" id="projects">
      <h1>Web Projects</h1>
      {!loading && projects !== [] ? (
        projects.map((project) => (
          <Project key={project.sys.id} project={project} />
        ))
      ) : (
        <h3>Loading</h3>
      )}
    </Container>
  );
};

const Project = ({ project }) => {
  return (
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
              <p>{project.fields.description || "No description available"}</p>
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
  );
};

export default Projects;

{
  /* <Row className="Project-row">
        <Col lg={7}>
          <div className="Project">
            <div className="Title">
              <h1><b>VKUSS</b></h1>
            </div>
            <div className="divider">
              <span className="line"></span>
            </div>
            <div className="description-wrapper">
              <div className="description">
                <p>VkusS determines your perfect hookah flavor based on 4 simple questions. Answer these questions and we are going to generate a flavor that would perfectly fit your liking!</p>
              </div>
            </div>
            <div className="links-to-repos">
              <div className="link-wrapper">
                <div className="front-end">
                  <a href="https://github.com/thinkful-ei-dragonfly/V2-capstone-aldiyar" rel="noopener noreferrer" target="_blank">
                    <span>Front</span>
                    <span>End</span>
                    <span>Repo</span>
                  </a>
                </div>
              </div>
              <div className="divider-vertical"></div>
              <div className="link-wrapper">
                <div className="back-end">
                  <a href="https://github.com/thinkful-ei-dragonfly/vkuss-server-aldiyar" rel="noopener noreferrer" target="_blank">
                    <span>Back</span>
                    <span>End</span>
                    <span>Repo</span>
                  </a>
                </div>
              </div>
              <div className="divider-vertical"></div>
              <div className="link-wrapper">
                <div className="live-example">
                  <a href="https://aldibatyrbekov-vkuss-app.now.sh" rel="noopener noreferrer" target="_blank">
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
                <ul>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Deployed on Zeit</li>
                </ul>
              </div>
              <div className="back-end">
                <div className="title">
                  <h4>BACK END</h4>
                </div>
                <ul>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>Knex</li>
                  <li>PostgreSQL</li>
                  <li>Deployed on Heroku</li>
                </ul>
              </div>
            </div>
          </div>
        </Col>
      </Row> */
}
