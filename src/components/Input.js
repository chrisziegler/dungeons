// pure component
import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ label, type, value, onChange }) => (
  <label>
    {label}
    <input type={type} value={value} onChange={onChange} />
  </label>
);

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'number']),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Input;
