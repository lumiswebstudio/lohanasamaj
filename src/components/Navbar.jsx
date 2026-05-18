import { useState, useEffect } from 'react';
import { Menu, X, Landmark, Users } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  const navLinks = [
    { name: 'Heritage', href: '#heritage' },
    { name: 'Events', href: '#events' },
    { name: 'Initiatives', href: '#initiatives' },
    { name: 'Connect', href: '#contact' }
  ];

  return (
    <nav className={`navbar-container ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <a href="#" className="nav-logo">
          <Landmark className="logo-icon" size={24} />
          <span className="logo-text serif-title">
            Lohana <span className="text-gold-gradient">Samaj</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="desktop-nav">
          <ul className="nav-menu">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="nav-link">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn-secondary nav-btn">
            <Users size={16} />
            <span>Join Samaj</span>
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <button 
          className="mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-drawer ${isOpen ? 'active' : ''}`}>
        <ul className="mobile-menu">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="mobile-link"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a 
              href="#contact" 
              className="btn btn-primary mobile-btn"
              onClick={() => setIsOpen(false)}
            >
              <Users size={18} />
              <span>Join Samaj</span>
            </a>
          </li>
        </ul>
      </div>

      {/* Styling specific to Navbar */}
      <style>{`
        .navbar-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          padding: 1.5rem 0;
          background: transparent;
        }

        .navbar-container.scrolled {
          padding: 0.85rem 0;
          background: rgba(7, 10, 19, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border-glass);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .nav-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          color: var(--text-primary);
          transition: all 0.3s ease;
        }

        .nav-logo:hover {
          transform: scale(1.02);
        }

        .logo-icon {
          color: var(--gold);
          filter: drop-shadow(0 0 8px var(--gold-glow));
        }

        .logo-text {
          font-size: 1.5rem;
          letter-spacing: -0.5px;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 2.5rem;
        }

        .nav-menu {
          display: flex;
          list-style: none;
          gap: 2rem;
        }

        .nav-link {
          color: var(--text-secondary);
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          position: relative;
          padding: 0.25rem 0;
        }

        .nav-link:hover {
          color: var(--gold-light);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--gold);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-btn {
          padding: 0.5rem 1.25rem;
          font-size: 0.85rem;
        }

        .mobile-toggle {
          display: none;
          background: transparent;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .mobile-toggle:hover {
          color: var(--gold);
        }

        .mobile-drawer {
          position: fixed;
          top: 0;
          right: -100%;
          width: 80%;
          max-width: 380px;
          height: 100vh;
          background: rgba(10, 15, 30, 0.98);
          backdrop-filter: blur(20px);
          border-left: 1px solid var(--border-glass);
          z-index: 999;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .mobile-drawer.active {
          right: 0;
        }

        .mobile-menu {
          display: flex;
          flex-direction: column;
          align-items: center;
          list-style: none;
          gap: 2rem;
          width: 100%;
          padding: 2rem;
        }

        .mobile-link {
          color: var(--text-primary);
          font-size: 1.35rem;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .mobile-link:hover {
          color: var(--gold);
          padding-left: 8px;
        }

        .mobile-btn {
          width: 100%;
          margin-top: 1rem;
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }

          .mobile-toggle {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
}
