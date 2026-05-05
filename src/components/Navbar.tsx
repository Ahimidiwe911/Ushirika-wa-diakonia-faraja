import { motion } from 'motion/react';
import { Menu, X, Heart, Globe, Users, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Programs', href: '#programs' },
  { name: 'Impact', href: '#impact' },
  { name: 'Get Involved', href: '#involved' },
  { name: 'News', href: '#news' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="bg-brand-sage p-2 rounded-lg text-white transform transition-transform group-hover:rotate-12">
            <Heart size={24} />
          </div>
          <span className={`font-display text-xl font-bold tracking-tight ${scrolled ? 'text-brand-sage' : 'text-gray-900 md:text-white'}`}>
            Faraja
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-brand-sage ${scrolled ? 'text-gray-600' : 'text-gray-900 md:text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <a href="#involved" className="btn-primary py-2 text-sm">
            Donate
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden p-2 ${scrolled ? 'text-brand-sage' : 'text-gray-900 md:text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 flex flex-col gap-4 md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 font-medium py-2 border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#involved" 
            className="btn-primary text-center mt-4"
            onClick={() => setIsOpen(false)}
          >
            Donate
          </a>
        </motion.div>
      )}
    </nav>
  );
}
