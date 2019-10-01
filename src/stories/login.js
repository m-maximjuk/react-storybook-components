import React from 'react';
import Login from '../components/Login/Login';

const backgroundImage = 'https://images.unsplash.com/photo-1448697138198-9aa6d0d84bf4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80';

export function getLoginVariants() {
  return <div>
    <Login backgroundImage={backgroundImage}/>
  </div>
}
