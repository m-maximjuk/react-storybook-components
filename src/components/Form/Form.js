import React, { useState } from 'react';

import './Form.css';

const Form = props => {
  const {
    onSubmit, children
  } = props;

  const submit = (event) => {
    event.preventDefault();
    
    if (onSubmit) {
      onSubmit(event);
    }
  }

  return (
    <form className="form" onSubmit={submit}>
      {children}
    </form>
  );
}

export default Form;