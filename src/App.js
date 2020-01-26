import React from "react";
import "./App.scss";
import Navigation from "./components/Navigation";
import { Switch, Route } from "react-router-dom";
import Index from "./Pages/Index";
import Info from "./Pages/Info";
import Contact from "./Pages/Contact";
import Footer from "./components/Footer";

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
      <Footer/>
    </div>
  );
}

export default App;
