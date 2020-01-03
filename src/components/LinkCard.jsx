import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LinkCard = ({icon, href, name}) => {
  return (
    <div className="link-card">
            <div className="inner-pill">
              <div className="icon-wrapper">
                <FontAwesomeIcon icon={icon} />
              </div>
              <div className="pill-text">
                <a href={href} target="_blank" rel="noopener noreferrer">{name}</a>
              </div>
            </div>
          </div>
  )
}

export default LinkCard;