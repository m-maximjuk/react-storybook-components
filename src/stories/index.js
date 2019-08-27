import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../components/Button/Button';
import Spinner from '../components/Spinner/Spinner';

storiesOf('Button', module)
  .add('Variants', () => (
    <div>
      <div style={{display: 'flex'}}>
        <Button label="Primary" primary/> &nbsp;
        <Button label="Accent" accent/> &nbsp;
        <Button label="Default"/>
      </div>

      <br/>

      <div style={{display: 'flex'}}>
        <Button label="Disabled" primary disabled/> &nbsp;
        <Button label="Disabled" accent disabled/> &nbsp;
        <Button label="Disabled" disabled/>
      </div>

      <br/>

      <div style={{display: 'flex'}}>
        <Button label="Loading" primary disabled loading={true}/> &nbsp;
        <Button label="Loading" accent disabled loading={true}/> &nbsp;
        <Button label="Loading" disabled loading={true}/>
      </div>
    </div>
  ))
  .add('Sizes', () => (
    <div>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <Button label="Small" primary small/> &nbsp;
        <Button label="Default" primary/> &nbsp;
        <Button label="Large" primary large/>
      </div>

      <br/>
      
      <div style={{display: 'flex', alignItems: 'center'}}>
        <Button label="Small" accent small/> &nbsp;
        <Button label="Default" accent/> &nbsp;
        <Button label="Large" accent large/>
      </div>

      <br/>
      
      <div style={{display: 'flex', alignItems: 'center'}}>
        <Button label="Small" small/> &nbsp;
        <Button label="Default"/> &nbsp;
        <Button label="Large" large/>
      </div>
    </div>
  ));

  storiesOf('Spinner', module)
  .add('Sizes', () => (
    <div>
      <Spinner large/> &nbsp;
      <Spinner/>
    </div>
  ));
  