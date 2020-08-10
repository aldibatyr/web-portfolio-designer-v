import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import quest from "../Assets/317quest.png";
import store from "../Assets/317store.png";
import mojo from "../Assets/mojo.png";
import lenz from "../Assets/lenz.png";

import "../styles/Websites.scss";
import Website from "./Website";
import { contentfulClient } from "../contentfulClient";

const Websites = () => {
  const [siteData, setSiteData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const loadWebsites = async () => {
    try {
      setLoading(true);
      setError(false);
      const websitesData = await contentfulClient.getEntries({
        content_type: "websites",
      });
      console.log(websitesData);
      setSiteData(websitesData.items);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
      console.error(error);
    }
  };
  useEffect(() => {
    loadWebsites();
  }, []);

  // const siteData = [
  //   {
  //     image: quest,
  //     name: "317Quest",
  //     alt: "317quest website",
  //     description:
  //       "landing page was developed by Aldiyar Batyrbekov using Gatsby, React, and GSAP animations. The project is hosted through Netlify CDN.",
  //     link: "https://317quest.com",
  //   },
  //   {
  //     image: store,
  //     name: "the317Store",
  //     alt: "317store website",
  //     description:
  //       "is an e-commerce store dedicated to desktop setups. The website is built using Webflow and all the technologies associated with the platform.",
  //     link: "https://the317store.com",
  //   },
  //   {
  //     image: mojo,
  //     name: "Mojo Hookah Lounge",
  //     alt: "Mojo Hookah Lounge website",
  //     description:
  //       "is a small business located in Hollywood, CA. The website was built in collaboration with A7A Creative. The website was built with help of Squarespace platform.",
  //     link: "https://lute-springtail-fxwy.squarespace.com/",
  //   },
  //   {
  //     image: lenz,
  //     name: "Lenz/Construction",
  //     alt: "Lenz/Construction landing page",
  //     description:
  //       "is a landing page project that I have been working on as of late. The website is originally built with PHP, I currenlty am integrating React components to it. GSAP animations ibrary was used for this project.",
  //     link: "https://loving-bohr-ca258d.netlify.app",
  //   },
  // ];

  return (
    <Container as="section" className="Websites" id="websites">
      <h1>Websites</h1>
      <Row style={{ justifyContent: "center", alignContent: "center" }}>
        {/* {siteData.map((site, i) => (
          <Website key={i} site={site} />
        ))} */}
      </Row>
    </Container>
  );
};

export default Websites;
