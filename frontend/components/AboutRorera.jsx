'use client';

import React from 'react';

const PHILOSOPHY_STEPS = [
  {
    icon: '🧭',
    title: 'Discover',
    desc: 'Uncover what technology actually means beyond standard subjects. No jargon, just curiosity.'
  },
  {
    icon: '🗺️',
    title: 'Explore',
    desc: 'Try out different branches — from Web and Apps to Game Design and AI — before committing.'
  },
  {
    icon: '📚',
    title: 'Learn',
    desc: 'Follow curated, high-quality free learning paths with structured guidance step-by-step.'
  },
  {
    icon: '🚀',
    title: 'Build',
    desc: 'Turn ideas into real working projects and collaborate with peer mentors and supportive student groups.'
  }
];

export function AboutRorera() {
  return (
    <section className="section-wrapper" id="about">
      <div className="container">
        <div className="section-header">
          <span className="tagline">About the Organization</span>
          <h2 className="section-title">So, what is Rorera?</h2>
          <p className="section-desc">
            Rorera is an organization created for anyone who is a beginner and curious about technology. We help you discover technology, understand different paths, and find a clear place to start exploring.
          </p>
        </div>

        <div style={{
          background: 'var(--bg-pink-tint)',
          border: '1px solid var(--border-pink)',
          borderRadius: 'var(--radius-lg)',
          padding: '32px 36px',
          marginBottom: '48px'
        }}>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-main)', fontWeight: 600, lineHeight: 1.6 }}>
            “We conduct technology-awareness workshops in schools and local communities — especially where beginners may have limited exposure to tech careers — to open doors to digital possibilities.”
          </p>
        </div>

        <div className="cards-grid-4">
          {PHILOSOPHY_STEPS.map((step, idx) => (
            <div key={idx} className="concept-card">
              <div className="concept-icon-wrap">{step.icon}</div>
              <h3 className="concept-card-title">{step.title}</h3>
              <p className="concept-card-text">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
