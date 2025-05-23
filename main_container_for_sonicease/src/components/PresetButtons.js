import React from 'react';

/**
 * PresetButtons Component
 * Renders numbered preset buttons commonly found on car stereos
 * for station/track selection.
 * 
 * @param {Object} props Component props
 * @param {number} props.count Number of preset buttons to render
 * @returns {React.ReactElement} The preset buttons UI
 */
const PresetButtons = ({ count = 4 }) => {
  // Generate preset buttons
  const renderButtons = () => {
    const buttons = [];
    for (let i = 1; i <= count; i++) {
      buttons.push(
        <button key={i} className="stereo-button">{i}</button>
      );
    }
    return buttons;
  };

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      {renderButtons()}
    </div>
  );
};

export default PresetButtons;
