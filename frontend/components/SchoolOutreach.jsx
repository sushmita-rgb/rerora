'use client';

import React from 'react';

const OUTREACH_CARDS = [
  {
    icon: '🏫',
    title: 'School Workshops',
    desc: 'Interactive, beginner-friendly technology sessions conducted directly inside classrooms and community spaces.'
  },
  {
    icon: '💬',
    title: 'Beginner Sessions',
    desc: 'Open Q&A, mentor-guided roundtables, and honest discussions about what working in tech is really like.'
  },
  {
    icon: '💡',
    title: 'Technology Awareness',
    desc: 'Demystifying fields like Cybersecurity, Web Systems, and AI for beginners with zero prior coding background.'
  },
  {
    icon: '🤝',
    title: 'Beginner Community',
    desc: 'Connecting curious beginners across schools and communities so no one has to explore technology alone.'
  }
];

export function SchoolOutreach({ onRequestWorkshop }) {
  return (
    <section className="section-wrapper-dark" id="outreach">
      <div className="container">
        <div className="section-header section-header-dark">
          <span className="tagline">Our Workshop Initiative</span>
          <h2 className="section-title section-title-dark">
            Technology should be something you get to discover.
          </h2>
          <p className="section-desc section-desc-dark">
            We're starting by taking technology beyond screens — bringing live workshops into classrooms, schools, and beginner communities.
          </p>
        </div>

        <div className="outreach-grid">
          {OUTREACH_CARDS.map((card, idx) => (
            <div key={idx} className="outreach-card">
              <div className="outreach-card-art">
                <div className="outreach-card-art-accent"></div>
                <span className="outreach-card-art-icon">{card.icon}</span>
              </div>
              <h3 className="outreach-card-title">{card.title}</h3>
              <p className="outreach-card-desc">{card.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '48px', textAlign: 'center' }}>
          <button className="btn btn-dark" onClick={onRequestWorkshop}>
            Request a School Workshop →
          </button>
        </div>
      </div>
    </section>
  );
}
