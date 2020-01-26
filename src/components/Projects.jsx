import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useIntersection } from 'react-use';
import gsap from 'gsap';
import { useRef } from 'react';

const Projects = () => {

  const firstProject = useRef(null);
  const secondProject = useRef(null);
  const thirdProject = useRef(null);
  const fourthProject = useRef(null)

  return (
    <Container as="section" className="Projects" id="projects">
      <Row className="Project-row">
        <Col lg={5}>
          <div className="technologies-wrapper">
            <div className="technologies-box">
              <div className="front-end">
                <div className="title">
                  <h4>FRONT END</h4>
                </div>
                <ul>
                  <li>HTML5</li>
                  <li>CSS3 and Material UI</li>
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
        <Col lg={7}>
          <div ref={firstProject} className="Project">
            <div id="one" className="Title">
              <h1><b>WAITLINE</b></h1>
            </div>
            <div id="one" className="divider">
              <span className="line"></span>
            </div>
            <div id="one" className="description-wrapper">
              <div className="description">
                <p>An app that was developed to help businesses keep track of the line at a restaurant/bar/lounge.</p>
              </div>
            </div>
            <div id="one" className="links-to-repos">
              <div className="link-wrapper">
                <div className="front-end">
                  <a href="https://github.com/aldibatyr/waitline" rel="noopener noreferrer" target="_blank">
                    <span>Front</span>
                    <span>End</span>
                    <span>Repo</span>
                  </a>
                </div>
              </div>
              <div className="divider-vertical"></div>
              <div className="link-wrapper">
                <div className="back-end">
                  <a href="https://github.com/aldibatyr/waitline-server" rel="noopener noreferrer" target="_blank">
                    <span>Back</span>
                    <span>End</span>
                    <span>Repo</span>
                  </a>
                </div>
              </div>
              <div className="divider-vertical"></div>
              <div className="link-wrapper">
                <div className="live-example">
                  <a href="http://waitline.now.sh" rel="noopener noreferrer" target="_blank">
                    <span>Live</span>
                    <span>Example</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="Project-row">
        <Col lg={7}>
          <div ref={secondProject} className="Project">
            <div className="Title two">
              <h1><b>JOBREEL</b></h1>
            </div>
            <div className="divider two">
              <span className="line"></span>
            </div>
            <div className="description-wrapper">
              <div className="description">
                <p>One stop for job search and making connections, think of it as a job search planner.</p>
              </div>
            </div>
            <div className="links-to-repos">
              <div className="link-wrapper">
                <div className="front-end">
                  <a href="https://github.com/thinkful-ei-dragonfly/JobReel-client" rel="noopener noreferrer" target="_blank">
                    <span>Front</span>
                    <span>End</span>
                    <span>Repo</span>
                  </a>
                </div>
              </div>
              <div className="divider-vertical"></div>
              <div className="link-wrapper">
                <div className="back-end">
                  <a href="https://github.com/thinkful-ei-dragonfly/JobReel-server" rel="noopener noreferrer" target="_blank">
                    <span>Back</span>
                    <span>End</span>
                    <span>Repo</span>
                  </a>
                </div>
              </div>
              <div className="divider-vertical"></div>
              <div className="link-wrapper">
                <div className="live-example">
                  <a href="http://jobreel.now.sh" rel="noopener noreferrer" target="_blank">
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
      </Row>
      <Row className="Project-row">
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
        <Col ref={thirdProject} lg={7}>
          <div className="Project">
            <div className="Title">
              <h1><b>SPACED</b></h1>
              <h1><b>REP</b></h1>
            </div>
            <div className="divider">
              <span className="line"></span>
            </div>
            <div className="description-wrapper">
              <div className="description">
                <p>Practice learning a language with the spaced repetition revision technique.</p>
              </div>
            </div>
            <div className="links-to-repos">
              <div className="link-wrapper">
                <div className="front-end">
                  <a href="https://github.com/thinkful-ei-dragonfly/spaced-repetition-aldiyar-jonathan" rel="noopener noreferrer" target="_blank">
                    <span>Front</span>
                    <span>End</span>
                    <span>Repo</span>
                  </a>
                </div>
              </div>
              <div className="divider-vertical"></div>
              <div className="link-wrapper">
                <div className="back-end">
                  <a href="https://github.com/thinkful-ei-dragonfly/spaced-rep-api-aldiyar-jonathan" rel="noopener noreferrer" target="_blank">
                    <span>Back</span>
                    <span>End</span>
                    <span>Repo</span>
                  </a>
                </div>
              </div>
              <div className="divider-vertical"></div>
              <div className="link-wrapper">
                <div className="live-example">
                  <a href="https://aldiyar-jonathan-spaced-repetition.now.sh/" rel="noopener noreferrer" target="_blank">
                    <span>Live</span>
                    <span>Example</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="Project-row">
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
      </Row>
    </Container>
  )
}

export default Projects;