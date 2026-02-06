
import React, { useState, useEffect } from 'react';
import { BUSINESS_INFO } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="text-3xl font-bold gold-gradient bg-clip-text text-transparent italic drop-shadow-sm leading-none" style={{ fontFamily: 'Playfair Display' }}>
            {BUSINESS_INFO.shortName}
          </div>
          <div className={`hidden md:block text-xs font-bold uppercase tracking-widest ${isScrolled ? 'text-gray-600' : 'text-saffron'}`}>
            Mistanna Bhandar
          </div>
        </div>

        <nav className="hidden lg:flex items-center space-x-8 text-sm font-bold uppercase tracking-wider">
          <a href="#home" className="hover:text-saffron transition-colors">Home</a>
          <a href="#menu" className="hover:text-saffron transition-colors">Menu</a>
          <a href="#heritage" className="hover:text-saffron transition-colors">Heritage</a>
          <a href="#contact" className="hover:text-saffron transition-colors">Contact</a>
        </nav>

        <div className="flex items-center">
          <div className="flex items-center bg-green-100 px-3 py-1 rounded-full border border-green-200 animate-pulse">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            <span className="text-[10px] md:text-xs font-bold text-green-700 tracking-tighter uppercase">Open Now</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
