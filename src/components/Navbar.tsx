import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Stethoscope, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Stethoscope className="h-8 w-8 text-primary" />
              </motion.div>
              <span className={`text-xl font-bold ${
                isScrolled ? 'text-gray-900' : 'text-white'
              } group-hover:text-primary transition-colors`}>
                عيادة النور البيطرية
              </span>
            </Link>
          </div>

          {/* Emergency Contact */}
          <div className={`hidden lg:flex items-center ml-4 ${
            isScrolled ? 'text-gray-900' : 'text-white'
          }`}>
            <Phone className="h-5 w-5 text-primary animate-pulse" />
            <span className="mr-2">للطوارئ: 911</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-1">
            {[
              { path: '/', label: 'الرئيسية' },
              { path: '/services', label: 'خدماتنا' },
              { path: '/about', label: 'من نحن' },
              { path: '/contact', label: 'اتصل بنا' },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-md transition-colors ${
                  isActive(item.path)
                    ? 'text-primary font-bold'
                    : `${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-primary`
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/appointment"
              className="mr-4 btn-primary hover:scale-105 transform transition-transform"
            >
              احجز موعد
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${isScrolled ? 'text-gray-900' : 'text-white'} hover:text-primary transition-colors`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="sm:hidden bg-white border-t"
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              {[
                { path: '/', label: 'الرئيسية' },
                { path: '/services', label: 'خدماتنا' },
                { path: '/about', label: 'من نحن' },
                { path: '/contact', label: 'اتصل بنا' },
                { path: '/appointment', label: 'احجز موعد', isPrimary: true },
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md ${
                    item.isPrimary
                      ? 'btn-primary text-center mt-4'
                      : `${isActive(item.path)
                          ? 'text-primary font-bold'
                          : 'text-gray-700 hover:text-primary'
                        }`
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;