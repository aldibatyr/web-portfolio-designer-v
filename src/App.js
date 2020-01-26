import React from "react";
import "./App.scss";
import Navigation from "./components/Navigation";
import { Route } from "react-router-dom";
import {CSSTransition} from 'react-transition-group';
import Index from "./Pages/Index";
import Info from "./Pages/Info";
import Contact from "./Pages/Contact";
import Footer from "./components/Footer";
const routes = [
  { path: '/', name: 'Index', Component: Index },
  { path: '/info', name: 'Info', Component: Info },
  { path: '/contact', name: 'Contact', Component: Contact }
];
function App() {


  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
      <main role="main" className="Main-content">
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={300}
                  classNames="page"
                  unmountOnExit
                >
                  <div className="page">
                    <Component />
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}
      </main>
      <Footer/>
    </div>
  );
}

export default App;
