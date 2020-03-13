import React from 'react';

const Select = ({
  data = [],
  value = '',
  placeholder = '',
  disabled = false,
  onChange = () => {}
}) => {
  const options = data.map(({ value, name }) => {
    return (
      <option key={value} value={value}>
        {name}
      </option>
    );
  });
  return (
    <select
      className='ui fluid dropdown'
      value={value}
      onChange={e => onChange(e.target.value)}
      disabled={disabled}
    >
      {placeholder && (
        <option value='' disabled>
          {placeholder}
        </option>
      )}
      {options}
    </select>
  );
};

export default Select;
