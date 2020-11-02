import React from 'react';
import PropTypes from 'prop-types';

const DropdownField = ({
  id, label, options, handleChange,
}) => {
  const optionTags = options.map((option) => (
    // eslint-disable-next-line react/no-array-index-key
    <option value={option.id} key={option.id}>{option.name}</option>
  ));

  return (
    <div className="control-container">
      <label htmlFor={id}>
        {`${label}:`}
        <select name={id} id={id} className="control" onChange={handleChange}>
          {optionTags}
        </select>
      </label>
    </div>
  );
};

DropdownField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default DropdownField;
