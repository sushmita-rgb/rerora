'use client';

import React from 'react';

export function InteractiveQuizTeaser({ onOpenQuiz }) {
  return (
    <section className="container" id="quiz-section" style={{ margin: '20px auto 60px' }}>
      <div className="quiz-teaser-card">
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <span className="brand-tag" style={{ marginBottom: '16px', display: 'inline-flex' }}>
            ✨ Interactive Discovery
          </span>

          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', marginBottom: '14px', color: 'var(--text-main)', letterSpacing: '-0.025em' }}>
            Find out what part of technology sparks your curiosity
          </h2>

          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginBottom: '28px', lineHeight: 1.6 }}>
            No prior knowledge or coding background required. Answer 5 quick questions about what you enjoy doing, and discover your path.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button className="btn btn-pink" onClick={onOpenQuiz}>
              Take the Quiz Now →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
