import { Heart, Sparkles } from 'lucide-react';

const ZEFFY_URL = 'https://www.zeffy.com/en-US/donation-form/lohana-usa-formation-support';

export default function DonationBanner() {
  return (
    <section className="donation-section">
      <div className="container">
        <div className="donation-card">
          {/* Decorative orb */}
          <div className="donation-orb" aria-hidden="true"></div>

          <div className="donation-left">
            <div className="donation-icon-ring">
              <Heart size={22} className="donation-heart-icon" />
            </div>
            <div className="donation-copy">
              <div className="donation-eyebrow">
                <Sparkles size={12} />
                <span>Support the Movement</span>
              </div>
              <h2 className="donation-heading serif-title">
                Help Build a Stronger <span className="text-gold-gradient">Lohana USA</span>
              </h2>
              <p className="donation-desc">
                Every contribution — large or small — goes directly toward uniting families,
                preserving our heritage, and empowering future generations of Lohanas across America.
              </p>
            </div>
          </div>

          <div className="donation-right">
            <a
              href={ZEFFY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="donation-cta-btn"
            >
              <Heart size={18} className="donation-cta-icon" />
              <span>Donate Now</span>
            </a>
            <p className="donation-platform-note">
              Powered by <strong>Zeffy</strong> &middot; 0% platform fees
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .donation-section {
          padding: 3rem 0 1rem 0;
          position: relative;
        }

        .donation-card {
          position: relative;
          display: flex;
          align-items: center;
          gap: 3rem;
          padding: 2.75rem 3rem;
          background: linear-gradient(
            135deg,
            rgba(212, 175, 55, 0.07) 0%,
            rgba(15, 23, 42, 0.5) 50%,
            rgba(30, 58, 138, 0.06) 100%
          );
          border: 1px solid rgba(212, 175, 55, 0.22);
          border-radius: 24px;
          overflow: hidden;
          backdrop-filter: blur(12px);
          transition: border-color 0.4s ease, box-shadow 0.4s ease;
        }

        .donation-card:hover {
          border-color: rgba(212, 175, 55, 0.4);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3), 0 0 40px rgba(212, 175, 55, 0.07);
        }

        /* Gold left accent bar */
        .donation-card::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          background: linear-gradient(180deg, var(--gold-light) 0%, var(--gold) 60%, #b8860b 100%);
          border-radius: 4px 0 0 4px;
        }

        /* Ambient decorative orb */
        .donation-orb {
          position: absolute;
          right: -80px;
          top: 50%;
          transform: translateY(-50%);
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.07) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .donation-left {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          flex: 1;
          position: relative;
          z-index: 1;
        }

        .donation-icon-ring {
          flex-shrink: 0;
          width: 54px;
          height: 54px;
          background: rgba(212, 175, 55, 0.1);
          border: 1px solid rgba(212, 175, 55, 0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: pulse-slow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          margin-top: 0.25rem;
        }

        .donation-heart-icon {
          color: var(--gold);
        }

        .donation-copy {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .donation-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: var(--gold);
        }

        .donation-heading {
          font-size: 1.6rem;
          line-height: 1.25;
          color: var(--text-primary);
          font-weight: 600;
        }

        .donation-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.65;
          max-width: 500px;
        }

        .donation-right {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          flex-shrink: 0;
          position: relative;
          z-index: 1;
        }

        .donation-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: linear-gradient(135deg, var(--gold) 0%, #b8860b 100%);
          color: #070a13;
          font-weight: 700;
          font-size: 1rem;
          padding: 0.9rem 2rem;
          border-radius: 9999px;
          text-decoration: none;
          white-space: nowrap;
          letter-spacing: 0.2px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 6px 24px rgba(212, 175, 55, 0.3);
        }

        .donation-cta-btn:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 12px 36px rgba(212, 175, 55, 0.5);
          background: linear-gradient(135deg, var(--gold-light) 0%, var(--gold) 100%);
        }

        .donation-cta-icon {
          flex-shrink: 0;
        }

        .donation-platform-note {
          font-size: 0.72rem;
          color: var(--text-muted);
          text-align: center;
          letter-spacing: 0.3px;
        }

        .donation-platform-note strong {
          color: var(--text-secondary);
          font-weight: 600;
        }

        @media (max-width: 900px) {
          .donation-card {
            flex-direction: column;
            gap: 2rem;
            padding: 2.25rem;
            text-align: center;
          }
          .donation-left {
            flex-direction: column;
            align-items: center;
          }
          .donation-desc {
            margin: 0 auto;
          }
          .donation-card::before {
            left: 0;
            top: 0;
            right: 0;
            bottom: auto;
            width: 100%;
            height: 3px;
            border-radius: 24px 24px 0 0;
          }
          .donation-orb {
            right: 50%;
            transform: translate(50%, -50%);
          }
        }

        @media (max-width: 600px) {
          .donation-card {
            padding: 1.75rem 1.25rem;
            border-radius: 18px;
            gap: 1.5rem;
          }
          .donation-heading {
            font-size: 1.35rem;
          }
          .donation-cta-btn {
            width: 100%;
            max-width: 280px;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}

