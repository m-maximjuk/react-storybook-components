import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../components/Button/Button';

storiesOf('Button', module)
  .add('Variants', () => (
    <div>
      <div>
        <Button label="Primary" primary/> &nbsp;
        <Button label="Accent" accent/> &nbsp;
        <Button label="Default"/>
      </div>

      <br/>

      <div>
        <Button label="Primary" primary disabled/> &nbsp;
        <Button label="Accent" accent disabled/> &nbsp;
        <Button label="Default" disabled/>
      </div>
    </div>
  ))
  .add('Sizes', () => (
    <div>
      <div>
        <Button label="Small" primary small/> &nbsp;
        <Button label="Default" primary/> &nbsp;
        <Button label="Large" primary large/>
      </div>

      <br/>
      
      <div>
        <Button label="Small" accent small/> &nbsp;
        <Button label="Default" accent/> &nbsp;
        <Button label="Large" accent large/>
      </div>

      <br/>
      
      <div>
        <Button label="Small" small/> &nbsp;
        <Button label="Default"/> &nbsp;
        <Button label="Large" large/>
      </div>
    </div>
  ));
  