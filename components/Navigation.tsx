import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { id: 'journey', label: 'Journey' },
  { id: 'vision', label: 'Vision' },
  { id: 'portfolios', label: 'Portfolios' },
  { id: 'brand', label: 'Brand' },
  { id: 'invest', label: 'Invest' },
];

export const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#" className={`text-xl font-bold tracking-tighter ${scrolled ? 'text-slate-900' : 'text-white'}`}>
            IKA
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-sm font-medium hover:text-brand-orange transition-colors ${
                  scrolled ? 'text-slate-600' : 'text-slate-200'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
               href="#invest"
               className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                   scrolled 
                   ? 'bg-brand-orange text-white hover:bg-orange-600 shadow-md' 
                   : 'bg-white text-slate-900 hover:bg-slate-100'
               }`}
            >
                Start Now
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
                <X className={`w-6 h-6 ${scrolled ? 'text-slate-900' : 'text-white'}`} />
            ) : (
                <Menu className={`w-6 h-6 ${scrolled ? 'text-slate-900' : 'text-white'}`} />
            )}
          </button>
        </div>
      </motion.header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
            <motion.div
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed inset-0 z-40 bg-slate-900 flex flex-col items-center justify-center gap-8 md:hidden"
            >
                {navItems.map((item) => (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={() => setIsOpen(false)}
                        className="text-3xl font-bold text-white hover:text-brand-orange transition-colors"
                    >
                        {item.label}
                    </a>
                ))}
            </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};