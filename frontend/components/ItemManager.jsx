'use client';

import React, { useState, useEffect } from 'react';
import { fetchItems, createItem, deleteItem } from '../services/api';

export const ItemManager = ({ onStatusUpdate }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Frontend');
  const [error, setError] = useState('');

  const loadData = async () => {
    setLoading(true);
    setError('');
    const res = await fetchItems();
    if (res && res.success) {
      setItems(res.data);
      if (onStatusUpdate) onStatusUpdate('online');
    } else {
      setError('Unable to fetch items from backend API. Make sure backend is running on port 5000.');
      if (onStatusUpdate) onStatusUpdate('offline');
    }
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    try {
      const res = await createItem({ title, category });
      if (res && res.success) {
        setItems([res.data, ...items]);
        setTitle('');
      }
    } catch (err) {
      setError('Error creating item via API');
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteItem(id);
      setItems(items.filter(item => item.id !== id));
    } catch (err) {
      setError('Error deleting item via API');
    }
  };

  return (
    <section id="item-manager" className="glass-panel" style={{ padding: '32px', marginBottom: '40px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <h2 style={{ fontSize: '1.4rem' }}>🔌 Live API Integration Test</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            Interact with REST endpoints exposed by Express at <code style={{ color: 'var(--accent-cyan)' }}>http://localhost:5000/api/items</code>
          </p>
        </div>
        <button onClick={loadData} className="btn btn-secondary" style={{ fontSize: '0.85rem' }}>
          🔄 Refresh Data
        </button>
      </div>

      {error && (
        <div style={{
          padding: '12px 16px',
          borderRadius: '10px',
          background: 'rgba(239, 68, 68, 0.15)',
          border: '1px solid rgba(239, 68, 68, 0.3)',
          color: '#fca5a5',
          fontSize: '0.9rem',
          marginBottom: '20px'
        }}>
          ⚠️ {error}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleCreate} style={{ display: 'flex', gap: '12px', marginBottom: '24px', flexWrap: 'wrap' }}>
        <input
          type="text"
          placeholder="New feature / component title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            flex: 1,
            minWidth: '220px',
            padding: '12px 16px',
            borderRadius: 'var(--radius-md)',
            background: 'rgba(0, 0, 0, 0.3)',
            border: '1px solid var(--border-color)',
            color: 'var(--text-primary)',
            fontSize: '0.95rem',
            outline: 'none'
          }}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{
            padding: '12px 16px',
            borderRadius: 'var(--radius-md)',
            background: '#121824',
            border: '1px solid var(--border-color)',
            color: 'var(--text-primary)',
            fontSize: '0.95rem',
            outline: 'none'
          }}
        >
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Database">Database</option>
          <option value="DevOps">DevOps</option>
        </select>
        <button type="submit" className="btn btn-primary">
          + Add Item
        </button>
      </form>

      {/* List */}
      {loading ? (
        <div style={{ textAlign: 'center', padding: '30px', color: 'var(--text-muted)' }}>
          Loading items from backend server...
        </div>
      ) : items.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '30px', color: 'var(--text-muted)' }}>
          No items found. Create your first item above!
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {items.map((item) => (
            <div
              key={item.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 20px',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                transition: 'var(--transition-fast)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <span style={{
                  fontSize: '0.75rem',
                  padding: '4px 10px',
                  borderRadius: '12px',
                  background: 'rgba(79, 172, 254, 0.1)',
                  color: 'var(--accent-cyan)',
                  fontWeight: '600'
                }}>
                  {item.category}
                </span>
                <span style={{ fontWeight: '600', fontSize: '1rem' }}>{item.title}</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  ID: {item.id}
                </span>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="btn btn-danger"
                  style={{ padding: '6px 12px', fontSize: '0.8rem' }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
