import { Phone, UserCircle, Map } from 'lucide-react';

export default function Leadership() {
  return (
    <section id="leadership" className="section-padding relative" style={{ background: 'radial-gradient(circle at 50% 120%, #1e293b 0%, var(--bg-dark) 50%)' }}>
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag text-gold-gradient">Organization</span>
          <h2 className="section-title serif-title">Leadership & Structure</h2>
          <p className="section-subtitle">
            Each state will have coordinators and volunteers to help grow the community network and census initiative.
          </p>
        </div>

        <div className="leadership-grid">
          <div className="glass-card structure-card">
            <h3 className="serif-title text-gold-gradient text-2xl mb-6">Organizational Structure</h3>
            
            <div className="structure-group">
              <h4 className="structure-title"><Map size={18} /> National Leadership</h4>
              <ul>
                <li>National President</li>
                <li>National Vice President</li>
                <li>Secretary</li>
                <li>Treasurer</li>
                <li>Advisory Board</li>
              </ul>
            </div>

            <div className="structure-group mt-6">
              <h4 className="structure-title"><Map size={18} /> Zonal Leadership</h4>
              <ul>
                <li>East Coast Zone</li>
                <li>West Coast Zone</li>
                <li>Midwest Zone</li>
                <li>South Zone</li>
                <li>State Representatives</li>
              </ul>
            </div>
          </div>

          <div className="glass-card leadership-card">
            <h3 className="serif-title text-gold-gradient text-2xl mb-6">National Leadership Team</h3>
            
            <div className="leader-profile">
              <UserCircle size={48} className="leader-icon" />
              <div className="leader-info">
                <h4 className="leader-name">Surubhai Manek</h4>
                <span className="leader-role">President</span>
                <a href="tel:7142999555" className="leader-contact"><Phone size={14} /> (714) 299-9555</a>
              </div>
            </div>

            <div className="leader-profile mt-6">
              <UserCircle size={48} className="leader-icon" />
              <div className="leader-info">
                <h4 className="leader-name">Mayur Thakkar</h4>
                <span className="leader-role">Vice President</span>
                <a href="tel:8477540675" className="leader-contact"><Phone size={14} /> (847) 754-0675</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .leadership-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
        }
        .text-2xl { font-size: 1.75rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .mt-6 { margin-top: 1.5rem; }
        
        .structure-card, .leadership-card {
          padding: 3rem !important;
        }
        
        .structure-group h4 {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-primary);
          font-size: 1.2rem;
          margin-bottom: 1rem;
        }
        .structure-group ul {
          list-style: none;
          padding-left: 1.8rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .structure-group ul li {
          position: relative;
          color: var(--text-secondary);
        }
        .structure-group ul li::before {
          content: '•';
          position: absolute;
          left: -1.2rem;
          color: var(--gold);
        }

        .leader-profile {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          background: rgba(10, 15, 30, 0.5);
          padding: 1.5rem;
          border-radius: 12px;
          border: 1px solid var(--border-glass);
        }
        .leader-icon {
          color: var(--gold);
        }
        .leader-name {
          font-size: 1.25rem;
          color: var(--text-primary);
          font-family: var(--font-serif);
        }
        .leader-role {
          display: block;
          color: var(--gold-light);
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
        }
        .leader-contact {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }
        .leader-contact:hover {
          color: var(--gold);
        }

        @media (max-width: 768px) {
          .leadership-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
