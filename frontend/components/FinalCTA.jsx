'use client';

import React from 'react';

export function FinalCTA({ onStartQuiz, onExploreTech }) {
  return (
    <section className="section-wrapper">
      <div className="container">
        <div className="cta-box">
          <h2 className="cta-title">You don't need to know your future yet.</h2>
          <p className="cta-desc">
            You just need somewhere to start exploring. Take your first step with Rorera today.
          </p>

          <div className="cta-actions">
            <button className="btn btn-pink" onClick={onExploreTech}>
              Explore Technology →
            </button>
            
            <button className="btn btn-secondary" onClick={onStartQuiz}>
              Take the Quiz Again
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
