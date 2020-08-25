import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { contentfulClient } from "../contentfulClient";
import { Row, Col } from "react-bootstrap";
import {
  ImageWrapper,
  Image,
  ProjectDescription,
  TechnologiesUsedContainer,
  Technology,
} from "./myLayoutCompontents";

const MobileApp = ({ appData }) => {
  const controls = useAnimation();
  const [appContainer, inView] = useInView();

  useEffect(() => {
    if (inView) {
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
      const asset = await contentfulClient.getAsset(appData.image.sys.id);
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
    <AppContainer
      ref={appContainer}
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
        <div>Error occured... </div>
      ) : (
        <Row>
          <Col xs={12} md={7}>
            <ImageWrapper>
              <Image src={`https:${imageURL}?fm=jpg&fl=progressive`} alt="" />
            </ImageWrapper>
          </Col>
          <Col xs={12} md={5}>
            <ProjectDescription>
              <h2>{appData.name}</h2>
              <p>{appData.description}</p>
              {appData.link && (
                <a
                  href={appData.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontFamily: "Poppins" }}
                >
                  Visit Project
                </a>
              )}
              <TechnologiesUsedContainer>
                {appData.technologies.map((technology, i) => (
                  <Technology key={i}>{technology}</Technology>
                ))}
              </TechnologiesUsedContainer>
            </ProjectDescription>
            <span>
              Co-developed with{" "}
              <a
                href="https://a7acreative.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                a7acreative.com
              </a>
            </span>
          </Col>
        </Row>
      )}
    </AppContainer>
  );
};

const AppContainer = styled(motion.div)`
  margin: 25px 0;
`;

export default MobileApp;
