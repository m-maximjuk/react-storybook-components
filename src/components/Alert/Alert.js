import React from 'react';
import './Alert.css';

const getConfigObj = type => {
  const types = {
    default: {
      classNames: 'alert--default',
    },
    success: {
      classNames: 'alert--success',
      icon: 'fa-check-circle'
    },
    info: {
      classNames: 'alert--info',
      icon: 'fa-info-circle'
    },
    warning: {
      classNames: 'alert--warning',
      icon: 'fa-exclamation-circle'
    },
    error: {
      classNames: 'alert--error',
      icon: 'fa-times-circle'
    },
  }

  return types[type] || types.default;
}

const Alert = props => {
  const { type, title, content, children } = props;
  const { classNames, icon } = getConfigObj(type);

  return (
    <div className={`alert ${classNames}`}>
      {icon && <i className={`fa ${icon} alert__icon`}></i>}

      <div className="alert__content">
        {title && <h3 className="alert__title">{title}</h3>}
        
        {content || children}
      </div>
    </div>
  );
}

export default Alert;