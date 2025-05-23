import React from 'react';

/**
 * ControlKnob Component
 * Renders a control knob with a label, styled to look like the 
 * physical knobs on an old car stereo.
 * 
 * @param {Object} props Component props
 * @param {string} props.label Label to display under the knob
 * @returns {React.ReactElement} The control knob UI
 */
const ControlKnob = ({ label }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className="stereo-knob">
        <div className="knob-marker"></div>
      </div>
      <div style={{ fontSize: '10px', marginTop: '5px' }}>{label}</div>
    </div>
  );
};

export default ControlKnob;
