import { ArrowRight, Compass, ShieldCheck } from 'lucide-react';

export default function Hero() {
  const stats = [
    { value: '100+', label: 'Years of Heritage' },
    { value: '50K+', label: 'Global Members' },
    { value: '40+', label: 'Affiliated Chapters' },
    { value: '100%', label: 'Community Philanthropy' }
  ];

  return (
    <section className="hero-section overflow-hidden relative">
      {/* Background Orbs */}
      <div className="glow-orb glow-gold"></div>
      <div className="glow-orb glow-blue"></div>

      <div className="container hero-content z-10">
        {/* Modern Badge */}
        <div className="hero-badge-wrapper">
          <div className="hero-badge">
            <ShieldCheck size={14} className="badge-icon" />
            <span>Official Global Lohana Samaj Portal</span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="hero-title">
          <span className="serif-title block">Preserving Legacy</span>
          <span className="text-gold-gradient serif-title block">Pioneering the Future</span>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle">
          Welcome to the digital home of the global Lohana community. Driven by Raghuvanshi values, a rich entrepreneurial spirit, and an unwavering commitment to charity and global unity.
        </p>

        {/* Buttons */}
        <div className="hero-actions">
          <a href="#heritage" className="btn btn-primary">
            <span>Explore Heritage</span>
            <Compass size={18} />
          </a>
          <a href="#contact" className="btn btn-secondary">
            <span>Join Network</span>
            <ArrowRight size={18} />
          </a>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid glass-card">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <span className="stat-value text-gold-gradient serif-title">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Embedded Styles */}
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

        .hero-subtitle {
          max-width: 700px;
          font-size: 1.2rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        /* Button Grid */
        .hero-actions {
          display: flex;
          gap: 1.25rem;
          margin-bottom: 4rem;
        }

        /* Stats Grid */
        .stats-grid {
          width: 100%;
          max-width: 900px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          padding: 2rem !important;
          background: rgba(15, 23, 42, 0.4);
          gap: 1.5rem;
        }

        .stat-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
        }

        .stat-value {
          font-size: 2.5rem;
          font-weight: 700;
        }

        .stat-label {
          font-size: 0.85rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 1px;
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
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
          .stat-value {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
