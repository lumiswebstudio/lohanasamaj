import { Landmark, ArrowRight, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container relative">
      <div className="container">
        {/* Top Segment: Newsletter & Logo */}
        <div className="footer-top-grid">
          <div className="footer-brand-info">
            <a href="#" className="footer-logo">
              <Landmark className="logo-icon" size={24} />
              <span className="logo-text serif-title">
                Lohana <span className="text-gold-gradient">Samaj</span>
              </span>
            </a>
            <p className="footer-brand-desc">
              Uniting Raghuvanshi families globally. Committed to protecting ancient traditions, promoting international trade, and driving deep educational and medical charity since generations.
            </p>
          </div>

          <div className="footer-newsletter">
            <h4 className="newsletter-title serif-title">Samaj Newsletter</h4>
            <p className="newsletter-desc">Subscribe to receive monthly global community circulars, event updates, and news.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your Email Address" required />
              <button type="submit" className="newsletter-submit" aria-label="Subscribe">
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Separator */}
        <hr className="footer-divider" />

        {/* Bottom Segment: Links & Copyright */}
        <div className="footer-bottom-grid">
          <div className="copyright-info">
            <span>© {currentYear} Global Lohana Samaj Trust. All Rights Reserved.</span>
            <div className="tradition-sign">
              <span>Jai Raghuvansh</span>
              <Heart size={12} className="tradition-heart" />
            </div>
          </div>

          <div className="footer-socials">
            <a href="#" aria-label="Twitter">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" aria-label="GitHub">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Embedded Styles */}
      <style>{`
        .footer-container {
          background: #04060b;
          border-top: 1px solid var(--border-glass);
          padding: 6rem 0 3rem 0;
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

        .newsletter-form {
          display: flex;
          background: rgba(10, 15, 30, 0.6);
          border: 1px solid var(--border-glass);
          border-radius: 9999px;
          padding: 0.25rem;
          margin-top: 0.5rem;
          transition: border-color 0.3s ease;
        }

        .newsletter-form:focus-within {
          border-color: var(--gold);
        }

        .newsletter-form input {
          flex-grow: 1;
          background: transparent;
          border: none;
          padding: 0.6rem 1.25rem;
          color: var(--text-primary);
          font-family: var(--font-sans);
          font-size: 0.9rem;
        }

        .newsletter-form input:focus {
          outline: none;
        }

        .newsletter-submit {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--gold) 0%, #b8860b 100%);
          border: none;
          color: #070a13;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .newsletter-submit:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 10px var(--gold-glow);
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

        .tradition-sign {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          color: var(--gold-light);
          font-weight: 600;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          border-left: 1px solid var(--border-glass);
          padding-left: 1.5rem;
        }

        .tradition-heart {
          color: #ef4444;
          filter: drop-shadow(0 0 5px rgba(239, 68, 68, 0.4));
        }

        .footer-socials {
          display: flex;
          gap: 1.25rem;
        }

        .footer-socials a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-glass);
          color: var(--text-secondary);
          transition: all 0.3s ease;
        }

        .footer-socials a:hover {
          color: var(--gold-light);
          border-color: var(--gold);
          background: rgba(212, 175, 55, 0.05);
          transform: translateY(-2px);
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
          .tradition-sign {
            border-left: none;
            padding-left: 0;
          }
        }
      `}</style>
    </footer>
  );
}
