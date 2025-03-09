
import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen, Bell, ShoppingCart, Calendar, QrCode } from 'lucide-react';
import upsaLogo from '/lovable-uploads/7edcbddd-abf2-44c4-8066-32edd1d5304c.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Attendance', icon: <QrCode className="w-5 h-5" /> },
    { name: 'Study Assistant', icon: <BookOpen className="w-5 h-5" /> },
    { name: 'Events', icon: <Calendar className="w-5 h-5" /> },
    { name: 'Marketplace', icon: <ShoppingCart className="w-5 h-5" /> },
    { name: 'Notifications', icon: <Bell className="w-5 h-5" /> },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img src={upsaLogo} alt="UPSA Logo" className="h-12 mr-2" />
            <span className="font-bold text-xl text-upsa-blue hidden sm:flex items-center gap-1">
              <span className="text-2xl">IT13</span>
              <span className="text-upsa-gold">UPSA</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a 
                key={index}
                href={`#${item.name.toLowerCase().replace(' ', '-')}`}
                className="flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-upsa-blue transition-colors duration-200"
              >
                {item.icon}
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-fade-in-up">
          <div className="py-3 px-4 space-y-3">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.name.toLowerCase().replace(' ', '-')}`}
                className="flex items-center gap-2 py-2 text-gray-700 hover:text-upsa-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.icon}
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
