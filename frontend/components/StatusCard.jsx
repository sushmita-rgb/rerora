'use client';

import React from 'react';

export const StatusCard = () => {
  const stacks = [
    { title: 'Frontend Workspace', tech: 'Next.js 14 App Router', dir: '/frontend/app', icon: '⚛️', status: 'Port 3000' },
    { title: 'Backend REST API', tech: 'Node.js + Express', dir: '/backend', icon: '⚡', status: 'Port 5000' },
    { title: 'API Router & Controllers', tech: 'ES Modules Architecture', dir: '/backend/src', icon: '🔀', status: 'Modular' },
    { title: 'Global Environment', tech: 'Dotenv & CORS Config', dir: '/.env', icon: '🛡️', status: 'Isolated' }
  ];

  return (
    <section id="architecture" style={{ marginBottom: '36px' }}>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span>🏗️</span> Project Directory Architecture
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
        {stacks.map((s, idx) => (
          <div key={idx} className="glass-panel" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <span style={{ fontSize: '1.8rem' }}>{s.icon}</span>
              <span style={{
                fontSize: '0.75rem',
                padding: '4px 10px',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-color)',
                color: 'var(--accent-cyan)'
              }}>
                {s.status}
              </span>
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '6px' }}>{s.title}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '12px' }}>{s.tech}</p>
            <code style={{
              display: 'block',
              background: 'rgba(0, 0, 0, 0.4)',
              padding: '6px 12px',
              borderRadius: '6px',
              fontSize: '0.8rem',
              color: '#38bdf8'
            }}>
              {s.dir}
            </code>
          </div>
        ))}
      </div>
    </section>
  );
};
