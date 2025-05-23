import React from 'react';

/**
 * LCDDisplay Component
 * Renders a retro-style LCD display similar to those found in old car stereos.
 * 
 * @param {Object} props Component props
 * @param {string} props.time Time to display
 * @param {string} props.period AM/PM indicator
 * @param {string} props.trackInfo Information about the current track
 * @returns {React.ReactElement} The LCD display UI
 */
const LCDDisplay = ({ 
  time = "12:45", 
  period = "PM", 
  trackInfo = "TRACK 03 - CLASSIC HITS" 
}) => {
  return (
    <div className="stereo-display">
      <div className="display-content">
        <span className="segment">{time}</span>
        <span className="segment"> {period}</span>
        {/* Display track info */}
        <div className="track-info">{trackInfo}</div>
      </div>
    </div>
  );
};

export default LCDDisplay;
