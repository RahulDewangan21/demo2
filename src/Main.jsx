import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';              // your login component in src/
import Home from './components/Home'; // Home component inside src/components
import Display from './components/Display'; // Display component inside src/components

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Home />} />
      <Route path="/display" element={<Display />} /> {/* New route */}
    </Routes>
  );
};

export default Main;
