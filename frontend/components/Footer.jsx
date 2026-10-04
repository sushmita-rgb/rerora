'use client';

import React, { useState } from 'react';

export function Footer({ onOpenContact, onOpenLegal, onScrollToSection }) {
  const [copied, setCopied] = useState(false);
  const email = 'hello@rorera.org';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-top">
            <div>
              <div className="brand-logo" style={{ marginBottom: '12px' }}>
                <div className="brand-symbol">R</div>
                <span className="brand-name">RORERA</span>
              </div>
              <p className="footer-slogan">Learn. Explore. Build.</p>
              <p className="footer-brand-desc">
                An organization created for anyone who is a beginner and curious about technology, helping you discover technology career paths and explore digital possibilities.
              </p>
            </div>

            <div className="footer-links-group">
              <div>
                <p className="footer-col-title">Navigation</p>
                <ul className="footer-links">
                  <li>
                    <button className="footer-link" onClick={() => onScrollToSection('quiz-section')}>
                      Discovery Quiz
                    </button>
                  </li>
                  <li>
                    <button className="footer-link" onClick={() => onScrollToSection('about')}>
                      About Rorera
                    </button>
                  </li>
                  <li>
                    <button className="footer-link" onClick={() => onScrollToSection('outreach')}>
                      Workshops
                    </button>
                  </li>
                  <li>
                    <button className="footer-link" onClick={() => onScrollToSection('paths')}>
                      Exploration Paths
                    </button>
                  </li>
                </ul>
              </div>

              <div>
                <p className="footer-col-title">Organization</p>
                <ul className="footer-links">
                  <li>
                    <button className="footer-link" onClick={() => onOpenContact('workshop')}>
                      Request Workshop
                    </button>
                  </li>
                  <li>
                    <button className="footer-link" onClick={() => onOpenContact('general')}>
                      Contact Us
                    </button>
                  </li>
                  <li>
                    <button className="footer-link" onClick={() => onOpenLegal('terms')}>
                      Terms & Conditions
                    </button>
                  </li>
                  <li>
                    <button className="footer-link" onClick={() => onOpenLegal('privacy')}>
                      Privacy Policy
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div>
              © {new Date().getFullYear()} Rorera Organization. Beginner Technology Awareness & Discovery.
            </div>

            <div className="footer-email-box">
              <span>{email}</span>
              <button className="footer-email-copy" onClick={handleCopyEmail}>
                {copied ? '✓ Copied' : 'Copy Email'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
