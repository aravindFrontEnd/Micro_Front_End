import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setMessage(`React is working! Count: ${count}`);
  }, [count]);

  return (
    <div style={{
      textAlign: 'center',
      padding: '2rem',
      background: 'linear-gradient(135deg, #61dafb 0%, #21759b 100%)',
      borderRadius: '10px',
      color: 'white'
    }}>
      <h2>⚛️ React Micro Frontend</h2>
      <p>This is a React component with hooks and state management.</p>
      <div style={{
        background: 'rgba(255,255,255,0.1)',
        padding: '1rem',
        borderRadius: '8px',
        margin: '1rem 0'
      }}>
        <p style={{ fontSize: '1.2rem' }}>Count: {count}</p>
        <p style={{ fontSize: '0.9rem' }}>{message}</p>
      </div>
      <button
        onClick={() => setCount(count + 1)}
        style={{
          backgroundColor: '#ffffff',
          color: '#21759b',
          border: 'none',
          borderRadius: '25px',
          padding: '12px 24px',
          cursor: 'pointer',
          fontWeight: 'bold',
          fontSize: '1rem',
          transition: 'all 0.3s ease'
        }}
        onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
        onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
      >
        🚀 Increment
      </button>
    </div>
  );
};

// Only mount if running standalone (not in micro frontend mode)
// Check if we're NOT being loaded by the container
if (document.getElementById('root') && window.location.port === '8081') {
  const root = createRoot(document.getElementById('root'));
  root.render(<App />);
}

export default App;