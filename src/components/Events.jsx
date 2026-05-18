import { useState } from 'react';
import { Calendar, MapPin, Tag, ArrowUpRight } from 'lucide-react';

export default function Events() {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Events' },
    { id: 'business', label: 'Business & Professional' },
    { id: 'cultural', label: 'Cultural & Festive' },
    { id: 'charity', label: 'Philanthropy & Health' }
  ];

  const eventsData = [
    {
      id: 1,
      title: 'Global Lohana Business Conclave 2026',
      category: 'business',
      date: { day: '18', month: 'OCT' },
      time: '09:00 AM - 06:00 PM',
      location: 'London, United Kingdom',
      description: 'Bringing together global Lohana entrepreneurs, investors, and startup visionaries to foster international collaborations and trade growth.',
      linkText: 'Register Delegate'
    },
    {
      id: 2,
      title: 'Grand Raghuvanshi Navratri Utsav',
      category: 'cultural',
      date: { day: '24', month: 'OCT' },
      time: '07:30 PM - Midnight',
      location: 'Mumbai, India',
      description: 'Celebrate our vibrant cultural roots during the nine nights of traditional Garba and Dandiya with exquisite musical arrangements and community awards.',
      linkText: 'Pass RSVP'
    },
    {
      id: 3,
      title: 'Youth Career Mentorship & Networking',
      category: 'business',
      date: { day: '05', month: 'NOV' },
      time: '02:00 PM - 05:00 PM',
      location: 'Virtual Event (Zoom)',
      description: 'An exclusive panel of industry executives and founders mentoring young Lohana graduates on career paths, technology, and starting companies.',
      linkText: 'Join Stream'
    },
    {
      id: 4,
      title: 'Global Samaj Mega Welfare & Medical Drive',
      category: 'charity',
      date: { day: '22', month: 'NOV' },
      time: '08:00 AM - 04:00 PM',
      location: 'Gujarat, India (Multiple Centers)',
      description: 'Our annual medical diagnostic and healthcare drive providing comprehensive eye care, dental care, and general medicine absolutely free to remote villages.',
      linkText: 'Volunteer Now'
    }
  ];

  const filteredEvents = filter === 'all' 
    ? eventsData 
    : eventsData.filter(event => event.category === filter);

  return (
    <section id="events" className="events-section section-padding relative">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-tag text-gold-gradient">Gatherings & Forums</span>
          <h2 className="section-title serif-title">Upcoming Samaj Events</h2>
          <p className="section-subtitle">
            Stay connected, participate in rich cultural programs, leverage professional networking, and drive social change.
          </p>
        </div>

        {/* Category Filters */}
        <div className="filter-controls-wrapper">
          <div className="filter-controls">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="events-grid">
          {filteredEvents.map((event) => (
            <div key={event.id} className="event-card glass-card fade-in">
              {/* Event Date Block */}
              <div className="event-date-badge">
                <span className="date-day serif-title">{event.date.day}</span>
                <span className="date-month">{event.date.month}</span>
              </div>

              {/* Event Content */}
              <div className="event-details">
                <div className="event-meta">
                  <span className={`cat-tag tag-${event.category}`}>
                    <Tag size={12} />
                    <span>{event.category.toUpperCase()}</span>
                  </span>
                  <span className="time-indicator">{event.time}</span>
                </div>

                <h3 className="event-card-title serif-title">{event.title}</h3>
                <p className="event-card-desc">{event.description}</p>

                <div className="event-footer">
                  <span className="location-info">
                    <MapPin size={16} className="loc-icon" />
                    <span>{event.location}</span>
                  </span>

                  <a href="#contact" className="event-link">
                    <span>{event.linkText}</span>
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Embedded Styles */}
      <style>{`
        .events-section {
          background: var(--bg-dark);
        }

        .filter-controls-wrapper {
          display: flex;
          justify-content: center;
          margin-bottom: 4rem;
        }

        .filter-controls {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.75rem;
          padding: 0.4rem;
          background: rgba(15, 23, 42, 0.4);
          border-radius: 9999px;
          border: 1px solid var(--border-glass);
        }

        .filter-btn {
          border: none;
          background: transparent;
          color: var(--text-secondary);
          padding: 0.6rem 1.35rem;
          border-radius: 9999px;
          font-family: var(--font-sans);
          font-weight: 500;
          cursor: pointer;
          font-size: 0.9rem;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .filter-btn:hover {
          color: var(--text-primary);
        }

        .filter-btn.active {
          background: linear-gradient(135deg, var(--gold) 0%, #b8860b 100%);
          color: #070a13;
          font-weight: 600;
          box-shadow: 0 4px 12px var(--gold-glow);
        }

        /* Events Grid Styling */
        .events-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .event-card {
          display: flex;
          gap: 1.75rem;
          padding: 2.25rem !important;
          background: rgba(15, 23, 42, 0.35);
          position: relative;
        }

        /* Floating Date Badge */
        .event-date-badge {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 75px;
          height: 85px;
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(212, 175, 55, 0.02) 100%);
          border: 1px solid var(--border-glass);
          border-radius: 12px;
          flex-shrink: 0;
          box-shadow: 0 8px 16px rgba(0,0,0,0.2);
        }

        .date-day {
          font-size: 2rem;
          font-weight: 700;
          color: var(--gold-light);
          line-height: 1;
        }

        .date-month {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 1px;
          color: var(--text-muted);
          margin-top: 0.25rem;
        }

        /* Event Details */
        .event-details {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          gap: 0.75rem;
        }

        .event-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.8rem;
        }

        .cat-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.25rem 0.65rem;
          border-radius: 9999px;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        .tag-business {
          background: rgba(59, 130, 246, 0.1);
          color: #60a5fa;
          border: 1px solid rgba(59, 130, 246, 0.2);
        }

        .tag-cultural {
          background: rgba(245, 158, 11, 0.1);
          color: #fbbf24;
          border: 1px solid rgba(245, 158, 11, 0.2);
        }

        .tag-charity {
          background: rgba(16, 185, 129, 0.1);
          color: #34d399;
          border: 1px solid rgba(16, 185, 129, 0.2);
        }

        .time-indicator {
          color: var(--text-muted);
        }

        .event-card-title {
          font-size: 1.4rem;
          line-height: 1.3;
          color: var(--text-primary);
          transition: color 0.3s ease;
        }

        .event-card:hover .event-card-title {
          color: var(--gold-light);
        }

        .event-card-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .event-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: auto;
          padding-top: 1.25rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .location-info {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .loc-icon {
          color: var(--gold);
        }

        .event-link {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          color: var(--text-primary);
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .event-link:hover {
          color: var(--gold-light);
          transform: translateX(2px);
        }

        @media (max-width: 992px) {
          .events-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .event-card {
            flex-direction: column;
            gap: 1.25rem;
          }
          .event-date-badge {
            width: 65px;
            height: 70px;
          }
          .date-day {
            font-size: 1.6rem;
          }
          .filter-controls {
            border-radius: 20px;
            width: 100%;
            padding: 0.75rem !important;
          }
          .filter-btn {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
