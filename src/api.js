const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export async function fetchItems() {
  const res = await fetch(`${BASE_URL}/api/items`);
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
}

export async function healthCheck() {
  const res = await fetch(`${BASE_URL}/health`);
  return res.json();
}