import { Users, Shield, Globe } from 'lucide-react';

export default function WhyUs() {
  return (
    <section id="why-us" className="section-padding relative" style={{ background: 'var(--bg-dark)' }}>
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag text-gold-gradient">The Need</span>
          <h2 className="section-title serif-title">Why Lohana USA?</h2>
          <p className="section-subtitle">
            As the Lohana population continues to grow across the United States, there is a strong need for a unified national platform.
          </p>
        </div>

        <div className="why-grid">
          <div className="why-card glass-card">
            <Users className="why-icon" size={32} />
            <p>Connects families and communities</p>
          </div>
          <div className="why-card glass-card">
            <Globe className="why-icon" size={32} />
            <p>Supports newcomers and youth</p>
          </div>
          <div className="why-card glass-card">
            <Shield className="why-icon" size={32} />
            <p>Creates networking opportunities</p>
          </div>
          <div className="why-card glass-card">
            <Users className="why-icon" size={32} />
            <p>Celebrates festivals and traditions</p>
          </div>
          <div className="why-card glass-card">
            <Globe className="why-icon" size={32} />
            <p>Encourages volunteerism and leadership</p>
          </div>
          <div className="why-card glass-card">
            <Shield className="why-icon" size={32} />
            <p>Builds stronger inter-state relationships</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="serif-title text-xl text-gold-gradient" style={{ marginTop: '3rem', fontSize: '1.5rem', lineHeight: '1.5' }}>
            Lohana USA is formed to bring all Lohanas together under one umbrella of unity and progress.
          </p>
        </div>
      </div>
      <style>{`
        .why-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .why-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1rem;
          padding: 2rem !important;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }
        .why-card:hover {
          transform: translateY(-5px);
          border-color: var(--gold);
        }
        .why-icon {
          color: var(--gold);
        }
        .text-center {
          text-align: center;
        }
        @media (max-width: 992px) {
          .why-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .why-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
