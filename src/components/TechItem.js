import React from 'react';
import PropTypes from 'prop-types';

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

TechItem.defaultProps = {
  tech: 'Hidden',
};

TechItem.PropTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
};

export default TechItem;
