import React, { useState } from 'react';
import About from './components/about';
import Nav from './components/nav';
import Footer from './components/footer';
import Projects from './components/projects';
import Contact from './components/contact';
import './App.css';

const Page = ({ name }) => {
  switch (name) {
    case 'About':
      return <About />;
    case 'Work':
      return <Projects />;
    case 'Contact':
      return <Contact />;
    default:
      return <About/>;
  }
}

function App() {
  const [currentPage, setCurrentPage] = useState('About');
  const handlePageChange = (value) => setCurrentPage(value);

  return (
    <div>
      <Nav handlePageChange={handlePageChange} />
      <div>
        <Page name={currentPage} />
      </div>
      <Footer handlePageChange={handlePageChange}/>
    </div>
  );
}

export default App;
