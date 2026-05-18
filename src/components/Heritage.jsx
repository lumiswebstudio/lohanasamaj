import { useState } from 'react';
import { Landmark, Compass, Award, BookOpen, Quote } from 'lucide-react';

export default function Heritage() {
  const [activeTab, setActiveTab] = useState('history');

  const tabs = [
    { id: 'history', label: 'History & Lineage', icon: Landmark },
    { id: 'values', label: 'Values & Ethos', icon: Compass },
    { id: 'pioneers', label: 'Visionary Pioneers', icon: Award }
  ];

  return (
    <section id="heritage" className="heritage-section section-padding relative">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-tag text-gold-gradient">Our Foundation</span>
          <h2 className="section-title serif-title">A Legacy of Honor & Resilience</h2>
          <p className="section-subtitle">
            Exploring the rich lineage, ethical pillars, and legendary visionaries that define the global Lohana identity.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="tab-controls-wrapper">
          <div className="tab-controls glass-card">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                >
                  <Icon size={18} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Contents */}
        <div className="tab-content-container relative">
          {activeTab === 'history' && (
            <div className="tab-pane fade-in glass-card">
              <div className="pane-grid">
                <div className="pane-info">
                  <h3 className="pane-title serif-title">Ancient Suryavanshi Lineage</h3>
                  <p className="pane-text">
                    The Lohana lineage is deeply rooted in the legendary **Suryavansha** (Solar Dynasty) of ancient India. Historically traced back as descendants of **Luv**, the son of Lord Rama, the community has preserved its cultural prestige through millennia.
                  </p>
                  <p className="pane-text">
                    Our ancestors established formidable kingdoms in Lohargadh (modern-day Lahore) and later migrated across Sindh, Kutch, and Gujarat, building cities, steering major trade routes, and earning a reputation for incredible resilience, courage, and trade intelligence.
                  </p>
                  <div className="pane-bullets">
                    <div className="bullet-item">
                      <BookOpen size={16} className="bullet-icon" />
                      <span>Descendants of Luv, Son of Lord Rama</span>
                    </div>
                    <div className="bullet-item">
                      <BookOpen size={16} className="bullet-icon" />
                      <span>Venerable founders of historic regional trade routes</span>
                    </div>
                  </div>
                </div>
                <div className="pane-quote glass-card">
                  <Quote size={32} className="quote-icon" />
                  <p className="quote-text serif-title">
                    "Courage is our historic armor; adaptability is our modern strength."
                  </p>
                  <span className="quote-author">— Ancient Lohana Saying</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'values' && (
            <div className="tab-pane fade-in glass-card">
              <div className="pane-grid">
                <div className="pane-info">
                  <h3 className="pane-title serif-title">Ethical Enterprise & Community Service</h3>
                  <p className="pane-text">
                    Lohana culture sits on three foundational pillars: **Honesty in Enterprise (Vyapaar)**, **Deep Philanthropy (Seva)**, and **Devotion to Truth (Satya)**. We believe that true success is only measured by the prosperity we share with our fellow citizens.
                  </p>
                  <p className="pane-text">
                    Whether as industrialists, tech leaders, professionals, or artists, the Lohana spirit is recognized globally for hospitality, commitment to local integration, and immediate response during humanitarian needs.
                  </p>
                  <div className="pane-bullets">
                    <div className="bullet-item">
                      <Compass size={16} className="bullet-icon" />
                      <span>Ethical Business: Business built on word and trust.</span>
                    </div>
                    <div className="bullet-item">
                      <Compass size={16} className="bullet-icon" />
                      <span>Global Philanthropy: Supporting education, hospitals, and welfare.</span>
                    </div>
                  </div>
                </div>
                <div className="pane-quote glass-card">
                  <Quote size={32} className="quote-icon" />
                  <p className="quote-text serif-title">
                    "Earn with a hundred hands, distribute with a thousand."
                  </p>
                  <span className="quote-author">— Principles of Raghuvanshi Seva</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'pioneers' && (
            <div className="tab-pane fade-in glass-card">
              <div className="pane-grid">
                <div className="pane-info">
                  <h3 className="pane-title serif-title">Visionaries Who Shaped Nations</h3>
                  <p className="pane-text">
                    From setting up massive textile empires, tea plantations, and pharmaceutical institutions to pioneering global real estate development, Lohana legends have consistently built institutions that helped build nations.
                  </p>
                  <p className="pane-text">
                    Our ancestors transitioned from local trade houses to global conglomerates spanning East Africa, the UK, North America, the Gulf, and India, proving that cultural heritage is a superpower in the global marketplace.
                  </p>
                  <div className="pane-bullets">
                    <div className="bullet-item">
                      <Award size={16} className="bullet-icon" />
                      <span>Spiritual Light: Respected spiritual saints like Saint Jalaram Bapa of Virpur.</span>
                    </div>
                    <div className="bullet-item">
                      <Award size={16} className="bullet-icon" />
                      <span>Business Icons: Leading industrialists globally.</span>
                    </div>
                  </div>
                </div>
                <div className="pane-quote glass-card">
                  <Quote size={32} className="quote-icon" />
                  <p className="quote-text serif-title">
                    "Service to humanity is the highest form of worship."
                  </p>
                  <span className="quote-author">— Saint Jalaram Bapa</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Styles specific to Heritage */}
      <style>{`
        .heritage-section {
          background: rgba(10, 15, 30, 0.3);
          border-top: 1px solid var(--border-glass);
          border-bottom: 1px solid var(--border-glass);
        }

        .section-header {
          margin-bottom: 4rem;
        }

        .section-tag {
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          display: inline-block;
          margin-bottom: 0.75rem;
        }

        .section-title {
          font-size: 2.75rem;
          margin-bottom: 1rem;
        }

        .section-subtitle {
          max-width: 650px;
          margin: 0 auto;
          color: var(--text-secondary);
        }

        /* Tab Controls Styling */
        .tab-controls-wrapper {
          display: flex;
          justify-content: center;
          margin-bottom: 3rem;
        }

        .tab-controls {
          display: flex;
          padding: 0.5rem !important;
          border-radius: 9999px !important;
          background: rgba(15, 23, 42, 0.4);
          gap: 0.5rem;
        }

        .tab-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.75rem;
          background: transparent;
          border: none;
          color: var(--text-secondary);
          font-weight: 500;
          font-family: var(--font-sans);
          font-size: 0.95rem;
          cursor: pointer;
          border-radius: 9999px;
          transition: all 0.3s ease;
        }

        .tab-btn:hover {
          color: var(--text-primary);
        }

        .tab-btn.active {
          background: linear-gradient(135deg, var(--gold) 0%, #b8860b 100%);
          color: #070a13;
          box-shadow: 0 4px 15px var(--gold-glow);
          font-weight: 600;
        }

        /* Pane Styling */
        .tab-pane {
          background: rgba(15, 23, 42, 0.3);
        }

        .pane-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 3rem;
          align-items: center;
        }

        .pane-title {
          font-size: 2rem;
          margin-bottom: 1.25rem;
          color: var(--text-primary);
        }

        .pane-text {
          font-size: 1.05rem;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: 1.25rem;
        }

        .pane-bullets {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .bullet-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--text-primary);
          font-weight: 500;
        }

        .bullet-icon {
          color: var(--gold);
        }

        .pane-quote {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          padding: 3rem !important;
          background: rgba(212, 175, 55, 0.03) !important;
          border: 1px solid rgba(212, 175, 55, 0.15) !important;
          align-items: center;
          text-align: center;
        }

        .quote-icon {
          color: var(--gold);
          opacity: 0.6;
          filter: drop-shadow(0 0 10px var(--gold-glow));
        }

        .quote-text {
          font-size: 1.35rem;
          line-height: 1.5;
          color: var(--text-primary);
          font-style: italic;
        }

        .quote-author {
          font-size: 0.85rem;
          color: var(--gold);
          text-transform: uppercase;
          letter-spacing: 1.5px;
          font-weight: 600;
        }

        /* Animation */
        .fade-in {
          animation: fadeInEffect 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes fadeInEffect {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 992px) {
          .pane-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2.2rem;
          }
          .tab-controls {
            flex-direction: column;
            width: 100%;
            border-radius: 20px !important;
            padding: 0.75rem !important;
          }
          .tab-btn {
            width: 100%;
            justify-content: center;
          }
          .pane-title {
            font-size: 1.6rem;
          }
          .pane-quote {
            padding: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
