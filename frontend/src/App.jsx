import React from 'react';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Signup from './pages/Signup';
import Signin from './pages/Signin';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
