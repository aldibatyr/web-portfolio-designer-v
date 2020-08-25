import React from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useState } from "react";
import { contentfulClient } from "../contentfulClient";
import { Row, Col } from "react-bootstrap";
import {
  ImageWrapper,
  Image,
  ProjectDescription,
  TechnologiesUsedContainer,
  Technology,
} from "./myLayoutCompontents";

const Prototype = ({ prototypeData }) => {
  const controls = useAnimation();
  const [prototypeRow, inView] = useInView();

  useEffect(() => {
    if (inView) {
      console.log("started animation");
      controls.start("visible");
    }
  }, [controls, inView]);
  const [imageURL, setImageURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const fetchImage = async () => {
    try {
      setLoading(true);
      setError(false);
      const asset = await contentfulClient.getAsset(prototypeData.image.sys.id);
      setImageURL(asset.fields.file.url);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchImage();
  }, []);
  return (
    <PrototypeContainer
      ref={prototypeRow}
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
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error occured. </div>
      ) : (
        <Row>
          <Col xs={12} md={7}>
            {
              <ImageWrapper>
                <Image src={`https:${imageURL}?fm=jpg&fl=progressive`} alt="" />
              </ImageWrapper>
            }
          </Col>
          <Col xs={12} md={5}>
            <ProjectDescription>
              <h2>{prototypeData.title}</h2>
              <p>{prototypeData.description}</p>
              <LinksContainer>
                <a
                  href={prototypeData.frontEndRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Front End Repo</span>
                </a>
                <a
                  href={prototypeData.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Visit App</span>
                </a>
              </LinksContainer>
              <TechnologiesUsedContainer>
                {prototypeData.technologies.map((technology, i) => (
                  <Technology key={i}>{technology}</Technology>
                ))}
              </TechnologiesUsedContainer>
            </ProjectDescription>
          </Col>
        </Row>
      )}
    </PrototypeContainer>
  );
};

const PrototypeContainer = styled(motion.div)`
  margin: 25px 0;
`;

const LinksContainer = styled.div`
  a {
    margin-bottom: 20px;
  }
`;
export default Prototype;
