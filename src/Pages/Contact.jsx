import React from 'react'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import LinkCard from '../components/LinkCard';
import { faGithub, faLinkedin, faInstagram, faYoutube, faTelegram } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {


  return (
    <section className="Contact-container">
      <div className="text-wrapper">
        <div className="header">
          <h1>Just in case if you have an urge to find me on some social medias</h1>
        </div>
      </div>
      <div className="links-wrapper">
        <div className="links">
          <LinkCard icon={faEnvelope} href="mailto:aldibatyrbekov@gmail.com" name="aldibatyrbekov@gmail.com"/>
          <LinkCard icon={faGithub} href="https://github.com/aldibatyr" name="@aldibatyr"/>
          <LinkCard icon={faLinkedin} href="https://linkedin.com/in/aldibatyr" name="Aldiyar Batyrbekov"/>
          <LinkCard icon={faTelegram} href="https://t.me/aldibatyr" name="@aldibatyr" />
          <LinkCard icon={faInstagram} href="https://instagram.com/btrbekov" name="@btrbekov"/>
          <LinkCard icon={faYoutube} href="https://www.youtube.com/channel/UCtK5rxP5E-FMU9LFpT9S4Rg" name="Mojo Hookah Lounge"/>
        </div>
      </div>

    </section>
  )
}


export default Contact;