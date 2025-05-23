import React from 'react';
import './App.css';

// PUBLIC_INTERFACE
/**
 * SonicEase Music Player - Main Container Component
 * A React component that renders a UI resembling an old car stereo.
 * This version focuses on visual design and structure only.
 */
function App() {
  // Generate speaker grill holes
  const renderGrillHoles = (count) => {
    const holes = [];
    for (let i = 0; i < count; i++) {
      holes.push(<div key={i} className="grill-hole"></div>);
    }
    return holes;
  };

  return (
    <div className="app">
      <div className="stereo-container">
        <div className="stereo-frame">
          <div className="power-light"></div>
          <div className="stereo-brand">SONIC EASE</div>
          
          {/* Display section with LCD effect */}
          <div className="stereo-display">
            <div className="display-content">
              <span className="segment">12:45</span>
              <span className="segment"> PM</span>
              {/* Display track info */}
              <div className="track-info">TRACK 03 - CLASSIC HITS</div>
            </div>
          </div>
          
          {/* Controls section */}
          <div className="stereo-controls">
            {/* Left side - speaker grill */}
            <div className="control-group left-controls">
              <div className="speaker-grill">
                {renderGrillHoles(48)}
              </div>
            </div>
            
            {/* Center - media controls */}
            <div className="control-group center-controls">
              <div className="media-controls">
                <button className="stereo-button">◄◄</button>
                <button className="stereo-button">■</button>
                <button className="stereo-button">▶</button>
                <button className="stereo-button">►►</button>
              </div>
            </div>
            
            {/* Right side - speaker grill */}
            <div className="control-group right-controls">
              <div className="speaker-grill">
                {renderGrillHoles(48)}
              </div>
            </div>
          </div>
          
          {/* Bottom row of controls */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            marginTop: '15px'
          }}>
            {/* Volume knob */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div className="stereo-knob">
                <div className="knob-marker"></div>
              </div>
              <div style={{ fontSize: '10px', marginTop: '5px' }}>VOLUME</div>
            </div>
            
            {/* Preset buttons */}
            <div style={{ display: 'flex', gap: '10px' }}>
              <button className="stereo-button">1</button>
              <button className="stereo-button">2</button>
              <button className="stereo-button">3</button>
              <button className="stereo-button">4</button>
            </div>
            
            {/* Balance knob */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div className="stereo-knob">
                <div className="knob-marker"></div>
              </div>
              <div style={{ fontSize: '10px', marginTop: '5px' }}>BALANCE</div>
            </div>
          </div>
        </div>
      </div>
      
      <div style={{ marginTop: '20px', textAlign: 'center', color: 'var(--text-secondary)' }}>
        <p>SonicEase Music Player - Retro Edition</p>
      </div>
    </div>
  );
}

export default App;
