import React, {useState} from 'react'
import { Col } from 'react-bootstrap'

const Website = (props) => {


  
  return (
    <Col md={12} lg={4} className="Websites-column">
      <img src={props.site.image} alt={props.site.alt}/>
      <div className="info">
        <p><b>{props.site.name}</b> {props.site.description}</p>
        <a href={props.site.link} target="_blank" rel="noopener noreferrer">Visit Website</a>
      </div>
    </Col>
  )
}

export default Website
