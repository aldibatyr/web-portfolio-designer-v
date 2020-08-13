import React, {useEffect} from 'react';
import gsap from 'gsap';
import { faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
import LinkCard from '../components/LinkCard';
import { faGithub, faLinkedin, faInstagram, faYoutube, faTelegram } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {

  let tl = gsap.timeline();
  useEffect(() => {
    tl
      .fromTo('.spotlight', 0.5, {scale: 0}, {scale: 1} )
      .to('.spotlight', 2 ,{ x: 220, ease: 'power4.inOut'}, '-=0.2')
      .to('.spotlight', 0.5, {scale: 0}, '-=0.2')
      .to('.overlay-animation', 1, {y: '-100vh', ease: 'power4.inOut'})
  }, [])


  return (
    <>
      <div className="overlay-animation">
        <div className="spotlight">

        </div>
        <div className="animation-box">
          <span>Contact Me</span>

        </div>
      </div>
      <section className="Contact-container">
        <div className="text-wrapper">
          <div className="header">
            <h1>Just in case if you have an urge to find me on social media</h1>
          </div>
        </div>
        <div className="links-wrapper">
          <div className="links">
            <LinkCard icon={faEnvelope} href="mailto:aldibatyrbekov@gmail.com" name="aldibatyrbekov@gmail.com" />
            <LinkCard icon={faGithub} href="https://github.com/aldibatyr" name="@aldibatyr" />
            <LinkCard icon={faLinkedin} href="https://linkedin.com/in/aldiyar-batyrbekov" name="Aldiyar Batyrbekov" />
            <LinkCard icon={faTelegram} href="https://t.me/aldibatyr" name="@aldibatyr" />
            <LinkCard icon={faInstagram} href="https://instagram.com/btrbekov" name="@btrbekov" />
          </div>
        </div>

      </section>
    </>
  )
}


export default Contact;