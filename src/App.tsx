import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Documentation from './components/Documentation';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/docs" element={<Documentation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;