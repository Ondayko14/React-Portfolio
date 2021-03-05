import React, { useState } from 'react';
import About from './components/about';
import Nav from './components/nav';
import Footer from './components/footer';
import Projects from './components/projects';
import Hero from './components/hero';
import './App.css';

function App() {
  return (
    <div>
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
