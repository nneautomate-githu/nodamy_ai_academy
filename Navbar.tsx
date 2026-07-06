import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';

interface NavbarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  onEnrollClick: (course: any) => void;
}

export default function Navbar({ currentPage, onPageChange, onEnrollClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scrolling to add borders/glass effects
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'courses', label: 'Courses' },
    { id: 'tools', label: 'AI Tools' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'results', label: 'Student Results' },
    { id: 'resources', label: 'Resources' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onPageChange(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled 
            ? 'py-3 bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-100' 
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="cursor-pointer" onClick={() => handleNavClick('home')}>
              <Logo size="md" />
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1.5">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`relative px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-colors ${
                      isActive 
                        ? 'text-purple-600' 
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 bg-purple-50/70 border border-purple-100/50 rounded-full -z-10"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Sticky "Start Learning" Button (Desktop) */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={() => handleNavClick('courses')}
                className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white text-xs font-bold px-5 py-2.5 rounded-full transition-all flex items-center gap-1.5 shadow-md shadow-purple-200/50 hover:shadow-lg hover:-translate-y-0.5 active:scale-95"
                id="start-learning-desktop-btn"
              >
                Start Learning <ArrowRight size={13} />
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => handleNavClick('courses')}
                className="bg-gradient-to-r from-purple-600 to-blue-500 text-white text-[10px] font-bold px-3 py-2 rounded-full transition-all flex items-center gap-1 shadow-sm shadow-purple-150"
                id="start-learning-mobile-direct-btn"
              >
                Start Learning
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-full text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Toggle menu"
                id="hamburger-toggle-btn"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm z-30 lg:hidden"
            />

            {/* Slide-out Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-3/4 max-w-sm bg-white shadow-2xl z-40 p-6 flex flex-col justify-between lg:hidden border-l border-slate-100"
            >
              <div>
                {/* Header inside drawer */}
                <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                  <Logo size="sm" />
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 rounded-full text-slate-500 hover:bg-slate-100"
                    id="drawer-close-btn"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Navigation Items */}
                <nav className="flex flex-col gap-1.5 py-6">
                  {navItems.map((item) => {
                    const isActive = currentPage === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleNavClick(item.id)}
                        className={`text-left px-4 py-3 rounded-2xl text-sm font-semibold tracking-wide transition-all ${
                          isActive
                            ? 'bg-purple-50 text-purple-700 font-bold border-l-4 border-purple-600'
                            : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
                        }`}
                      >
                        {item.label}
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Footer inside drawer */}
              <div className="pt-6 border-t border-slate-100 space-y-4">
                <div className="flex items-center gap-2 p-3.5 bg-purple-50/50 rounded-2xl border border-purple-100/30">
                  <Sparkles size={16} className="text-purple-600 animate-pulse" />
                  <div>
                    <p className="text-xs font-bold text-slate-800">Enrollment Active</p>
                    <p className="text-[10px] text-slate-500">Master AI skills and build portfolios today.</p>
                  </div>
                </div>
                <button
                  onClick={() => handleNavClick('courses')}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white text-xs font-bold py-3.5 rounded-2xl transition-all flex items-center justify-center gap-1.5 shadow-md shadow-purple-100"
                  id="start-learning-drawer-btn"
                >
                  Start Learning Now <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
