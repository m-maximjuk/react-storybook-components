import React from 'react';
import Alert from '../components/Alert/Alert';

export function getAlertVariants() {
  return <div>
    <div style={{ width: 450 }}>
      <Alert
        title="Default"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      />
    </div>

    <div style={{ marginTop: 15, width: 450 }}>
      <Alert
        loading
        title="Loading"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      />
    </div>

    <div style={{ marginTop: 15, width: 450 }}>
      <Alert
        type="success"
        title="Success"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      />
    </div>

    <div style={{ marginTop: 15, width: 450 }}>
      <Alert
        type="warning"
        title="Warning"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      />
    </div>

    <div style={{ marginTop: 15, width: 450 }}>
      <Alert
        type="info"
        title="Info!"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      />
    </div>

    <div style={{ marginTop: 15, width: 450 }}>
      <Alert
        type="error"
        title="Error!"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      />
    </div>
  </div>
}
