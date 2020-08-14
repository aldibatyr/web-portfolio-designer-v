import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import "../styles/Websites.scss";
import Website from "./Website";
import { contentfulClient } from "../contentfulClient";
import WebsiteNew from "./WebsiteNew";

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

  return (
    <Container as="section" id="websites">
      <h1>Websites</h1>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error occured...</div>
      ) : (
        siteData.map((website) => (
          <WebsiteNew key={website.sys.id} websiteData={website.fields} />
        ))
      )}
    </Container>
  );
};

export default Websites;
