import React from 'react';
import './Button.css';

const getClassNames = props => {
  const {
    small, large, primary, accent
  } = props;

  const classNames = ['btn'];

  if (primary) classNames.push('btn--primary');
  if (accent) classNames.push('btn--accent');
  if (small) classNames.push('btn--small');
  if (large) classNames.push('btn--large');

  return classNames.join(' ');
}

const Button = props => (
  <button
    className={getClassNames(props)}
    disabled={props.disabled}
    onClick={props.onClick}
  >
    {props.label}
  </button>
);

export default Button;