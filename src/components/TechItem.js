import React from 'react';

const TechItem = ({ tech, onRemove }) => {
  return (
    <li>
      {tech + '   '}
      <button onClick={onRemove} type="button">
        Remove
      </button>
    </li>
  );
};

export default TechItem;
