import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Apropos from './Components/Apropos';
import Contact from './Components/Contact';
import Navigation from './Components/Navigation';
import Home from './Pages/Home';

const App = () => {
  return (
      <BrowserRouter>
            <Navigation />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/a-propos-de-nous' element={<Apropos />} />
            </Routes>
      </BrowserRouter>
  );
};

export default App;