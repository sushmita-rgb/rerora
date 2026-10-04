'use client';

import React, { useState } from 'react';

export function ContactModal({ type, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    schoolName: '',
    email: '',
    role: 'student',
    message: ''
  });

  if (!type) return null;

  const isWorkshop = type === 'workshop';

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        {!submitted ? (
          <>
            <h2 style={{ fontSize: '1.75rem', marginBottom: '8px' }}>
              {isWorkshop ? 'Request a School Workshop 🏫' : 'Get in Touch with Rorera 💬'}
            </h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '24px', fontSize: '0.98rem' }}>
              {isWorkshop
                ? 'Tell us about your school or student community and we will reach out to schedule an awareness workshop.'
                : 'Have questions, feedback, or ideas? We would love to hear from you.'}
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Your Name</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g. Alex Morgan"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              {isWorkshop && (
                <div className="form-group">
                  <label className="form-label">School / Organization Name</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="e.g. Oakridge High School"
                    required
                    value={formData.schoolName}
                    onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                  />
                </div>
              )}

              <div className="form-group">
                <label className="form-label">Contact Email</label>
                <input
                  type="email"
                  className="form-input"
                  placeholder="name@school.edu"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">I am a...</label>
                <select
                  className="form-select"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                >
                  <option value="beginner">Tech Beginner / Learner</option>
                  <option value="teacher">Teacher / Educator</option>
                  <option value="principal">School Administrator</option>
                  <option value="mentor">Potential Tech Mentor</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Message / Workshop Details</label>
                <textarea
                  className="form-textarea"
                  rows="4"
                  placeholder={isWorkshop ? 'Tell us estimated student count, grade level, and location...' : 'How can we help you?'}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '24px' }}>
                <button type="button" className="btn btn-secondary" onClick={onClose}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-pink">
                  {isWorkshop ? 'Submit Workshop Request →' : 'Send Message →'}
                </button>
              </div>
            </form>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '24px 12px' }}>
            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>✨</div>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '12px' }}>Message Received!</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '28px', fontSize: '1.05rem' }}>
              Thank you for connecting with Rorera. We will review your message and reply via email at <strong>{formData.email}</strong>.
            </p>
            <button className="btn btn-pink" onClick={onClose}>
              Back to Rorera Homepage
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
