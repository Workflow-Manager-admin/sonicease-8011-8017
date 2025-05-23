import React from 'react';
import './App.css';
import SonicEasePlayer from './components/SonicEasePlayer';

// PUBLIC_INTERFACE
/**
 * SonicEase Music Player - Main Container Component
 * A React component that renders a UI resembling an old car stereo.
 * This version focuses on visual design and structure only.
 */
function App() {
  return (
    <div className="app">
      <SonicEasePlayer />
      
      <div style={{ marginTop: '20px', textAlign: 'center', color: 'var(--text-secondary)' }}>
        <p>SonicEase Music Player - Retro Edition</p>
      </div>
    </div>
  );
}

export default App;
