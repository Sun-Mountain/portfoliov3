import React from 'react';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div id="greeting">Hello World!</div>
      <div id="intro">My name is <strong>Nicole Zonnenberg</strong>. I am a Software Engineer.<br />
       I especially like working with CSS, JavaScript, and React.js.</div>
      <nav>
        <Link to="/portfolio" className="nav-link">Portfolio</Link>
        <Link to="/resume" className="nav-link">Resume</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>
      <main>
        <Switch>
        </Switch>
      </main>
    </div>
  );
}

export default App;
