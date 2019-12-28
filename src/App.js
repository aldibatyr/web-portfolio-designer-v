import React from "react";
import "./App.css";
import Logo from "./components/Logo";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Stitch from "./components/Stitch";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
      </header>
      <main role="main" className="Main-content">
        <Hero />
        <Navigation />
        <Stitch name="about" />
        <About />
        <Stitch name="skills" />
        <Skills />
        <Stitch name="projects" />
        <Projects/>
      </main>
    </div>
  );
}

export default App;
