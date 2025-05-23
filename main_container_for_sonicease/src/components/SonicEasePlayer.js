import React from 'react';
import LCDDisplay from './LCDDisplay';

/**
 * SonicEasePlayer Component
 * This component represents the main UI for the SonicEase music player,
 * styled to look like a retro car stereo.
 * 
 * @returns {React.ReactElement} The SonicEase player UI
 */
const SonicEasePlayer = () => {
  // Generate speaker grill holes
  const renderGrillHoles = (count) => {
    const holes = [];
    for (let i = 0; i < count; i++) {
      holes.push(<div key={i} className="grill-hole"></div>);
    }
    return holes;
  };

  return (
    <div className="stereo-container">
      <div className="stereo-frame">
        <div className="power-light"></div>
        <div className="stereo-brand">SONIC EASE</div>
        
        {/* LCD Display component */}
        <LCDDisplay 
          time="12:45"
          period="PM"
          trackInfo="TRACK 03 - CLASSIC HITS"
        />
        
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
  );
};

export default SonicEasePlayer;
