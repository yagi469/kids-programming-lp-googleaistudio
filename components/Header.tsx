import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '特徴', href: '#features' },
    { name: 'メリット・デメリット', href: '#merits' },
    { name: 'AI相談室', href: '#ai-consultant' },
    { name: '体験予約', href: '#reservation', primary: true },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-orange-500 text-white p-2 rounded-lg">
              <Rocket size={24} />
            </div>
            <span className="font-bold text-xl sm:text-2xl text-slate-800 tracking-tight">
              Scratch Kids Lab
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  link.primary 
                    ? 'bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-full shadow-lg hover:shadow-orange-500/30 transform hover:-translate-y-0.5 transition-all' 
                    : 'text-slate-600 hover:text-orange-500'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100 p-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-center py-3 rounded-lg font-medium ${
                link.primary 
                  ? 'bg-orange-500 text-white' 
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};