import React, { useState, useEffect } from 'react';
import useActiveSection from '../hooks/useActiveSection';
import '../styles/navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const navLinks = [
    { name: 'ABOUT', id: 'about' },
    { name: 'JOURNEY', id: 'journey' },
    { name: 'EDUCATION', id: 'education' },
    { name: 'EXPERIENCE', id: 'experience' },
    { name: 'WORK', id: 'work' },
    { name: 'SKILLS', id: 'skills' },
    { name: 'CONTACT', id: 'contact' },
  ];

  const sectionIds = navLinks.map(link => link.id);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#hero" className="navbar-logo" aria-label="Go to top">
          YASH SACHAN
        </a>
        
        {/* Desktop Menu */}
        <ul className="navbar-links desktop-menu">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={`#${link.id}`} 
                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                aria-current={activeSection === link.id ? 'page' : undefined}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`} 
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul className="mobile-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={`#${link.id}`} 
                className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
                aria-current={activeSection === link.id ? 'page' : undefined}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
