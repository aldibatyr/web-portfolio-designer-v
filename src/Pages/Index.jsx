import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Websites from "../components/Websites";
import gsap from "gsap";

const Index = () => {
  const [reload, setReload] = useState(true);

  let tl = gsap.timeline();
  useEffect(() => {
    tl.fromTo(".spotlight", 0.5, { scale: 0 }, { scale: 1 })
      .to(".spotlight", 2, { x: 220, ease: "power4.inOut" }, "-=0.2")
      .to(".spotlight", 0.5, { scale: 0 }, "-=0.2")
      .to(".overlay-animation", 1, { y: "-100vh", ease: "power4.inOut" });
  }, []);
  return (
    <>
      <div className="overlay-animation">
        <div className="spotlight"></div>
        <div className="animation-box">
          <span>Hello There</span>
        </div>
      </div>
      <Hero />
      <Websites />
      <Projects />
    </>
  );
};

export default Index;
