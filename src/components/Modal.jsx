import React from 'react';
import { Modal } from 'react-bootstrap';
import LinkCard from '../components/LinkCard';
import { faGithub, faLinkedin, faInstagram, faYoutube, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


const ModalComponent = (props) => {
  return (
    <Modal
      dialogClassName='modal-card'
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered

    >
      <Modal.Header className='modal-header' closeButton>
        <Modal.Title className='modal-title' id="contained-modal-title-vcenter">
          <h3 style={{fontFamily: 'Montserrat'}}>Contact Links</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="links">
          <LinkCard icon={faEnvelope} href="mailto:aldibatyrbekov@gmail.com" name="aldibatyrbekov@gmail.com" />
          <LinkCard icon={faGithub} href="https://github.com/aldibatyr" name="@aldibatyr" />
          <LinkCard icon={faLinkedin} href="https://linkedin.com/in/aldibatyr" name="Aldiyar Batyrbekov" />
          <LinkCard icon={faTelegram} href="https://t.me/aldibatyr" name="@aldibatyr" />
          <LinkCard icon={faInstagram} href="https://instagram.com/btrbekov" name="@btrbekov" />
          <LinkCard icon={faYoutube} href="https://www.youtube.com/channel/UCtK5rxP5E-FMU9LFpT9S4Rg" name="Mojo Hookah Lounge" />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className='modal-button' onClick={props.onHide}>Close</button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalComponent