import React, { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import quest from '../Assets/317quest.png';
import store from '../Assets/317store.png';
import mojo from '../Assets/mojo.png';
import gsap from 'gsap';

import '../styles/Websites.scss';
import Website from './Website';

const Websites = () => {

  const siteData = [
    {
      image: quest,
      name: '317Quest',
      alt: '317quest website',
      description: 'landing page was developed by Aldiyar Batyrbekov using Gatsby, React, and GSAP animations. The project is hosted through Netlify CDN.',
      link: 'https://317quest.com'
    },
    {
      image: store,
      name: 'the317Store',
      alt: '317store website',
      description: 'is an e-commerce store dedicated to desktop setups. The website is built using Webflow and all the technologies associated with the platform.',
      link: 'https://the317store.com'
    },
    {
      image: mojo,
      name: 'Mojo Hookah Lounge',
      alt: 'Mojo Hookah Lounge website',
      description: 'is a small business located in Hollywood, CA. The website was built in collaboration with A7A Creative. The website was built with help of Squarespace platform.',
      link: 'https://lute-springtail-fxwy.squarespace.com/'
    }
  ];


  useEffect(() => {
    gsap.to('.Websites-column', 0.8, {delay: 4.7, y: 40, opacity: 1, stagger: 0.2})
  })


  return (
    <Container as="section" className="Websites">
      <h1>Websites</h1>
      <Row>
        {siteData.map((site, i) =>
          <Website key={i} site={site} />
        )}
      </Row>
    </Container>
  )
}

export default Websites