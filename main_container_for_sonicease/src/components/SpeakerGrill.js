import React from 'react';

/**
 * SpeakerGrill Component
 * Renders a speaker grill with the specified number of holes,
 * styled to look like the speaker grill on an old car stereo.
 * 
 * @param {Object} props Component props
 * @param {number} props.holeCount Number of holes in the grill
 * @returns {React.ReactElement} The speaker grill UI
 */
const SpeakerGrill = ({ holeCount = 48 }) => {
  // Generate speaker grill holes
  const renderGrillHoles = () => {
    const holes = [];
    for (let i = 0; i < holeCount; i++) {
      holes.push(<div key={i} className="grill-hole"></div>);
    }
    return holes;
  };

  return (
    <div className="speaker-grill">
      {renderGrillHoles()}
    </div>
  );
};

export default SpeakerGrill;
