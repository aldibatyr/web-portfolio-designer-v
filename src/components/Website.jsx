import React, { useEffect } from "react";
import { Col } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Website = (props) => {
  const controls = useAnimation();
  const [websitesContainer, inView] = useInView();

  useEffect(() => {
    if (inView) {
      console.log("started animation");
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <Col md={12} lg={4} className="Websites-column">
      <motion.div
        
        ref={websitesContainer}
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
        <img src={props.site.image} alt={props.site.alt} />
        <div className="info">
          <p>
            <b>{props.site.name}</b> {props.site.description}
          </p>
          <a href={props.site.link} target="_blank" rel="noopener noreferrer">
            Visit Website
          </a>
        </div>
      </motion.div>
    </Col>
  );
};

export default Website;
