import React, { useState } from 'react';

const Input = props => {
  const {
    type, name, label, disabled, readonly, required, binding,
  } = props;

  const [value, setValue] = useState(binding || '');

  return (
    <div className="form-group">
      <label className="form-group__label">
        {label} {required && <span class="required">*</span>}
      </label>

      <div className="form-group__content">
        <input
          type={type || 'text'}
          disabled={disabled}
          readonly={readonly}
          required={required}
          value={value}
          onChange={({ target }) => setValue(target.value)}
        /> 
      </div>
    </div>
  );  
}

export default Input;