'use client';

import React from 'react';

export function TermsPrivacyModal({ type, onClose }) {
  if (!type) return null;

  const isTerms = type === 'terms';

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        <span className="article-category" style={{ marginBottom: '12px', display: 'inline-block' }}>
          Legal Placeholder
        </span>

        <h2 style={{ fontSize: '1.75rem', marginBottom: '16px' }}>
          {isTerms ? 'Terms & Conditions' : 'Privacy Policy'}
        </h2>

        <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '20px' }}>
          This is a placeholder for Rorera's official {isTerms ? 'Terms & Conditions' : 'Privacy Policy'}. Rorera is committed to maintaining a safe, transparent, and student-focused environment.
        </p>

        <div style={{ background: 'var(--bg-page)', padding: '20px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', marginBottom: '24px' }}>
          <h4 style={{ fontSize: '1rem', marginBottom: '8px', color: 'var(--text-main)' }}>Key Principles:</h4>
          <ul style={{ paddingLeft: '20px', color: 'var(--text-muted)', fontSize: '0.94rem' }}>
            <li style={{ marginBottom: '6px' }}>No sign-up or personal data is collected to take the technology discovery quiz.</li>
            <li style={{ marginBottom: '6px' }}>All learning resources recommended by Rorera are free and accessible.</li>
            <li style={{ marginBottom: '6px' }}>School workshop registrations are processed solely for educational coordination.</li>
          </ul>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button className="btn btn-pink" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
