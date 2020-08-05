import React, { useEffect } from "react";
import gsap from "gsap";
import "./App.scss";
import Navigation from "./components/Navigation";
import { Route } from "react-router-dom";
import Index from "./Pages/Index";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Footer from "./components/Footer";
import AlternateAbout from "./Pages/AlternateAbout";
const routes = [
  { path: "/", name: "Index", Component: Index },
  { path: "/about", name: "About", Component: AlternateAbout },
  { path: "/contact", name: "Contact", Component: Contact },
];
function App() {
  useEffect(() => {
    gsap.to("body", 0, { css: { visibility: "visible" } });
  });

  return (
    <div className="App" style={{ overflow: "hidden" }}>
      <header className="App-header">
        <Navigation />
      </header>
      <main role="main" className="Main-content">
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            <div className="page">
              <Component />
            </div>
          </Route>
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;
