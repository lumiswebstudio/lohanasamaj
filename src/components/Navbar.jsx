import { useState, useEffect } from 'react';
import { Menu, X, ClipboardList, Heart } from 'lucide-react';

const ZEFFY_URL = 'https://www.zeffy.com/en-US/donation-form/lohana-usa-formation-support';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Passive listener: does not block scroll paint
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Programs', href: '#programs' },
    { name: 'Leadership', href: '#leadership' }
  ];

  return (
    <nav className={`navbar-container ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <a href="#" className="nav-logo">
          <img src="/logo.jpg" alt="Lohana USA Logo" className="navbar-logo-img" onError={(e) => e.target.style.display = 'none'} />
          <span className="logo-text serif-title">
            Lohana <span className="text-gold-gradient">USA</span>
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
          <a href="https://forms.gle/JstzV6adcRdQg6DbA" target="_blank" rel="noopener noreferrer" className="btn btn-outline nav-btn">
            <ClipboardList size={16} aria-hidden="true" />
            <span>Census 2026</span>
          </a>
          <a href={ZEFFY_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary nav-btn">
            <Heart size={16} aria-hidden="true" />
            <span>Donate</span>
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

      {/* Mobile Drawer Menu — aria-hidden when closed so screen readers skip it */}
      <div
        className={`mobile-drawer ${isOpen ? 'active' : ''}`}
        aria-hidden={!isOpen}
        role="dialog"
        aria-label="Navigation menu"
      >
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
              href="https://forms.gle/JstzV6adcRdQg6DbA" target="_blank" rel="noopener noreferrer"
              className="btn btn-outline mobile-btn"
              onClick={() => setIsOpen(false)}
            >
              <ClipboardList size={18} aria-hidden="true" />
              <span>Take Census 2026</span>
            </a>
          </li>
          <li>
            <a
              href={ZEFFY_URL} target="_blank" rel="noopener noreferrer"
              className="btn btn-primary mobile-btn"
              onClick={() => setIsOpen(false)}
            >
              <Heart size={18} aria-hidden="true" />
              <span>Donate to Lohana USA</span>
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

        .navbar-logo-img {
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
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

        .btn-outline {
          background: transparent;
          color: var(--gold-light);
          border: 1px solid rgba(212, 175, 55, 0.5);
          backdrop-filter: blur(8px);
        }

        .btn-outline:hover {
          background: rgba(212, 175, 55, 0.12);
          border-color: var(--gold);
          color: var(--gold);
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(212, 175, 55, 0.2);
        }

        .mobile-toggle {
          display: none;
          background: transparent;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          transition: all 0.3s ease;
          /* Minimum 44×44px touch target (WCAG 2.5.5) */
          min-width: 44px;
          min-height: 44px;
          align-items: center;
          justify-content: center;
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
