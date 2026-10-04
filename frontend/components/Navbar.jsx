'use client';

import React from 'react';

export const Navbar = ({ backendStatus }) => {
  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px 0',
      borderBottom: '1px solid var(--border-color)',
      marginBottom: '40px'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{
          width: '38px',
          height: '38px',
          borderRadius: '10px',
          background: 'var(--gradient-primary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#040914',
          fontWeight: 'bold',
          fontSize: '1.2rem',
          boxShadow: '0 0 15px rgba(0, 242, 254, 0.4)'
        }}>
          D
        </div>
        <div>
          <span style={{ fontSize: '1.3rem', fontWeight: '800', fontFamily: 'var(--font-heading)', letterSpacing: '-0.5px' }}>
            DREMO<span style={{ color: 'var(--accent-cyan)' }}>.NEXT</span>
          </span>
          <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            Next.js + Express Fullstack
          </span>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 14px',
          borderRadius: '20px',
          background: backendStatus === 'online' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(245, 158, 11, 0.1)',
          border: `1px solid ${backendStatus === 'online' ? 'rgba(16, 185, 129, 0.3)' : 'rgba(245, 158, 11, 0.3)'}`,
          fontSize: '0.85rem',
          fontWeight: '500'
        }}>
          <span style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: backendStatus === 'online' ? 'var(--accent-emerald)' : 'var(--accent-amber)',
            boxShadow: `0 0 8px ${backendStatus === 'online' ? 'var(--accent-emerald)' : 'var(--accent-amber)'}`
          }} />
          <span>Backend API: <strong>{backendStatus === 'online' ? 'Connected (Port 5000)' : 'Connecting / Offline'}</strong></span>
        </div>
      </div>
    </nav>
  );
};
