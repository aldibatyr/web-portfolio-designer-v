import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useState } from "react";
import { contentfulClient } from "../contentfulClient";
import Project from "./Project";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const loadProjects = async () => {
    try {
      setLoading(true);
      setError(false);
      let projectsData = await contentfulClient.getEntries({
        content_type: "webProjects",
      });
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

export default Projects;
