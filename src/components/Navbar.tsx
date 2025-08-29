
"use client";
import React, { useState } from 'react';
import { ColorTokens } from '../theme/colors';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="w-full flex items-center justify-between py-3 px-4 md:px-8 bg-white border-b border-gray-100 shadow-sm">
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-full bg-purple flex items-center justify-center text-white font-bold text-base">F</div>
        <span className="font-bold text-lg text-darkGray tracking-tight">Nomago</span>
      </div>
      <ul className="hidden md:flex gap-5 text-darkGray font-medium text-sm">
        <li><a href="/" className="hover:text-blue transition-colors">Home</a></li>
        <li><a href="#about" className="hover:text-blue transition-colors">About us</a></li>
        <li><a href="/listings" className="hover:text-blue transition-colors">Listings</a></li>
        <li><a href="#blog" className="hover:text-blue transition-colors">Blog</a></li>
        <li><a href="#contact" className="hover:text-blue transition-colors">Contact</a></li>
      </ul>
      <a
        href="#get-app"
        className="ml-2 text-white px-4 py-1.5 rounded-md font-semibold shadow-sm transition hidden md:block text-sm"
        style={{ background: ColorTokens.purple }}
      >
        Get the App
      </a>
      {/* Mobile menu button */}
      <button
        className="md:hidden ml-2 p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple"
        aria-label="Open menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="absolute top-16 right-4 bg-white border border-gray-100 rounded-lg shadow-lg p-4 z-50 flex flex-col gap-3 md:hidden animate-fade-in">
          <a href="/" className="hover:text-blue transition-colors" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" className="hover:text-blue transition-colors" onClick={() => setMenuOpen(false)}>About us</a>
          <a href="/listings" className="hover:text-blue transition-colors" onClick={() => setMenuOpen(false)}>Listings</a>
          <a href="#blog" className="hover:text-blue transition-colors" onClick={() => setMenuOpen(false)}>Blog</a>
          <a href="#contact" className="hover:text-blue transition-colors" onClick={() => setMenuOpen(false)}>Contact</a>
          <a
            href="#get-app"
            className="text-white px-4 py-2 rounded-md font-semibold shadow-sm transition text-center mt-2"
            style={{ background: ColorTokens.purple }}
            onClick={() => setMenuOpen(false)}
          >
            Get the App
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
