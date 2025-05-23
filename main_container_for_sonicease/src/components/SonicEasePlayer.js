import React from 'react';
import LCDDisplay from './LCDDisplay';
import MediaControls from './MediaControls';
import SpeakerGrill from './SpeakerGrill';
import ControlKnob from './ControlKnob';

/**
 * SonicEasePlayer Component
 * This component represents the main UI for the SonicEase music player,
 * styled to look like a retro car stereo.
 * 
 * @returns {React.ReactElement} The SonicEase player UI
 */
const SonicEasePlayer = () => {
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
            <SpeakerGrill holeCount={48} />
          </div>
          
          {/* Center - media controls */}
          <div className="control-group center-controls">
            <MediaControls />
          </div>
          
          {/* Right side - speaker grill */}
          <div className="control-group right-controls">
            <SpeakerGrill holeCount={48} />
          </div>
        </div>
        
        {/* Bottom row of controls */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          marginTop: '15px'
        }}>
          {/* Volume knob */}
          <ControlKnob label="VOLUME" />
          
          {/* Preset buttons */}
          <div style={{ display: 'flex', gap: '10px' }}>
            <button className="stereo-button">1</button>
            <button className="stereo-button">2</button>
            <button className="stereo-button">3</button>
            <button className="stereo-button">4</button>
          </div>
          
          {/* Balance knob */}
          <ControlKnob label="BALANCE" />
        </div>
      </div>
    </div>
  );
};

export default SonicEasePlayer;
