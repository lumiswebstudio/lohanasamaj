import { CheckCircle2 } from 'lucide-react';

export default function Programs() {
  const programs = [
    "Lohana Census USA",
    "Youth Leadership Programs",
    "Business Networking Events",
    "Cultural Festivals & Garba",
    "Religious Celebrations",
    "Sports & Family Picnics",
    "Matrimonial Networking",
    "Women’s Empowerment Programs",
    "Charity & Community Service",
    "Educational Scholarships",
    "Senior Support Programs"
  ];

  return (
    <section id="programs" className="initiatives-section section-padding relative">
      <div className="initiatives-glow"></div>
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag text-gold-gradient">Our Activities</span>
          <h2 className="section-title serif-title">Programs & Initiatives</h2>
          <p className="section-subtitle">
            We invite every Lohana family, youth member, entrepreneur, professional, and volunteer to become part of this growing movement.
          </p>
        </div>

        <div className="programs-grid">
          {programs.map((prog, idx) => (
            <div key={idx} className="program-item glass-card">
              <CheckCircle2 className="prog-icon" size={20} />
              <span className="prog-text">{prog}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .initiatives-section {
          background: rgba(7, 10, 19, 0.95);
          border-top: 1px solid var(--border-glass);
          border-bottom: 1px solid var(--border-glass);
        }
        .initiatives-glow {
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.04) 0%, transparent 70%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }
        .programs-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        .program-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem !important;
        }
        /* override global glass-card hover to prevent double transform */
        .program-item:hover {
          transform: none;
          border-color: var(--gold);
          box-shadow: 0 0 0 1px var(--gold), 0 8px 24px rgba(212, 175, 55, 0.12);
        }
        .prog-icon {
          color: var(--gold);
          flex-shrink: 0;
        }
        .prog-text {
          font-weight: 500;
          color: var(--text-primary);
        }
        @media (max-width: 992px) {
          .programs-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .programs-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
