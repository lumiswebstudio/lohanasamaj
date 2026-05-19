import { useState } from 'react';
import { Info, Target, Heart } from 'lucide-react';

export default function About() {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', label: 'About Lohana USA', icon: Info },
    { id: 'vision', label: 'Vision & Mission', icon: Target },
    { id: 'values', label: 'Core Values', icon: Heart }
  ];

  return (
    <section id="about" className="heritage-section section-padding relative">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag text-gold-gradient">Who We Are</span>
          <h2 className="section-title serif-title">Welcome to Lohana USA</h2>
          <p className="section-subtitle">
            A national platform dedicated to uniting, empowering, and uplifting the Lohana community across the United States.
          </p>
        </div>

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

        <div className="tab-content-container relative">
          {activeTab === 'about' && (
            <div className="tab-pane fade-in glass-card">
              <div className="about-content-grid">
                <div className="pane-info">
                  <h3 className="pane-title serif-title">Rooted in Heritage</h3>
                  <p className="pane-text text-gold-gradient" style={{ fontWeight: 600, letterSpacing: '0.5px', fontSize: '1.1rem', lineHeight: '1.5' }}>
                    SitaRam &bull; Jai Jalaram &bull; RamSita
                  </p>
                  <p className="pane-text" style={{ marginTop: '1rem' }}>
                    Lohana USA is proudly rooted in our rich Raghuvanshi heritage, culture, traditions, and values. Guided by the teachings and spirit of Sant Shri Jalaram Bapa, we aim to create a strong, united, and connected community for present and future generations.
                  </p>
                  <p className="pane-text" style={{ marginTop: '1rem' }}>
                    We seek to build a nationwide network focused on unity, culture, service, youth empowerment, and community growth. Lohana USA strives to connect this vibrant global heritage with the growing Lohana population across America while preserving the timeless values of SitaRam for generations to come.
                  </p>
                  <p className="pane-text text-gold-gradient" style={{ marginTop: '1rem', fontWeight: 600, letterSpacing: '0.5px', fontSize: '1.1rem', lineHeight: '1.5' }}>
                    SitaRam SitaRam &bull; RamSita &bull; Jai Jalaram
                  </p>
                </div>
                <div className="about-image-wrapper">
                  <div className="image-glow"></div>
                  <img src="/jalaram-bapa.jpg" alt="Jalaram Bapa" className="jalaram-bapa-img" onError={(e) => e.target.style.display = 'none'} />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'vision' && (
            <div className="tab-pane fade-in glass-card">
               <div className="pane-grid">
                <div>
                  <h3 className="pane-title serif-title text-gold-gradient">Our Vision</h3>
                  <p className="pane-text">
                    To create a strong, connected, and progressive Lohana community across the United States while preserving our cultural heritage, traditions, and values for future generations.
                  </p>
                </div>
                <div>
                  <h3 className="pane-title serif-title text-gold-gradient">Our Mission</h3>
                  <ul className="mission-list">
                    <li>Unite Lohanas across all states in the USA</li>
                    <li>Preserve and promote Lohana culture, language, and traditions</li>
                    <li>Encourage youth leadership and participation</li>
                    <li>Support education, entrepreneurship, and professional networking</li>
                    <li>Organize cultural, religious, social, and charitable activities</li>
                    <li>Build a nationwide Lohana census and community directory</li>
                    <li>Strengthen relationships between families and generations</li>
                    <li>Promote community welfare and humanitarian service</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'values' && (
            <div className="tab-pane fade-in glass-card">
              <div className="values-grid">
                <div className="value-item">
                  <h4 className="value-title text-gold-gradient">Unity</h4>
                  <p>Building stronger relationships across all regions and generations.</p>
                </div>
                <div className="value-item">
                  <h4 className="value-title text-gold-gradient">Heritage</h4>
                  <p>Preserving our language, traditions, festivals, and cultural identity.</p>
                </div>
                <div className="value-item">
                  <h4 className="value-title text-gold-gradient">Service</h4>
                  <p>Supporting charitable causes and helping communities in need.</p>
                </div>
                <div className="value-item">
                  <h4 className="value-title text-gold-gradient">Leadership</h4>
                  <p>Encouraging future community leaders and youth participation.</p>
                </div>
                <div className="value-item" style={{ gridColumn: '1 / -1', textAlign: 'center' }}>
                  <h4 className="value-title text-gold-gradient">Integrity</h4>
                  <p>Promoting trust, transparency, and respect within the community.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .heritage-section {
          background: rgba(10, 15, 30, 0.3);
          border-top: 1px solid var(--border-glass);
          border-bottom: 1px solid var(--border-glass);
        }

        .section-header { margin-bottom: 4rem; }

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
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          text-align: left;
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
        }

        .mission-list {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .mission-list li {
          position: relative;
          padding-left: 1.5rem;
          color: var(--text-secondary);
        }

        .mission-list li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: var(--gold);
        }

        .values-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          text-align: left;
        }

        .value-item {
          background: rgba(10, 15, 30, 0.5);
          padding: 1.5rem;
          border-radius: 12px;
          border: 1px solid var(--border-glass);
        }

        .value-title {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          font-family: var(--font-serif);
        }

        .about-content-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 3rem;
          align-items: center;
          text-align: left;
        }

        .about-image-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .image-glow {
          position: absolute;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, rgba(212, 175, 55, 0.3) 0%, transparent 65%);
          z-index: 0;
          pointer-events: none;
        }

        .jalaram-bapa-img {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 260px;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
          border: 1px solid var(--border-glass);
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
          .about-content-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .pane-info { text-align: center; }
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
          .values-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
