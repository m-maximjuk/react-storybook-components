import React, { useState } from 'react';
import Input from '../components/Input/Input';

const UseState = ({ render, initialValue }) => {
  const [ variable, setVariable ] = useState(initialValue)
  return render(variable, setVariable)
}

export function getInputVariants() {
  return <div>
    <div style={{ maxWidth: 350 }}>
      <UseState
        initialValue="Default input"
        render={(value, setValue) => {
          return <div>
            <Input
              label="Default"
              value={value}
              onChange={({ target }) => setValue(target.value)}
            />
          </div>
        }}
      />
    </div>

    <div style={{ marginTop: 15, maxWidth: 350 }}>
      <UseState
        initialValue=""
        render={(value, setValue) => {
          return <div>
            <Input
              label="Required"
              value={value}
              onChange={({ target }) => setValue(target.value)}
              required
            />
          </div>
        }}
      />
    </div>

    <div style={{ marginTop: 15, maxWidth: 350 }}>
      <UseState
        initialValue=""
        render={(value, setValue) => {
          return <div>
            <Input
              label="With caption"
              value={value}
              caption="Caption content"
              onChange={({ target }) => setValue(target.value)}
            />
          </div>
        }}
      />
    </div>

    <div style={{ marginTop: 15, maxWidth: 350 }}>
      <UseState
        initialValue=""
        render={(value, setValue) => {
          return <div>
            <Input
              label="With icon"
              value={value}
              icon="fa-envelope"
              onChange={({ target }) => setValue(target.value)}
            />
          </div>
        }}
      />
    </div>

    <div style={{ marginTop: 15, maxWidth: 350 }}>
      <UseState
        initialValue="00000000"
        render={(value, setValue) => {
          return <div>
            <Input
              label="Mask"
              value={value}
              mask="99/99/9999"
              onChange={({ target }) => setValue(target.value)}
            />
          </div>
        }}
      />
    </div>

    <div style={{ marginTop: 15, maxWidth: 350 }}>
      <UseState
        initialValue="Loading"
        render={(value, setValue) => {
          return <div>
            <Input
              label="Loading"
              value={value}
              loading
              onChange={({ target }) => setValue(target.value)}
            />
          </div>
        }}
      />
    </div>

    <div style={{ marginTop: 15, maxWidth: 350 }}>
      <UseState
        initialValue="Disabled"
        render={(value, setValue) => {
          return <div>
            <Input
              label="Disabled"
              value={value}
              disabled
              onChange={({ target }) => setValue(target.value)}
            />
          </div>
        }}
      />
    </div>
  </div>
}
