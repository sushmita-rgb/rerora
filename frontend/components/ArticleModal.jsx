'use client';

import React from 'react';

export function ArticleModal({ article, onClose }) {
  if (!article) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '720px' }}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        <span className="article-category" style={{ marginBottom: '12px', display: 'inline-block' }}>
          {article.category}
        </span>

        <h2 style={{ fontSize: '1.85rem', color: 'var(--text-main)', marginBottom: '12px', lineHeight: 1.25 }}>
          {article.title}
        </h2>

        <div style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginBottom: '28px', paddingBottom: '16px', borderBottom: '1px solid var(--border-subtle)', display: 'flex', gap: '16px' }}>
          <span>{article.readTime}</span>
          <span>•</span>
          <span>{article.date}</span>
        </div>

        <div style={{ fontSize: '1.02rem', lineHeight: 1.7, color: 'var(--text-muted)' }}>
          {article.content.split('\n\n').map((paragraph, idx) => {
            if (paragraph.startsWith('### ')) {
              return (
                <h3 key={idx} style={{ fontSize: '1.3rem', color: 'var(--text-main)', marginTop: '24px', marginBottom: '10px' }}>
                  {paragraph.replace('### ', '')}
                </h3>
              );
            }
            if (paragraph.startsWith('- ')) {
              return (
                <ul key={idx} style={{ paddingLeft: '20px', marginBottom: '16px' }}>
                  {paragraph.split('\n').map((li, lidx) => (
                    <li key={lidx} style={{ marginBottom: '6px' }}>
                      {li.replace('- ', '')}
                    </li>
                  ))}
                </ul>
              );
            }
            if (paragraph.startsWith('1. ') || paragraph.startsWith('2. ')) {
              return (
                <ol key={idx} style={{ paddingLeft: '20px', marginBottom: '16px' }}>
                  {paragraph.split('\n').map((li, lidx) => (
                    <li key={lidx} style={{ marginBottom: '6px' }}>
                      {li.replace(/^\d+\.\s*/, '')}
                    </li>
                  ))}
                </ol>
              );
            }
            return (
              <p key={idx} style={{ marginBottom: '16px' }}>
                {paragraph}
              </p>
            );
          })}
        </div>

        <div style={{ marginTop: '32px', paddingTop: '20px', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'flex-end' }}>
          <button className="btn btn-pink" onClick={onClose}>
            Close Article
          </button>
        </div>
      </div>
    </div>
  );
}
