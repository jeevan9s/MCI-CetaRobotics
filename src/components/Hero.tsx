import React from 'react';
import { Link } from 'react-router-dom';
import Cetalogo from './Cetalogo.png';

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Solid black background */}
      <div className="absolute inset-0 bg-black" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-16">
        <div className="text-center">
          <div className="relative mb-4">
            <img src={Cetalogo} alt="CETA Logo" className="w-44 h-40 mx-auto" />
            <div className="absolute -inset-4 bg-blue-500/20 blur-xl rounded-full" />
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              MCI CETA Robotics
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Martingrove Collegiate Institute's CETA robotics team, participating in the line following robot competition.
          </h2>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/docs"
              className="px-8 py-3 bg-blue-600/10 border border-blue-500/20 text-blue-400 rounded-lg transition-all hover:bg-blue-600/20 hover:border-blue-500/30 hover:scale-105"
            >
              View Documentation
            </Link>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-cyan-400 rounded-full animate-pulse delay-150" />
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-300" />
      </div>
    </div>
  );
}
