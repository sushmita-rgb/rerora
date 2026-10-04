const API_BASE_URL = typeof window !== 'undefined' ? '/api' : 'http://localhost:5000/api';

export const fetchHealth = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/health`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Health check failed');
    return await res.json();
  } catch (error) {
    console.warn('Backend API connection issue:', error.message);
    return null;
  }
};

export const fetchItems = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/items`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch items');
    return await res.json();
  } catch (error) {
    console.warn('Backend fetch error:', error.message);
    return null;
  }
};

export const createItem = async (itemData) => {
  try {
    const res = await fetch(`${API_BASE_URL}/items`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(itemData),
    });
    if (!res.ok) throw new Error('Failed to create item');
    return await res.json();
  } catch (error) {
    console.error('Create item error:', error);
    throw error;
  }
};

export const deleteItem = async (id) => {
  try {
    const res = await fetch(`${API_BASE_URL}/items/${id}`, {
      method: 'DELETE',
    });
    if (!res.ok) throw new Error('Failed to delete item');
    return await res.json();
  } catch (error) {
    console.error('Delete item error:', error);
    throw error;
  }
};
