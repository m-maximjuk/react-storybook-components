import React from 'react';
import Spinner from '../components/Spinner/Spinner';

export function getSpinnerVariants() {
  return <div>
    <Spinner large/> &nbsp;
    <Spinner/>
  </div>
}
