import { Landmark, ArrowRight, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container relative">
      <div className="container">
        <div className="footer-top-grid">
          <div className="footer-brand-info">
            <a href="#" className="footer-logo">
              <img src="/logo.jpg" alt="Lohana USA Logo" className="navbar-logo-img" style={{ height: '60px', borderRadius: '50%' }} onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
              <Landmark className="logo-icon" size={24} style={{ display: 'none' }} />
              <span className="logo-text serif-title">
                Lohana <span className="text-gold-gradient">USA</span>
              </span>
            </a>
            <p className="footer-brand-desc">
              Uniting, empowering, and uplifting the Lohana community across the United States. Together We Grow.
            </p>
            <a href="mailto:lohanausaorg@gmail.com" className="footer-contact-link">
              <Mail size={18} /> lohanausaorg@gmail.com
            </a>
          </div>

          <div className="footer-newsletter">
            <h4 className="newsletter-title serif-title">Census 2026</h4>
            <p className="newsletter-desc">Make sure your family is counted in the nationwide Lohana USA Census.</p>
            <a href="https://forms.gle/JstzV6adcRdQg6DbA" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: 'fit-content', marginTop: '0.5rem' }}>
              Fill Out Form <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom-grid">
          <div className="copyright-info">
            <span>© {currentYear} Lohana USA. All Rights Reserved.</span>
          </div>

          <div className="lumis-credit">
            Created by <a href="https://lumiswebstudio.com" target="_blank" rel="noopener noreferrer">Lumiswebstudio</a>
          </div>
        </div>
      </div>

      <style>{`
        .footer-container {
          background: #04060b;
          border-top: 1px solid var(--border-glass);
          padding: 6rem 0 3rem 0;
        }

        @media (max-width: 992px) {
          .footer-container { padding: 4rem 0 2.5rem 0; }
        }

        @media (max-width: 768px) {
          .footer-container { padding: 3rem 0 2rem 0; }
        }

        .footer-top-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 4rem;
          margin-bottom: 4rem;
          align-items: flex-start;
          text-align: left;
        }

        .footer-brand-info {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          color: var(--text-primary);
          transition: all 0.3s ease;
          width: fit-content;
        }

        .logo-icon {
          color: var(--gold);
        }

        .logo-text {
          font-size: 1.5rem;
          letter-spacing: -0.5px;
        }

        .footer-brand-desc {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--text-secondary);
          max-width: 540px;
        }

        .footer-contact-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--gold-light);
          text-decoration: none;
          font-weight: 500;
          font-size: 1rem;
          margin-top: 0.5rem;
          transition: all 0.3s ease;
        }

        .footer-contact-link:hover {
          color: var(--gold);
          transform: translateX(4px);
        }

        /* Newsletter segment */
        .footer-newsletter {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .newsletter-title {
          font-size: 1.25rem;
          color: var(--text-primary);
        }

        .newsletter-desc {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        /* Bottom segment */
        .footer-divider {
          border: 0;
          height: 1px;
          background: var(--border-glass);
          margin-bottom: 2.5rem;
        }

        .footer-bottom-grid {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .copyright-info {
          display: flex;
          gap: 1.5rem;
          align-items: center;
          flex-wrap: wrap;
        }

        .lumis-credit {
          font-size: 0.95rem;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .lumis-credit a {
          color: var(--gold);
          text-decoration: none;
          font-weight: 700;
          letter-spacing: 0.5px;
          background: rgba(212, 175, 55, 0.1);
          padding: 0.35rem 0.85rem;
          border-radius: 99px;
          border: 1px solid rgba(212, 175, 55, 0.25);
          transition: all 0.3s ease;
        }

        .lumis-credit a:hover {
          background: rgba(212, 175, 55, 0.2);
          transform: translateY(-2px);
          border-color: var(--gold);
          box-shadow: 0 4px 15px rgba(212, 175, 55, 0.15);
        }

        @media (max-width: 992px) {
          .footer-top-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }

        @media (max-width: 768px) {
          .footer-bottom-grid {
            flex-direction: column;
            gap: 1.5rem;
            text-align: center;
          }
          .copyright-info {
            flex-direction: column;
            gap: 0.75rem;
          }
        }
      `}</style>
    </footer>
  );
}
