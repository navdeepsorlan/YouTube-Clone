import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
      </Routes>
    </Router>
    <Footer/>
    </>
  );
}

export default App;