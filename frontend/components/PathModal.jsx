'use client';

import React from 'react';

export function PathModal({ path, onClose }) {
  if (!path) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <span style={{ fontSize: '2.4rem' }}>{path.icon}</span>
          <div>
            <span style={{
              fontSize: '0.78rem',
              fontWeight: 700,
              textTransform: uppercaseText(path.duration),
              color: 'var(--accent-pink-dark)',
              background: 'var(--bg-pink-tint)',
              padding: '2px 10px',
              borderRadius: 'var(--radius-full)'
            }}>
              {path.duration}
            </span>
            <h2 style={{ fontSize: '1.8rem', marginTop: '4px' }}>{path.title}</h2>
          </div>
        </div>

        <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginBottom: '24px', lineHeight: 1.6 }}>
          {path.overview}
        </p>

        <div style={{ marginBottom: '28px' }}>
          <p style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-light)', marginBottom: '10px' }}>
            Primary Tools You'll Discover
          </p>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {path.tools.map((tool, idx) => (
              <span key={idx} style={{
                background: 'var(--bg-surface-subtle)',
                border: '1px solid var(--border-subtle)',
                padding: '4px 12px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.88rem',
                fontWeight: 600,
                color: 'var(--text-main)'
              }}>
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <p style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-pink-strong)', marginBottom: '16px' }}>
            Beginner Discovery Roadmap
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {path.roadmap.map((item, idx) => (
              <div key={idx} style={{
                background: 'var(--bg-page)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-sm)',
                padding: '14px 18px'
              }}>
                <h4 style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '4px' }}>
                  {item.step}
                </h4>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', margin: 0 }}>
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
          <button className="btn btn-pink" onClick={onClose}>
            Got It! Close Preview
          </button>
        </div>
      </div>
    </div>
  );
}

function uppercaseText(str) {
  return str ? str.toUpperCase() : '';
}
