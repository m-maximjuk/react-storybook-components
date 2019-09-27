import React from 'react';

import Button from '../components/Button/Button';
import Card from '../components/Card/Card';
import CardFooter from '../components/Card/Subcomponents/CardFooter';

export function getCardVariants() {
  return <div>
    <div style={{ display: 'flex' }}>
      <Card
        title="Title"
        style={{ maxWidth: 300, marginRight: 5 }}
      >
        Content
      </Card>
    </div>

    <div style={{ display: 'flex', marginTop: 15  }}>
      <Card
        title="Title only"
        style={{ maxWidth: 300, marginRight: 5 }}
      />

      <Card
        style={{ maxWidth: 300, marginRight: 5 }}
      >
        Content only
      </Card>

      <Card style={{ maxWidth: 300, marginRight: 5 }}>
        <div style={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          Actions

          <Button accent small label="Purchase"/>
        </div>
      </Card>
    </div>
    
    <div style={{ display: 'flex', marginTop: 15 }}>
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
        background="https://fakeimg.pl/640x360/"
        style={{ maxWidth: 300, marginRight: 5 }}
      >
        Card without title
      </Card>
    </div>

    <div style={{ display: 'flex', marginTop: 15 }}>
      <Card
        background="https://fakeimg.pl/640x360/"
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
        background="https://fakeimg.pl/640x360/"
        style={{ maxWidth: 300, marginRight: 5 }}
      >
        React bootstrap replaces the Bootstrap javascript.
      </Card>
    </div>
  </div>
}