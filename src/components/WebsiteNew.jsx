import React from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { Col, Row } from "react-bootstrap";
import { useEffect } from "react";
import { contentfulClient } from "../contentfulClient";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { ImageWrapper, Image, ProjectDescription } from "./myLayoutCompontents";

const WebsiteNew = ({ websiteData }) => {
  const controls = useAnimation();
  const [websiteRow, inView] = useInView();

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
      const asset = await contentfulClient.getAsset(websiteData.image.sys.id);
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
    <WebsiteContainer
      ref={websiteRow}
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
              <h2>{websiteData.name}</h2>
              <p>{websiteData.description}</p>
              
              <a
                href={websiteData.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Visit site</span>
              </a>
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
    </WebsiteContainer>
  );
};

const WebsiteContainer = styled(motion.div)`
  margin: 25px 0;
`;



export default WebsiteNew;
