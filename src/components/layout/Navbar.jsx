import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Topics', path: '/topics' },
    { name: 'Dates', path: '/dates' },
    { name: 'Registration', path: '/registration' },
    { name: 'Committee', path: '/committee' },
  ];

  const isDarkNav = isScrolled || location.pathname !== '/';

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isDarkNav ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link to="/" className={`font-display font-bold text-2xl tracking-wider text-primary-800`}>
              ETAEE <span className="text-secondary-500">2027</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`font-medium transition-colors hover:text-secondary-600 ${location.pathname === link.path ? 'text-secondary-600' : 'text-slate-700'}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={'text-slate-800'} size={24} />
            ) : (
              <Menu className={'text-slate-800'} size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`font-medium block py-2 border-b border-slate-100 ${location.pathname === link.path ? 'text-secondary-600' : 'text-slate-700'} hover:text-primary-600`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
