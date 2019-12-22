import React from 'react';
import './App.css';
import Logo from './components/Logo';
import Navigation from './components/Navigation'
import Hero from './components/Hero'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo/>
      </header>
      <main role="main" className="Main-content">
        <Navigation/>
        <Hero/>
      </main>
    </div>
  );
}

export default App;
