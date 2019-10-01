import React from 'react';

import './Button.css';
import Spinner from '../Spinner/Spinner';

const getClassNames = props => {
  const {
    small, large, primary, accent, block,
  } = props;

  const classNames = ['btn'];

  if (primary) classNames.push('btn--primary');
  if (accent) classNames.push('btn--accent');
  if (small) classNames.push('btn--small');
  if (large) classNames.push('btn--large');
  if (block) classNames.push('btn--block');

  return classNames.join(' ');
}

const Button = props => (
  <button
    className={getClassNames(props)}
    type={props.type}
    disabled={props.disabled}
    onClick={props.onClick}
    style={props.style}
  >
    {props.loading && <Spinner/>}
    {props.label}
  </button>
);

export default Button;