import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import { Switch, Route } from "react-router-dom";
import Index from "./Pages/Index";
import Info from "./Pages/Info";
import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
      <main role="main" className="Main-content">
        <Switch>
          <Route exact path="/">
            <Index />
          </Route>
          <Route path="/info">
            <Info />
          </Route>
          <Route parth="/contact">
            <Contact/>
          </Route>
        </Switch>
      </main>
      <footer className="App-footer">
        <Col xs={12} md={3} className="logo-quarter">
          <div className="logo-text">
            <span>ALDIBA</span>
          </div>
        </Col>
        <Col xs={12} md={6} className="social-media-column">
          <div className='icon-box'>
            <div className="overlay"></div>
            <a href="https://github.com/aldibatyr"><FontAwesomeIcon icon={faGithub} /></a>
          </div>
          <div className='icon-box'>
            <div className="overlay"></div>
            <a href="https://linkedin.com/in/aldibatyr"><FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
          <div className='icon-box'>
            <div className="overlay"></div>
            <a href="https://www.youtube.com/channel/UCtK5rxP5E-FMU9LFpT9S4Rg"><FontAwesomeIcon icon={faYoutube} /></a>
          </div>
          <div className='icon-box'>
            <div className="overlay"></div>
            <a href="https://instagram.com/btrbekov"><FontAwesomeIcon icon={faInstagram} /></a>
          </div>
        </Col>
        <Col xs={12} md={3} className="thank-you">
          <span>THANK YOU FOR STOPPING BY</span>
        </Col>
      </footer>
    </div>
  );
}

export default App;
