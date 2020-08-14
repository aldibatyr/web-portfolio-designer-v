import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import "../styles/Navigation.scss";
import LogoNew from "../Assets/logo";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { motion } from "framer-motion";

const Navigation = () => {
  const [homeTapped, setHomeTapped] = useState(false);

  const homeTappedVariants = {
    open: { x: 0, opacity: 1, scale: 1 },
    closed: { x: "-100%", opacity: 0, scale: 0 },
  };
  const logoWrapperVariants = {
    open: { width: "132px" },
    closed: { width: "52px" },
  };
  return (
    <Container>
      <StyledNav
        initial={{
          y: -100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          delay: 4,
        }}
      >
        <Link to="/">
          <LogoNew />
        </Link>
        <NavigationLinks>
          <LinkBox whileHover={{ scale: 1.05 }}>
            <Link to="/about">ABOUT</Link>
          </LinkBox>
          <LinkBox whileHover={{ scale: 1.05 }}>
            <Link to="/contact">CONTACT</Link>
          </LinkBox>
        </NavigationLinks>
      </StyledNav>
    </Container>
  );
};

const StyledNav = styled(motion.nav)`
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavigationLinks = styled.div`
  display: flex;
`;

const LinkBox = styled(motion.div)`
  padding: 5px 10px;
  a {
    font-family: "Montserrat";
    font-size: 20px;
    font-weight: bold;
    color: #8a36d8;
    text-decoration: none;
  }
`;

export default Navigation;
