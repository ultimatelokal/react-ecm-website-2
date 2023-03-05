import React from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import Events from './components/pages/Events';
import HomePage from './components/pages/HomePage';
import Footer from './components/Layout/Footer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/About-us' element={<AboutUs />} />
          <Route path='/Events' element={<Events />} />
          <Route path='/Contact-us' element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router >




    </>
  );
}

export default App;
