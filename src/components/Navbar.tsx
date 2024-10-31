import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CircuitBoard } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  
  return (
    <nav className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <CircuitBoard className="w-8 h-8 text-blue-400" />
            <span className="text-white font-semibold text-lg">CETA Robotics</span>
          </Link>
          <div className="flex space-x-8">
            <Link
              to="/"
              className={`text-sm ${
                location.pathname === '/'
                  ? 'text-blue-400'
                  : 'text-gray-300 hover:text-white'
              } transition-colors`}
            >
              Home
            </Link>
            <Link
              to="/docs"
              className={`text-sm ${
                location.pathname === '/docs'
                  ? 'text-blue-400'
                  : 'text-gray-300 hover:text-white'
              } transition-colors`}
            >
              Documentation
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}