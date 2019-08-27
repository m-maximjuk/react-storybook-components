import React from 'react';
import PropTypes from 'prop-types';

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

// Button.propTypes = {
//   label: PropTypes.string.isRequired,
//   onClick: PropTypes.func,
// }

export default Button;