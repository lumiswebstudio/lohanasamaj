import { ClipboardList, ArrowRight, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-section overflow-hidden relative">
      <div className="glow-orb glow-gold"></div>
      <div className="glow-orb glow-blue"></div>

      <div className="container hero-content z-10">
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

        <div className="hero-actions">
          <a href="https://forms.gle/JstzV6adcRdQg6DbA" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <span>Fill Out Census Form</span>
            <ClipboardList size={18} />
          </a>
          <a href="#about" className="btn btn-secondary">
            <span>Learn More</span>
            <ArrowRight size={18} />
          </a>
        </div>

        <div className="hero-image-wrapper glass-card">
          <img src="/census.jpg" alt="Lohana USA Census 2026 Banner" className="hero-banner-img" onError={(e) => e.target.style.display = 'none'} />
        </div>
      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8rem 0 4rem 0;
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
          z-index: 1;
          pointer-events: none;
        }

        .glow-gold {
          width: 300px;
          height: 300px;
          background: rgba(212, 175, 55, 0.08);
          top: 20%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .glow-blue {
          width: 500px;
          height: 500px;
          background: rgba(30, 58, 138, 0.15);
          bottom: 10%;
          left: 50%;
          transform: translate(-50%, 50%);
        }

        /* Badge Styling */
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

        .badge-icon {
          color: var(--gold);
        }

        /* Headline Styling */
        .hero-title {
          font-size: 4.5rem;
          line-height: 1.1;
          letter-spacing: -1.5px;
          margin-bottom: 0.5rem;
        }

        .block {
          display: block;
        }

        .hero-motto {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
          font-family: var(--font-serif);
          font-size: 1.25rem;
          color: var(--gold-light);
          font-weight: 600;
          letter-spacing: 1px;
        }

        .motto-divider {
          color: var(--text-muted);
        }

        .hero-subtitle {
          max-width: 700px;
          font-size: 1.15rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        /* Button Grid */
        .hero-actions {
          display: flex;
          gap: 1.25rem;
          margin-bottom: 2rem;
        }

        .hero-image-wrapper {
          margin-top: 2rem;
          padding: 1rem !important;
          max-width: 900px;
          width: 100%;
        }

        .hero-banner-img {
          width: 100%;
          height: auto;
          border-radius: 12px;
          display: block;
        }

        @media (max-width: 1024px) {
          .hero-title {
            font-size: 3.5rem;
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.75rem;
          }
          .hero-subtitle {
            font-size: 1.05rem;
          }
          .hero-actions {
            flex-direction: column;
            width: 100%;
            max-width: 320px;
            gap: 1rem;
          }
          .hero-motto {
            flex-direction: column;
            gap: 0.25rem;
            font-size: 1.1rem;
          }
          .motto-divider {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
