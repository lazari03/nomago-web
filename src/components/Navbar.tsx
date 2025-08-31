
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { ColorTokens } from '../theme/colors';
import { NAVBAR_MENU } from './navbarMenu';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="w-full flex items-center justify-between py-3 px-4 md:px-8 bg-white border-b border-gray-100 shadow-sm">
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-full bg-purple flex items-center justify-center text-white font-bold text-base">F</div>
        <span className="font-bold text-lg text-darkGray tracking-tight">Nomago</span>
      </div>
      <ul className="hidden md:flex gap-5 text-darkGray font-medium text-sm">
        {NAVBAR_MENU.map(({ label, href, isLink }) => (
          <li key={label}>
            {isLink ? (
              <Link href={href} className="hover:text-blue transition-colors">{label}</Link>
            ) : (
              <a href={href} className="hover:text-blue transition-colors">{label}</a>
            )}
          </li>
        ))}
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
  <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center gap-8 md:hidden animate-fade-in shadow-lg overflow-x-hidden w-screen max-w-full">
          <button
            className="absolute top-6 right-6 text-3xl text-darkGray focus:outline-none"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            &times;
          </button>
          <nav className="flex flex-col items-center gap-6 w-full">
            {NAVBAR_MENU.map(({ label, href, isLink }) => (
              isLink ? (
                <Link key={label} href={href} className="text-2xl font-semibold text-darkGray hover:text-blue transition-colors w-full text-center py-2" onClick={() => setMenuOpen(false)}>{label}</Link>
              ) : (
                <a key={label} href={href} className="text-2xl font-semibold text-darkGray hover:text-blue transition-colors w-full text-center py-2" onClick={() => setMenuOpen(false)}>{label}</a>
              )
            ))}
            <a
              href="#get-app"
              className="text-white px-6 py-3 rounded-xl font-semibold shadow-sm transition text-center mt-4 w-4/5"
              style={{ background: ColorTokens.purple }}
              onClick={() => setMenuOpen(false)}
            >
              Get the App
            </a>
          </nav>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
