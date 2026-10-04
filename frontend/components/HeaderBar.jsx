'use client';

import React from 'react';

export function HeaderBar() {
  return (
    <header className="brand-header">
      <a href="#" className="brand-logo" aria-label="Rorera Homepage">
        <div className="brand-symbol">R</div>
        <span className="brand-name">RORERA</span>
      </a>

      <div className="brand-tag">
        <span className="brand-tag-dot"></span>
        <span>Beginner Tech Discovery</span>
      </div>
    </header>
  );
}
