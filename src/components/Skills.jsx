import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "./Card";

const Skills = () => {
  const skills = [
    {
      title: "Front End",
      percents: 90,
      description: "Pretty fluent",
    },
    {
      title: "Back End",
      percents: 70,
      description: "I'm alright",
    },
    {
      title: "Databases",
      percents: 65,
      description: "Not bad",
    },
    {
      title: "Friendliness",
      percents: 100,
      description: "Ohh, Yeah",
    },
  ];
  return (
    <Container>
      <Row>
        {skills.map((skill, i) => (
          <Col key={i} xs={12} md={6} lg={3}>
            <Card skill={skill} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Skills;
