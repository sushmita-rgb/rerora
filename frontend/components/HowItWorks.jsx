'use client';

import React from 'react';

const STEPS = [
  {
    num: '01',
    title: 'Discover',
    desc: 'Find out what technology can actually do and discover fields you never knew existed.'
  },
  {
    num: '02',
    title: 'Explore',
    desc: 'Take the interactive quiz and explore paths without any pressure to commit.'
  },
  {
    num: '03',
    title: 'Learn',
    desc: 'Follow structured, high-quality roadmaps built using top free resources available online.'
  },
  {
    num: '04',
    title: 'Build',
    desc: 'Create your first real projects, build a portfolio, and learn alongside supportive mentors.'
  }
];

export function HowItWorks() {
  return (
    <section className="section-wrapper" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <span className="tagline">The Four-Step Journey</span>
          <h2 className="section-title">How Rorera works</h2>
          <p className="section-desc">
            A simple, no-pressure framework designed specifically for beginners taking their first steps in tech.
          </p>
        </div>

        <div className="steps-grid">
          {STEPS.map((step, idx) => (
            <div key={idx} className="step-card">
              <span className="step-number">{step.num} — {step.title}</span>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
