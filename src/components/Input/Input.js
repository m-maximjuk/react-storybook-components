import React, { useState } from 'react';
import Spinner from '../Spinner/Spinner';
import InputMask from "react-input-mask";

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
    style,
    type,
    name,
    id,
    value,
    label,
    mask,
    disabled,
    readonly,
    required,
    onChange,
    caption,
    icon,
    maxLength,
    loading,
    beforeMaskedStateChange,
  } = props;

  return (
    <div className="form-group" style={style}>
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
            <InputMask
              className={getClassNames(props)}
              type={type || 'text'}
              name={name}
              id={id}
              value={value}
              mask={mask}
              disabled={disabled || loading}
              readonly={readonly}
              required={required}
              maxLength={maxLength}
              onChange={onChange}
              beforeMaskedStateChange={beforeMaskedStateChange}
            />
            {caption && <span className="input__caption">{caption}</span>}
          </div>
        </div> 
      </div>
    </div>
  );  
}

export default Input;