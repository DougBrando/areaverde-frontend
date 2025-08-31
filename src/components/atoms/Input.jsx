import React from 'react';

function Input({ type, value, onChange, placeholder, required = false, step = 'any' }) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      step={step}
    />
  );
}

export default Input;