import React, { useState } from 'react';
import Spinner from '../Spinner/Spinner';

import './Input.css';

const getClassNames = (props) => {
  const classNames = ['input__field'];
  const { icon, loading, valid, invalid } = props;

  if (icon || loading) classNames.push('input__field--prepend');
  if (valid) classNames.push('input__field--valid');
  if (invalid) classNames.push('input__field--invalid');

  return classNames.join(' ');
}

const Input = props => {
  const {
    type,
    name,
    id,
    value,
    label,
    disabled,
    readonly,
    required,
    onChange,
    caption,
    icon,
    maxLength,
    loading,
  } = props;

  return (
    <div className="form-group">
      <label className="form-group__label">
        {label} {required && <span class="required">*</span>}
      </label>

      <div className="form-group__content">
        <div className="input">
          {
            (icon || loading) &&
            <div className="input__prepend">
              {(icon && !loading) && <i className={`fa ${icon}`}></i>}
              {loading && <Spinner/>}
            </div>
          }

          <div className="input__container">
            <input
              className={getClassNames(props)}
              type={type || 'text'}
              name={name}
              id={id}
              value={value}
              disabled={disabled || loading}
              readonly={readonly}
              required={required}
              maxLength={maxLength}
              onChange={onChange}
            />
            {caption && <span className="input__caption">{caption}</span>}
          </div>
        </div> 
      </div>
    </div>
  );  
}

export default Input;