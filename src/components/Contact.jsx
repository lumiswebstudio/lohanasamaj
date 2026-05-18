import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    chapter: 'global',
    interest: 'membership',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple verification
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setError('Please fill in all primary fields.');
      return;
    }
    
    setError('');
    
    // OPTIMISTIC UI: Instantly mark as submitted to delight the user
    setSubmitted(true);
    
    // Console log the form details (would send to a backend in production)
    console.log('Samaj Contact Submission:', formData);
  };

  return (
    <section id="contact" className="contact-section section-padding relative">
      <div className="container">
        <div className="contact-grid">
          {/* Contact Details Column */}
          <div className="contact-info">
            <span className="section-tag text-gold-gradient">Get In Touch</span>
            <h2 className="section-title serif-title">Connect with Our Global Trust</h2>
            <p className="contact-info-subtitle">
              Have questions about membership, matrimonial listings, or wish to contribute towards Samaj charitable initiatives? Reach out to our global coordinators.
            </p>

            <div className="info-list">
              <div className="info-item">
                <div className="info-icon-box">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="info-label">Send Email</span>
                  <a href="mailto:connect@lohanasamaj.org" className="info-value">connect@lohanasamaj.org</a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-box">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="info-label">Global Helpline</span>
                  <a href="tel:+18005555642" className="info-value">+1 (800) 555-LOHANA</a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-box">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="info-label">Central Secretariat</span>
                  <span className="info-value">Raghuvanshi Trust House, London & Gujarat</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="contact-form-wrapper">
            <div className="form-card glass-card relative">
              {submitted ? (
                /* OPTIMISTIC SUCCESS STATE */
                <div className="success-overlay fade-in">
                  <CheckCircle2 size={64} className="success-icon" />
                  <h3 className="success-title serif-title text-gold-gradient">Jai Raghuvansh!</h3>
                  <p className="success-text">
                    Thank you, <strong>{formData.name}</strong>, for connecting with the Lohana Samaj.
                  </p>
                  <p className="success-subtext">
                    Your interest in <strong>{formData.interest}</strong> has been registered. A representative from the <strong>{formData.chapter.toUpperCase()} Chapter</strong> will contact you and your family shortly.
                  </p>
                  <button 
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        chapter: 'global',
                        interest: 'membership',
                        message: ''
                      });
                    }}
                    className="btn btn-primary"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                /* ACTUAL CONTACT FORM */
                <form onSubmit={handleSubmit} className="actual-form">
                  <h3 className="form-card-title serif-title">Interest Inquiry Form</h3>
                  <p className="form-card-subtitle">Complete this form to register your details with our coordinators.</p>
                  
                  {error && (
                    <div className="error-message">
                      <ShieldAlert size={16} />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="form-group-grid">
                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="e.g. Rajesh Thakkar" 
                        value={formData.name}
                        onChange={handleChange}
                        required 
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        placeholder="+1 or +91..." 
                        value={formData.phone}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      placeholder="e.g. rajesh@lohana.com" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                  </div>

                  <div className="form-group-grid">
                    <div className="form-group">
                      <label htmlFor="chapter">Nearest Chapter</label>
                      <select 
                        id="chapter" 
                        name="chapter"
                        value={formData.chapter}
                        onChange={handleChange}
                      >
                        <option value="global">Global HQ / UK</option>
                        <option value="india">India Chapter</option>
                        <option value="usa">North America Chapter</option>
                        <option value="africa">East Africa Chapter</option>
                        <option value="gulf">Gulf & Middle East</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="interest">Area of Interest</label>
                      <select 
                        id="interest" 
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                      >
                        <option value="membership">General Samaj Membership</option>
                        <option value="matrimonial">Matrimonial Registration</option>
                        <option value="scholarship">Education Aid & Scholar Info</option>
                        <option value="business">Business Conclave / Venture Hub</option>
                        <option value="volunteer">Volunteer & Philanthropy</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message / Family Details (Optional)</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="4" 
                      placeholder="Share a brief message or family details..."
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary form-submit-btn">
                    <span>Submit Form</span>
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Embedded Styles */}
      <style>{`
        .contact-section {
          background: radial-gradient(circle at 50% 120%, #1e293b 0%, var(--bg-dark) 50%);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 4rem;
          align-items: center;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .contact-info-subtitle {
          font-size: 1.1rem;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 2.5rem;
        }

        .info-list {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
          width: 100%;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .info-icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          border-radius: 12px;
          background: rgba(212, 175, 55, 0.08);
          border: 1px solid var(--border-glass);
          color: var(--gold);
          flex-shrink: 0;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }

        .info-label {
          display: block;
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 0.25rem;
        }

        .info-value {
          font-size: 1.05rem;
          color: var(--text-primary);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        a.info-value:hover {
          color: var(--gold);
        }

        /* Form Card Styling */
        .form-card {
          background: rgba(15, 23, 42, 0.45);
          padding: 3rem !important;
        }

        .form-card-title {
          font-size: 1.8rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .form-card-subtitle {
          font-size: 0.95rem;
          color: var(--text-muted);
          margin-bottom: 2rem;
        }

        .error-message {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.25);
          color: #f87171;
          border-radius: 8px;
          font-size: 0.85rem;
          margin-bottom: 1.5rem;
        }

        .form-group-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
          text-align: left;
        }

        .form-group label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .form-group input, 
        .form-group select, 
        .form-group textarea {
          background: rgba(10, 15, 30, 0.6);
          border: 1px solid var(--border-glass);
          border-radius: 10px;
          padding: 0.85rem 1.1rem;
          color: var(--text-primary);
          font-family: var(--font-sans);
          font-size: 0.95rem;
          transition: all 0.3s ease;
          width: 100%;
        }

        .form-group input:focus, 
        .form-group select:focus, 
        .form-group textarea:focus {
          outline: none;
          border-color: var(--gold);
          box-shadow: 0 0 10px var(--gold-glow);
          background: rgba(10, 15, 30, 0.85);
        }

        .form-submit-btn {
          width: 100%;
          padding: 0.85rem 1.5rem;
          font-size: 1rem;
          margin-top: 0.5rem;
        }

        /* Success Overlay */
        .success-overlay {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 2rem 0;
        }

        .success-icon {
          color: var(--gold);
          margin-bottom: 1.5rem;
          filter: drop-shadow(0 0 12px var(--gold-glow));
          animation: float 4s ease-in-out infinite;
        }

        .success-title {
          font-size: 2.25rem;
          margin-bottom: 0.75rem;
        }

        .success-text {
          font-size: 1.15rem;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .success-subtext {
          font-size: 0.95rem;
          color: var(--text-secondary);
          max-width: 420px;
          margin: 0 auto 2.5rem auto;
          line-height: 1.6;
        }

        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .form-card {
            padding: 2.25rem !important;
          }
        }

        @media (max-width: 576px) {
          .form-group-grid {
            grid-template-columns: 1fr;
            gap: 0;
          }
          .form-card {
            padding: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
