import React from 'react';
import { CircuitBoard } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(24,24,27,0.7),rgba(24,24,27,0.9))]" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTIgMmg1NnY1NkgyVjJ6IiBmaWxsPSIjMjAyMDIwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')] opacity-40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-16">
        <div className="text-center">
          <div className="relative mb-8">
            <CircuitBoard className="w-20 h-20 text-blue-400 mx-auto transform hover:scale-110 transition-transform duration-300" />
            <div className="absolute -inset-4 bg-blue-500/20 blur-xl rounded-full" />
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              CETA Robotics
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Martingrove Collegiate Institute's premier robotics team, pushing the boundaries of innovation
          </h2>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/docs"
              className="px-8 py-3 bg-blue-600/10 border border-blue-500/20 text-blue-400 rounded-lg transition-all hover:bg-blue-600/20 hover:border-blue-500/30 hover:scale-105"
            >
              View Documentation
            </Link>
            <a
              href="#contact"
              className="px-8 py-3 bg-gray-800/50 text-gray-300 rounded-lg transition-all hover:bg-gray-800/70 hover:text-white hover:scale-105"
            >
              Join Our Team
            </a>
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