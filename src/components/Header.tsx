import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handlePhoneClick = () => {
    const phoneNumber = '082315006331';
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  const handleLocationClick = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-800 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="text-2xl font-bold text-white">
            Savoria
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-yellow-400 transition-colors duration-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-yellow-400 transition-colors duration-300"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="text-white hover:text-yellow-400 transition-colors duration-300"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection('reservations')}
              className="text-white hover:text-yellow-400 transition-colors duration-300"
            >
              Reservations
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-yellow-400 transition-colors duration-300"
            >
              Contact
            </button>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4 text-white">
            <div className="flex items-center space-x-2" onClick={handlePhoneClick}>
              <Phone size={16} />
              <span className="text-sm">082315006331</span>
            </div>
            <div className="flex items-center space-x-2" onClick={handleLocationClick}>
              <MapPin size={16} />
              <span className="text-sm">Rancaekek Kencana</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <nav className="py-4 space-y-2">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-4 py-2 text-white hover:text-yellow-400 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-4 py-2 text-white hover:text-yellow-400 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('menu')}
                className="block w-full text-left px-4 py-2 text-white hover:text-yellow-400 transition-colors"
              >
                Menu
              </button>
              <button
                onClick={() => scrollToSection('reservations')}
                className="block w-full text-left px-4 py-2 text-white hover:text-yellow-400 transition-colors"
              >
                Reservations
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-4 py-2 text-white hover:text-yellow-400 transition-colors"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
