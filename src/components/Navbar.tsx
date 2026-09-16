import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const links = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Events & Services', path: '/services' },
  { name: 'Gallery', path: '/gallery' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent',
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-stone-200 py-4'
          : 'bg-white/0 py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <span className={cn(
              "text-xl sm:text-2xl font-serif tracking-tight transition-colors duration-300",
              scrolled || isOpen ? "text-stone-900" : "text-white"
            )}>
              Peak's Marquee <span className="font-light italic text-stone-400">by T.C.M</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-sm font-medium tracking-wide transition-colors duration-300 hover:text-stone-400',
                  scrolled ? 'text-stone-600' : 'text-stone-100',
                  location.pathname === link.path && (scrolled ? 'text-stone-900 font-semibold' : 'text-white font-semibold')
                )}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:+447594292023"
              className={cn(
                "hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                scrolled
                  ? "bg-stone-900 text-white hover:bg-stone-800"
                  : "bg-white text-stone-900 hover:bg-stone-100"
              )}
            >
              <Phone className="w-4 h-4" />
              Book Your Event
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "md:hidden p-2 transition-colors duration-300",
              scrolled || isOpen ? "text-stone-900" : "text-white"
            )}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-stone-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 shadow-xl">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'block px-3 py-4 text-base font-medium border-b border-stone-100 last:border-0',
                    location.pathname === link.path
                      ? 'text-stone-900 bg-stone-50'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-50'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 px-3">
                <a
                  href="tel:+447594292023"
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-md bg-stone-900 text-white font-medium hover:bg-stone-800 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call to Book: +44 7594 292023
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
