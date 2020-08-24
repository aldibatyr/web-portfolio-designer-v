import React, { useEffect } from "react";
import gsap from "gsap";
import { faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";
import LinkCard from "../components/LinkCard";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faYoutube,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const Contact = () => {
  let tl = gsap.timeline();
  useEffect(() => {
    tl.fromTo(".spotlight", 0.5, { scale: 0 }, { scale: 1 })
      .to(".spotlight", 2, { x: 220, ease: "power4.inOut" }, "-=0.2")
      .to(".spotlight", 0.5, { scale: 0 }, "-=0.2")
      .to(".overlay-animation", 1, { y: "-100vh", ease: "power4.inOut" });
  }, []);

  return (
    <>
      <div className="overlay-animation">
        <div className="spotlight"></div>
        <div className="animation-box">
          <span>Contact Me</span>
        </div>
      </div>
      <Container style={{ minHeight: "70vh" }}>
        <Spacer />
        <Row>
          <Col>
            <div className="header">
              <h1>
                Just in case if you have an urge to find me on social media
              </h1>
            </div>
          </Col>
          <Col>
            <div className="links">
              <LinkCard
                icon={faEnvelope}
                href="mailto:hi@creativecircle.dev"
                name="hi@creativecircle.dev"
              />
              <LinkCard
                icon={faGithub}
                href="https://github.com/aldibatyr"
                name="@aldibatyr"
              />
              <LinkCard
                icon={faTelegram}
                href="https://t.me/aldibatyr"
                name="@aldibatyr"
              />
              <LinkCard
                icon={faInstagram}
                href="https://instagram.com/btrbekov"
                name="@btrbekov"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

const Spacer = styled.div`
  height: 200px;

  @media screen and (max-width: 768px) {
    height: 100px;
  }
`;

export default Contact;
