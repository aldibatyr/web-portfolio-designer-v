import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useIntersection } from 'react-use';
import Project from './Project';

const Projects = () => {

  const projects = [
    {
      technologies:
        {
          frontEnd: ['HTML5', 'CSS3 and Material UI', 'JavaScript', 'React', 'Deployed on Zeit'],
          backEnd: ['Node.js', 'Express', 'Knex', 'PostgreSQL', 'Deployed on Heroku']
        },
      name: 'WAITLINE',
      description: 'An app that was developed to help businesses keep track of the line at a restaurant/bar/lounge.',
      frontEndRepo: 'https://github.com/aldibatyr/waitline',
      backEndRepo: 'https://github.com/aldibatyr/waitline-server',
      liveDemo: 'http://waitline.now.sh',
      order: 'first'
    },
    {
      technologies:
      {
        frontEnd: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Deployed on Zeit'],
        backEnd: ['Node.js', 'Express', 'Knex', 'PostgreSQL', 'Deployed on Heroku']
      },
      name: 'JOBREEL',
      description: 'One stop for job search and making connections, think of it as a job search planner.',
      frontEndRepo: 'https://github.com/thinkful-ei-dragonfly/JobReel-client',
      backEndRepo: 'https://github.com/thinkful-ei-dragonfly/JobReel-server',
      liveDemo: 'http://jobreel.now.sh',
      order: 'second'
    },
    {
      technologies:
        {
          frontEnd: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Deployed on Zeit'],
          backEnd: ['Node.js', 'Express', 'Knex', 'PostgreSQL', 'Deployed on Heroku']
        },
      name: 'SPACED REP',
      description: 'Practice learning a language with the spaced repetition revision technique.',
      frontEndRepo: 'https://github.com/thinkful-ei-dragonfly/spaced-repetition-aldiyar-jonathan',
      backEndRepo: 'https://github.com/thinkful-ei-dragonfly/spaced-rep-api-aldiyar-jonathan',
      liveDemo: 'https://aldiyar-jonathan-spaced-repetition.now.sh/',
      order: 'third'
    },
    {
      technologies:
        {
          frontEnd: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Deployed on Zeit'],
          backEnd: ['Node.js', 'Express', 'PostgreSQL', 'Deployed on Heroku']
        },
      name: 'VKUSS',
      description: 'VkusS determines your perfect hookah flavor based on 4 simple questions. Answer these questions and we are going to generate a flavor that would perfectly fit your liking!',
      frontEndRepo: 'https://github.com/thinkful-ei-dragonfly/V2-capstone-aldiyar',
      backEndRepo: 'https://github.com/thinkful-ei-dragonfly/vkuss-server-aldiyar',
      liveDemo: 'https://aldibatyrbekov-vkuss-app.now.sh',
      order: 'fourth'
    },
  ];

  return (
    <Container as="section" className="Projects" id="projects">
      {projects.map((project, i) => <Project props={project} key={i}/>)}
    </Container>
  )
}

export default Projects;