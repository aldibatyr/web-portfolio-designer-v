import React from "react";
import { useState } from "react";
import { contentfulClient } from "../contentfulClient";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import MobileApp from "./MobileApp";

const MobileApps = () => {
  const [appsData, setAppsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const loadApps = async () => {
    try {
      setLoading(true);
      setError(false);
      const fetchedApps = await contentfulClient.getEntries({
        content_type: "mobileProject",
      });
      console.log(fetchedApps);
      setAppsData(fetchedApps.items);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
      console.error(error);
    }
  };

  useEffect(() => {
    loadApps();
  }, []);
  return (
    <Container as="section" id="mobileApps">
      <h1>Mobile Apps</h1>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error occured....</div>
      ) : (
        appsData.map((app) => (
          <MobileApp key={app.sys.id} appData={app.fields} />
        ))
      )}
    </Container>
  );
};

export default MobileApps;
