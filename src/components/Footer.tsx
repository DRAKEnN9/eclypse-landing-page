import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-serif mb-4">Eclipse®</h3>
            <p className="text-gray-400 mb-4">
              Rooted in quiet luxury, designed for timeless elegance.
            </p>
            <div className="flex space-x-4">
              {['twitter', 'instagram', 'pinterest'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="text-gray-400 hover:text-white"
                  whileHover={{ y: -3 }}
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="uppercase tracking-wider text-sm mb-4">Shop</h4>
            <ul className="space-y-2">
              {['All Collections', 'New Arrivals', 'Bestsellers', 'Seasonal Edits'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="uppercase tracking-wider text-sm mb-4">Information</h4>
            <ul className="space-y-2">
              {['About Us', 'Journal', 'Sustainability', 'Careers'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="uppercase tracking-wider text-sm mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe for exclusive offers and early access to new collections.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 bg-gray-800 text-white placeholder-gray-500 w-full focus:outline-none"
              />
              <button 
                type="submit"
                className="bg-white text-black px-4 py-2 hover:bg-gray-200 transition-colors"
              >
                →
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Eclipse®. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {['Privacy Policy', 'Terms of Service', 'Accessibility'].map((item) => (
              <a 
                key={item}
                href="#" 
                className="text-gray-500 text-sm hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;