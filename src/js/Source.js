import React from 'react';

const Source = ({
  name,
  icon,
  description,
  id,
  currentSource,
  setCurrentSource,
}) => {
  const sidebar_icon = {
    backgroundImage: `url("${icon}")`,
    backgroundSize: '100%',
    height: 36,
    width: 36,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no repeat',
    borderRadius: 6,
  };
  return (
    <li className="source">
      <button
        className={`source_button ${id === currentSource ? 'selected' : ''}`}
        onClick={() => setCurrentSource(id)}
      >
        <div style={sidebar_icon} className="source_icon" />
        <span className="source_name">{name}</span>
      </button>
    </li>
  );
};

export default Source;
