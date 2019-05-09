import React from 'react';
import styles from './Source.scss';

const { source, source_button, selected, source_icon, source_name } = styles;

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
    <li className={source}>
      <button
        className={
          id === currentSource ? `${source_button} ${selected}` : source_button
        }
        onClick={() => setCurrentSource(id)}
      >
        <div style={sidebar_icon} className={source_icon} />
        <span className={source_name}>{name}</span>
      </button>
    </li>
  );
};

export default Source;
