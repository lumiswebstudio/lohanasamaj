import { ClipboardList, ArrowRight, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-section overflow-hidden relative">
      <div className="glow-orb glow-gold"></div>
      <div className="glow-orb glow-blue"></div>

      <div className="container hero-content" style={{ position: 'relative', zIndex: 10 }}>
        <div className="hero-badge-wrapper">
          <div className="hero-badge">
            <Users size={14} className="badge-icon" />
            <span>Official Lohana USA Initiative</span>
          </div>
        </div>

        <h1 className="hero-title">
          <span className="serif-title block">Lohana USA</span>
          <span className="text-gold-gradient serif-title block">Census 2026</span>
        </h1>

        <div className="hero-motto">
          <span className="motto-text">"Together We Grow"</span>
          <span className="motto-divider">&bull;</span>
          <span className="motto-text">"United Lohanas Across America"</span>
        </div>

        <p className="hero-subtitle">
          The Lohana USA Census is an important initiative to connect and identify Lohana families throughout America. This project will help build stronger community connections, improve communication nationwide, and support future events and programs.
        </p>

        {/* Two-item action row: primary CTA + elegant text link */}
        <div className="hero-actions">
          <a href="https://forms.gle/JstzV6adcRdQg6DbA" target="_blank" rel="noopener noreferrer" className="btn btn-primary hero-cta-main">
            <span>Fill Out Census Form</span>
            <ClipboardList size={18} />
          </a>
          <a href="#about" className="hero-text-link">
            <span>Learn More</span>
            <ArrowRight size={16} className="hero-text-link-arrow" />
          </a>
        </div>

        <div className="hero-image-wrapper glass-card">
          <img
            src="/census.jpg"
            alt="Lohana USA Census 2026 Banner"
            className="hero-banner-img"
            width="920"
            loading="eager"
            decoding="async"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        </div>
      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8rem 0 5rem 0;
          text-align: center;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }

        /* Ambient Glow Orbs */
        .glow-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          z-index: 0;
          pointer-events: none;
        }

        .glow-gold {
          width: 400px;
          height: 400px;
          background: rgba(212, 175, 55, 0.07);
          top: 20%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: pulse-slow 10s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .glow-blue {
          width: 600px;
          height: 600px;
          background: rgba(30, 58, 138, 0.12);
          bottom: 10%;
          left: 50%;
          transform: translate(-50%, 50%);
        }

        /* Badge */
        .hero-badge-wrapper {
          display: inline-block;
          padding: 1px;
          background: linear-gradient(135deg, var(--gold) 0%, transparent 100%);
          border-radius: 9999px;
          margin-bottom: 0.5rem;
        }

        .hero-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1.25rem;
          background: var(--bg-dark);
          border-radius: 9999px;
          color: var(--text-primary);
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 0.5px;
        }

        .badge-icon { color: var(--gold); }

        /* Headline */
        .hero-title {
          font-size: 5rem;
          line-height: 1.05;
          letter-spacing: -2px;
          margin-bottom: 0.25rem;
        }

        .block { display: block; }

        .hero-motto {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.75rem;
          font-family: var(--font-sans);
          font-size: 1rem;
          color: var(--gold-light);
          font-weight: 500;
          letter-spacing: 0.5px;
          opacity: 0.85;
        }

        .motto-divider { color: var(--text-muted); }

        .hero-subtitle {
          max-width: 640px;
          font-size: 1.1rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 0.5rem;
        }

        /* Clean two-item CTA row */
        .hero-actions {
          display: flex;
          align-items: center;
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .hero-cta-main {
          padding: 0.9rem 2.25rem;
          font-size: 1rem;
          letter-spacing: 0.2px;
          box-shadow: 0 6px 28px rgba(212, 175, 55, 0.35);
        }

        .hero-cta-main:hover {
          box-shadow: 0 10px 40px rgba(212, 175, 55, 0.5);
        }

        /* Elegant text-only link for Learn More */
        .hero-text-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
          padding-bottom: 2px;
        }

        .hero-text-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--gold);
          transition: width 0.3s ease;
        }

        .hero-text-link:hover {
          color: var(--gold-light);
        }

        .hero-text-link:hover::after {
          width: 100%;
        }

        .hero-text-link-arrow {
          transition: transform 0.3s ease;
        }

        .hero-text-link:hover .hero-text-link-arrow {
          transform: translateX(4px);
        }

        /* Hero image */
        .hero-image-wrapper {
          padding: 0.875rem !important;
          max-width: 920px;
          width: 100%;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.5), 0 0 40px rgba(212, 175, 55, 0.08);
        }

        .hero-banner-img {
          width: 100%;
          height: auto;
          border-radius: 10px;
          display: block;
        }

        @media (max-width: 1024px) {
          .hero-title { font-size: 3.75rem; }
        }

        @media (max-width: 768px) {
          .hero-title { font-size: 2.75rem; letter-spacing: -1px; }
          .hero-subtitle { font-size: 1rem; }
          .hero-actions {
            flex-direction: column;
            gap: 1.25rem;
          }
          .hero-cta-main { width: 100%; max-width: 300px; }
          .hero-motto {
            flex-direction: column;
            gap: 0.2rem;
          }
          .motto-divider { display: none; }
        }
      `}</style>
    </section>
  );
}
