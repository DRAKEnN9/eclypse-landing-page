// src/App.tsx
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import SilhouetteShowcase from './components/grid';
import ProductCard from './components/ProductCard';
import InfoSection from './components/InfoSection';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';

import Checkout from './pages/checkout';

const App: React.FC = () => {
  const location = useLocation();

  // Don’t show Header on the checkout page
  const showHeader = location.pathname !== '/checkout';

  return (
    <div className="min-h-screen bg-black text-gray-900 font-sans">
      {showHeader && <Header />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <SilhouetteShowcase />
              <ProductCard />
              <InfoSection />
              <Testimonial />
            </>
          }
        />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
