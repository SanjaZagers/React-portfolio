
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from "./pages/About"; 
import Contact from "./pages/Contact"; 
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
<div>
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="Contact" element={<Contact />} />
    </Routes>
    <Footer />
  </Router>
</div>

  );
}

export default App;
