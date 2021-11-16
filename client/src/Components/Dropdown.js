import React from 'react';

const Dropdown = props => {
  return (
    <div>
      <label>{props.label}</label>
      <select value={props.selectedValue}>
        <option key={0}>Select...</option>
        {props.options.map((item, idx) => (
          <option key={idx + 1} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
