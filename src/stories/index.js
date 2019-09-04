import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../components/Button/Button';
import Spinner from '../components/Spinner/Spinner';

import Card from '../components/Card/Card';
import CardFooter from '../components/Card/Subcomponents/CardFooter';

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

      <br/>

      <div style={{width: 300}}>
        <Button label="Block" primary block/> &nbsp;
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

storiesOf('Card', module)
  .add('Variants', () => (
    <div>
      <div style={{ display: 'flex' }}>
        <Card
          icon="coffee"
          title="Card with icon"
          style={{ maxWidth: 300, marginRight: 5 }}
        />
        
        <Card
          background="https://fakeimg.pl/640x360/"
          title="Card with background"
          style={{ maxWidth: 300, marginRight: 5 }}
        />

        <Card
          style={{ maxWidth: 300, marginRight: 5 }}
        >
          Card without title
        </Card>
      </div>

      <div style={{ display: 'flex', marginTop: 15 }}>
        <Card
          title="Card with actions footer"
          footer={
            <CardFooter>
              <Button primary block label="Visit website"/>
            </CardFooter>
          }
          style={{ maxWidth: 300, marginRight: 5 }}
        >
          React bootstrap replaces the Bootstrap javascript.
          Each component has been built from scratch as a true React component,
          without unneeded dependencies like jQuery.
        </Card>

        <Card
          background="https://fakeimg.pl/640x360/"
          title="Card with text footer"
          footer={
            <CardFooter>Source: Facebook</CardFooter>
          }
          style={{ maxWidth: 300, marginRight: 5 }}
        >
          React bootstrap replaces the Bootstrap javascript.
          Each component has been built from scratch as a true React component,
          without unneeded dependencies like jQuery.
        </Card>
      </div>

      <div style={{ display: 'flex', alignItems: 'flex-start', marginTop: 15 }}>
        <Card
          interactive
          title="Interactive card"
          style={{ maxWidth: 300, marginRight: 5 }}
        >
          React bootstrap replaces the Bootstrap javascript.
        </Card>
      </div>
    </div>
  ));
  