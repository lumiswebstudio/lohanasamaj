import { Users, Handshake, Network, Star, Heart, Globe } from 'lucide-react';

export default function WhyUs() {
  const reasons = [
    { icon: Users, text: 'Connects families and communities' },
    { icon: Heart, text: 'Supports newcomers and youth' },
    { icon: Network, text: 'Creates networking opportunities' },
    { icon: Star, text: 'Celebrates festivals and traditions' },
    { icon: Handshake, text: 'Encourages volunteerism and leadership' },
    { icon: Globe, text: 'Builds stronger inter-state relationships' },
  ];

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
          {reasons.map(({ icon: Icon, text }) => (
            <div key={text} className="why-card glass-card">
              <Icon className="why-icon" size={32} aria-hidden="true" />
              <p>{text}</p>
            </div>
          ))}
        </div>

        <div className="why-closing">
          <p className="serif-title text-gold-gradient">
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
        .why-closing {
          text-align: center;
          margin-top: 4rem;
          font-size: 1.5rem;
          line-height: 1.6;
        }
        .why-closing p {
          font-family: var(--font-serif);
          font-size: 1.5rem;
        }
        .text-center {
          text-align: center;
        }
        @media (max-width: 992px) {
          .why-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .why-grid { grid-template-columns: 1fr; }
          .why-closing { font-size: 1.2rem; }
        }
      `}</style>
    </section>
  );
}
