import React from 'react';
import About from './components/about';
import Nav from './components/nav';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <div>
      <Nav />
      <main>
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
