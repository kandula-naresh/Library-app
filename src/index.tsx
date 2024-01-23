import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Navbar from './components/Navbar';
import { ExploreTopBooks } from './components/ExploreTopBooks';
import { Carousel } from './components/Carousel';
import { Heros } from './components/Heros';
import { LibraryServices } from './components/LibraryServices';
import { Footer } from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Navbar />
    <ExploreTopBooks/>
    <Carousel/>
    <Heros/>
    <LibraryServices/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);


