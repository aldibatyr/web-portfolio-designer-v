import React from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { Col, Row } from "react-bootstrap";
import { useEffect } from "react";
import { contentfulClient } from "../contentfulClient";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

const WebsiteNew = ({ websiteData }) => {
  const controls = useAnimation();
  const [websiteRow, inView] = useInView();

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
          <Col xs={12} md={5}>
            <WebsiteDescription>
              <h2>{websiteData.name}</h2>
              <p>{websiteData.description}</p>
              <a
                href={websiteData.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Visit site</span>
              </a>
            </WebsiteDescription>
          </Col>
          <Col xs={12} md={7}>
            {
              <ImageWrapper>
                <WebsiteImage
                  src={`https:${imageURL}?fm=jpg&fl=progressive`}
                  alt=""
                />
              </ImageWrapper>
            }
          </Col>
        </Row>
      )}
    </WebsiteContainer>
  );
};

const WebsiteContainer = styled(motion.div)`
  margin: 25px 0;
`;

const WebsiteDescription = styled.div`
  box-shadow: 6px 6px 16px #d1cdd780, -6px -6px 16px #ffffff80;
  border-radius: 30px;
  padding: 20px 15%;

  h2 {
    font-family: "Montserrat", sans-serif;
    background: #c04848;
    /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #480048, #c04848);
    /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #480048, #c04848);
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-decoration: underline;
    text-align: center;

    font-weight: bolder;
  }

  p {
    font-family: "Poppins";
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 10px;
    height: 100px;
    background-color: #eeeeee;
    text-align: center;
    transition: 0.3s all ease-in-out;
    box-shadow: 6px 6px 16px #d1cdd780, -6px -6px 16px #ffffff80;
    border-radius: 50px;
    text-decoration: none;
    &:hover {
      background: linear-gradient(to right, #480048, #c04848);
      span {
        color: #eeeeee;
      }
    }
    span {
      color: black;
      font-family: "Poppins";
      font-size: 16px;
    }
  }
`;

const WebsiteImage = styled(motion.img)`
  max-width: 100%;
  height: auto;
  overflow: hidden;
`;

const ImageWrapper = styled(motion.div)`
  border-radius: 30px;
  box-shadow: 6px 6px 16px #d1cdd780, -6px -6px 16px #ffffff80;
  overflow: hidden;
`;

export default WebsiteNew;
