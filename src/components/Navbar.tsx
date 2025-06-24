// src/components/Navbar.tsx
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import React from 'react';
import useIsMobile from '@/hooks/useIsMobile';

const Navbar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  // Ensure navbar is always dark when footer is active, otherwise
  // theme is derived from activeSection on mobile, and always 'light' on desktop.
  const theme = activeSection === 'footer' ? 'dark' : isMobile ? activeSection : 'light';

  const logoUrl = theme === 'dark' ? '/assets/logo-dark.png' : '/assets/logo.png';

  // --- Derived Colors based on 'theme' (which considers mobile/desktop state) ---
  // These variables explicitly define the colors for different parts of the navbar,
  // ensuring proper contrast and dynamic appearance.
  const navBgColor = theme === 'dark' ? 'bg-executive-navy' : 'bg-white';
  const navTextColor = theme === 'dark' ? 'text-crisp-white' : 'text-executive-navy';
  const menuButtonColor = navTextColor; // Mobile menu button color matches general nav text color

  // Desktop specific colors (static for desktop content, always light theme equivalent)
  const desktopNavBgClass = 'md:bg-white';
  const desktopNavTextClass = 'md:text-executive-navy';
  const desktopLinkActiveIndicatorClass = 'md:bg-executive-navy'; // Underline for active desktop link

  // Mobile Overlay Specific Colors (dynamic based on the current 'theme')
  const mobileOverlayBgClass = navBgColor; // Mobile overlay background matches the main mobile nav background
  const mobileOverlayTextColorClass = navTextColor; // Mobile overlay text color matches the main mobile nav text color
  const mobileOverlayActiveLinkBgClass = theme === 'dark' ? 'bg-white/10' : 'bg-muted-silver/10';
  const mobileOverlayActiveLinkBorderClass = theme === 'dark' ? 'border-crisp-white/30' : 'border-executive-navy/30';

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'RGITMUN\'25', path: '/rgitmun25' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
  ];

  // Function to handle link clicks: closes mobile menu and smooth scrolls to top
  const handleLinkClick = () => {
    setIsOpen(false); // Close mobile menu
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500
                  ${navBgColor} ${navTextColor}
                  ${desktopNavBgClass} ${desktopNavTextClass}
                  border-b-0 md:border-b border-muted-silver/20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Desktop Logo and Name */}
          <Link to="/" className={`hidden md:flex items-center space-x-3 ${desktopNavTextClass}`} onClick={handleLinkClick}>
            <img src={logoUrl} alt="RGIT MUNSOC Logo" className="h-10 w-10" />
            <span className="text-2xl font-bold font-playfair">RGIT MUNSOC</span>
          </Link>

          {/* Mobile Logo Only */}
          <Link to="/" className={`md:hidden flex items-center ${navTextColor}`} onClick={handleLinkClick}>
            <img src={logoUrl} alt="RGIT MUNSOC Logo" className="h-10 w-10" />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={handleLinkClick} // Added onClick for smooth scroll
                className={`relative px-3 py-2 text-base font-semibold transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-cool-light-blue'
                    : `${desktopNavTextClass} hover:text-cool-light-blue` // Ensures base color for non-active links
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className={`absolute bottom-0 left-0 right-0 h-0.5 ${desktopLinkActiveIndicatorClass}`}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 ${menuButtonColor} hover:text-cool-light-blue transition-colors`}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            // Mobile overlay background and text are now explicitly dynamic for visibility
            className={`md:hidden fixed inset-0 top-16 ${mobileOverlayBgClass} z-40 overflow-y-auto flex flex-col items-center justify-center p-4`}
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={handleLinkClick} // Added onClick for smooth scroll
                className={`block w-full text-center px-3 py-4 text-2xl font-bold transition-colors duration-200 my-2 rounded-lg ${
                  location.pathname === item.path
                    ? `${mobileOverlayTextColorClass} ${mobileOverlayActiveLinkBgClass} rounded ${mobileOverlayActiveLinkBorderClass}`
                    : `${mobileOverlayTextColorClass} hover:text-cool-light-blue` // Crucial for non-active links' visibility
                }`}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;