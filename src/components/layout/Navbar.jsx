import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Box, Volume2, VolumeX, Menu, X, ArrowRight, ChevronRight } from 'lucide-react';
import { useSampleCart } from '../../context/SampleCartContext';
import { useCommandPalette } from '../../context/CommandPaletteContext';
import { useAudioFX } from '../../context/AudioFXContext';
import Logo from '../common/Logo';

export default function Navbar() {
  const location = useLocation();
  const { items, openDrawer } = useSampleCart();
  const { openPalette } = useCommandPalette();
  const { enabled, toggleAudio } = useAudioFX();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Automatically close mobile menu when navigating to a new page
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT US', path: '/about' },
    { name: 'PRODUCTS', path: '/products' },
    { name: 'SERVICES', path: '/process' },
    { name: 'PROJECTS', path: '/projects' },
    { name: 'CONTACT US', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        {/* Brand Logo */}
        <Logo size="medium" onClick={() => setMobileOpen(false)} />


        {/* Desktop Navigation Links */}
        <nav className="nav-menu">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Actions & Utilities */}
        <div className="nav-actions">
          {/* Desktop CTA Get Quote */}
          <Link to="/contact" className="btn btn-royal btn-pill desktop-quote-btn">
            GET A QUOTE →
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="mobile-toggle-btn"
            aria-label="Toggle Navigation Menu"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer / Toggle Bar Menu */}
      {mobileOpen && (
        <div className="mobile-nav-drawer">
          <button
            onClick={() => { setMobileOpen(false); openPalette(); }}
            className="mobile-search-bar-btn"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Search size={16} color="#1D4ED8" />
              <span>Search Products & Technical Specs...</span>
            </div>
            <kbd className="search-kbd">⌘K</kbd>
          </button>

          <nav className="mobile-nav-links">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`mobile-nav-item ${isActive(link.path) ? 'active' : ''}`}
              >
                <span>{link.name}</span>
                <ChevronRight size={16} opacity={0.6} />
              </Link>
            ))}
          </nav>

          <div className="mobile-drawer-footer">
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="btn btn-royal btn-pill mobile-drawer-cta"
            >
              GET A QUOTE & CONSULTATION <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

