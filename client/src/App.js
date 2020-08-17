import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Presentation from './components/Presentation';
import Work from './components/Work';
import Project from './components/Project';
import Footer from './components/Footer';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Presentation />
        <Work />
        <Project />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
