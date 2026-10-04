'use client';

import React from 'react';

export function Hero({ onStartQuiz }) {
  return (
    <section className="hero-section">
      <div className="hero-pill">
        <span>✨ Beginner Discovery Platform</span>
      </div>

      <h1 className="hero-headline">
        What part of technology would you <span className="highlight-pink">love to explore?</span>
      </h1>

      <p className="hero-subtext">
        Technology is bigger than coding. Let's find out what you're curious about and help you discover your path.
      </p>

      <div className="hero-cta-group">
        <button className="btn btn-pink" onClick={onStartQuiz}>
          Take the 2-Minute Quiz →
        </button>

        <p className="hero-reassure">
          <span className="hero-reassure-check">✓</span> No sign-up required
        </p>
      </div>
    </section>
  );
}
