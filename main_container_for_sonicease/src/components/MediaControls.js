import React from 'react';

/**
 * MediaControls Component
 * Renders the media control buttons (play, pause, previous, next)
 * with retro styling to match the old car stereo aesthetic.
 * 
 * @returns {React.ReactElement} The media controls UI
 */
const MediaControls = () => {
  return (
    <div className="media-controls">
      <button className="stereo-button">◄◄</button>
      <button className="stereo-button">■</button>
      <button className="stereo-button">▶</button>
      <button className="stereo-button">►►</button>
    </div>
  );
};

export default MediaControls;
