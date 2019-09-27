import React from 'react';

import './Spinner.css';

const Spinner = ({ large }) => {
  const classNames = [
    'spinner', ...(large) ? ['spinner--large']: []
  ];
  
  return (
    <svg className={classNames.join(' ')} viewBox="0 0 50 50">
      <circle className="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
    </svg>
  );
}

export default Spinner;