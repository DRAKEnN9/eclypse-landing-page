// src/components/Header.tsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiShoppingCart, FiMenu } from 'react-icons/fi';

import logo from '@/assets/images/204b51ca3d6365117ecab61115aa49089a454cda.jpg';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      className="fixed top-0 w-full z-50  bg-opacity-20 backdrop-blur-md transition-all duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src={logo} alt="Eclypse Logo" className="h-10 w-auto rounded-md" />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex space-x-8">
          
        </nav>

        {/* Actions & Mobile Menu */}
        <div className="flex text-xl font-sans items-center space-x-14">
          <a
            href="#about"
            className="text-white max-md:hidden tracking-wide hover:text-gray-400 transition-colors"
          >
            About us
          </a>
          <a
            href="#wishlist"
            className="text-white max-md:hidden hover:text-gray-400 transition-colors"
          >
            Waitlist
          </a>
          <a
            href="#cart"
            className="text-white max-md:hidden hover:text-gray-400 transition-colors"
          >
            Cart
          </a>
          <a
            href="#shop"
            className="hidden w-24 text-center bg-white md:inline-block px-5 py-2 border border-white text-black uppercase tracking-wide rounded-lg transition-colors hover:bg-red-600 hover:border-red-600"
          >
            BUY
          </a>
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen((o) => !o)}
          >
            <FiMenu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white bg-opacity-90 backdrop-blur-md">
          <nav className="flex flex-col space-y-2 p-4">
            <a href="#about" className="text-black uppercase tracking-wide hover:text-red-600">
              About
            </a>
            <a href="#wishlist" className="text-black uppercase tracking-wide hover:text-red-600">
              Wishlist
            </a>
            <a href="#cart" className="text-black uppercase tracking-wide hover:text-red-600">
              Cart
            </a>
            <a href="#shop" className="text-black uppercase tracking-wide hover:text-red-600">
              Shop
            </a>
          </nav>
        </div>
      )}
    </motion.header>
  );
};

export default Header;
