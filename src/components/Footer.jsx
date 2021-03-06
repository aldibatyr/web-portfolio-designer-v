import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import LogoNew from "../Assets/logo";

const Footer = () => {
  const Year = () => {
    let year = new Date();
    return year.getFullYear();
  };
  return (
    <Container as="footer" style={{ marginTop: "100px" }}>
      <Row className="footer-row">
        <Col xs={6} md={4}>
          <div className="logo-wrap">
            <Link to="/">
              <LogoNew />
            </Link>
          </div>
        </Col>
        <Col xs={6} md={4} className="links-to-pages">
          <div className="links-wrap">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </Col>
        <Col xs={12} md={4} className="footer-copy-column">
          <span className="small-text">
            <FontAwesomeIcon icon={faCopyright} /> creativeCircle {Year()}
          </span>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
