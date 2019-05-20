import React from 'react';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div id="greeting">Hello World!</div>
      <div id="intro">My name is <strong>Nicole Zonnenberg</strong>. I am a Software Engineer. I especially like CSS, JavaScript, and React.js.</div>
      <nav>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <main>
        <Switch>
        </Switch>
      </main>
    </div>
  );
}

export default App;
