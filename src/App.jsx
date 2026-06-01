import { useState, useEffect } from 'react';
import { fetchItems, healthCheck } from './api';

function App() {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState('checking...');

  useEffect(() => {
    healthCheck().then(d => setStatus(d.status)).catch(() => setStatus('down'));
    fetchItems().then(setItems).catch(console.error);
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>My App</h1>
      <p>Backend: <strong>{status}</strong></p>
      <ul>
        {items.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  );
}

export default App;