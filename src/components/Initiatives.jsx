import { Heart, GraduationCap, Briefcase, BookMarked, ArrowRight } from 'lucide-react';

export default function Initiatives() {
  const initiativesData = [
    {
      icon: Heart,
      title: 'Matrimonial Portal',
      description: 'A secure, premium matchmaking portal helping Raghuvanshi families around the world find compatible life partners while honoring ancestral values.',
      actionText: 'Enter Portal',
      accentColor: 'rgba(239, 68, 68, 0.15)',
      iconColor: '#f87171'
    },
    {
      icon: GraduationCap,
      title: 'Academic Grants & Aid',
      description: 'Empowering future generations through merit-based scholarships, international study grants, and interest-free higher education loans.',
      actionText: 'Apply for Scholarship',
      accentColor: 'rgba(59, 130, 246, 0.15)',
      iconColor: '#60a5fa'
    },
    {
      icon: Briefcase,
      title: 'Business & Venture Hub',
      description: 'Connecting rising entrepreneurs with seasoned community industrialists for venture advice, investment support, and direct corporate channels.',
      actionText: 'Access Network',
      accentColor: 'rgba(245, 158, 11, 0.15)',
      iconColor: '#fbbf24'
    },
    {
      icon: BookMarked,
      title: 'Global Directory',
      description: 'A comprehensive, verified directory that maps our families, local trusts, and business holdings globally, enabling immediate local connection.',
      actionText: 'Search Directory',
      accentColor: 'rgba(16, 185, 129, 0.15)',
      iconColor: '#34d399'
    }
  ];

  return (
    <section id="initiatives" className="initiatives-section section-padding relative">
      {/* Background glow overlay */}
      <div className="initiatives-glow"></div>

      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-tag text-gold-gradient">Samaj Services</span>
          <h2 className="section-title serif-title">Unified Community Initiatives</h2>
          <p className="section-subtitle">
            Providing foundational support systems designed to protect our heritage, fund excellence, and connect families globally.
          </p>
        </div>

        {/* Initiatives Cards Grid */}
        <div className="initiatives-grid">
          {initiativesData.map((init, index) => {
            const Icon = init.icon;
            return (
              <div key={index} className="init-card glass-card">
                {/* Decorative Icon Circle */}
                <div 
                  className="init-icon-wrapper" 
                  style={{ backgroundColor: init.accentColor }}
                >
                  <Icon size={28} style={{ color: init.iconColor }} />
                </div>

                <h3 className="init-title serif-title">{init.title}</h3>
                <p className="init-desc">{init.description}</p>

                <a href="#contact" className="init-btn btn btn-secondary">
                  <span>{init.actionText}</span>
                  <ArrowRight size={14} className="btn-arrow" />
                </a>
              </div>
            );
          })}
        </div>
      </div>

      {/* Embedded Styles */}
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

        /* Grid */
        .initiatives-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2.5rem;
        }

        .init-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          background: rgba(15, 23, 42, 0.4);
          padding: 3rem !important;
          position: relative;
          overflow: hidden;
        }

        .init-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: var(--gold);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .init-card:hover::before {
          opacity: 1;
        }

        /* Icon wrapper */
        .init-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          border-radius: 16px;
          margin-bottom: 1.75rem;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        }

        .init-title {
          font-size: 1.65rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .init-desc {
          font-size: 1.05rem;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          flex-grow: 1;
        }

        .init-btn {
          width: 100%;
          justify-content: space-between;
          padding: 0.65rem 1.5rem;
        }

        .init-btn:hover {
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(212, 175, 55, 0.03) 100%);
          border-color: var(--gold);
        }

        .btn-arrow {
          transition: transform 0.3s ease;
        }

        .init-btn:hover .btn-arrow {
          transform: translate(3px);
        }

        @media (max-width: 992px) {
          .initiatives-grid {
            gap: 2rem;
          }
          .init-card {
            padding: 2.25rem !important;
          }
        }

        @media (max-width: 768px) {
          .initiatives-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .init-title {
            font-size: 1.45rem;
          }
        }
      `}</style>
    </section>
  );
}
