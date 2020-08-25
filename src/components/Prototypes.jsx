import React from "react";
import { Container } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import { contentfulClient } from "../contentfulClient";
import Prototype from "./Prototype";

const Prototypes = () => {
  const [prototypesData, setPrototypesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const loadPototypes = async () => {
    try {
      setLoading(true);
      setError(false);
      const fetchedPrototypes = await contentfulClient.getEntries({
        content_type: "prototypes",
      });
      setPrototypesData(fetchedPrototypes.items);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
      console.error(error);
    }
  };
  useEffect(() => {
    loadPototypes();
  }, []);
  return (
    <Container as="section" id="prototypes">
      <h1>Prototypes</h1>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error occured...</div>
      ) : (
        prototypesData.map((prototype) => (
          <Prototype key={prototype.sys.id} prototypeData={prototype.fields} />
        ))
      )}
    </Container>
  );
};

export default Prototypes;
