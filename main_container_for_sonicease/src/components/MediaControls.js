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
      <button className="stereo-button" data-label="PREV">◄◄</button>
      <button className="stereo-button" data-label="STOP">■</button>
      <button className="stereo-button" data-label="PLAY">▶</button>
      <button className="stereo-button" data-label="NEXT">►►</button>
    </div>
  );
};

export default MediaControls;
