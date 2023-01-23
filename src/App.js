import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Insolites from './pages/Insolites';
import Classiques from './pages/Classiques';
import Service from  './pages/Service'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/services" exact element={<Service />} />
        <Route path="/hébergements-insolites" exact element={<Insolites />} />
        <Route path="/hébergements-classiques" exact element={<Classiques />} />
      </Routes>
    </BrowserRouter>    
  )
}

export default App;
