import React from 'react';
import { Link } from 'react-router-dom';
import Cetalogo from './Cetalogo.png';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 mt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo and Title */}
          <Link to="/" className="flex items-center space-x-4">
            <img src={Cetalogo} alt="CETA Logo" className="w-21 h-20" />
            <span className="text-white font-bold text-3xl">MCI Ceta Robotics</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex space-x-20">
            <Link
              to="/"
              className="relative text-xl font-semibold text-white transition-all duration-200 group"
            >
              Home
              <span
                className="absolute left-0 -bottom-0.5 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"
              ></span>
            </Link>
            <Link
              to="/docs"
              className="relative text-xl font-semibold text-white transition-all duration-200 group"
            >
              Documentation
              <span
                className="absolute left-0 -bottom-0.5 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"
              ></span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
