import React, { useState } from 'react';
import Form from '../components/Form/Form';

import Button from '../components/Button/Button';
import Input from '../components/Input/Input';

const UseState = ({ render, initialValue }) => {
  const [ variable, setVariable ] = useState(initialValue)
  return render(variable, setVariable)
}

const initialState = { username: '', password: '' };

export function getFormVariants() {
  return <div style={{ maxWidth: 350 }}>
    <UseState
      initialValue={initialState}
      render={(value, setValue) => {
        return <div>
          <Form onSubmit={() => alert(JSON.stringify(value))}>
            <Input
              label="Username"
              icon="fa-user"
              value={value.username}
              onChange={({ target }) => setValue(state => ({
                ...state,
                username: target.value,
              }))}
            />

            <Input
              label="Password"
              type="password"
              icon="fa-lock"
              style={{ marginTop: 15 }}
              value={value.password}
              onChange={({ target }) => setValue(state => ({
                ...state,
                password: target.value,
              }))}
            />

            <div style={{ display: 'flex', marginTop: 15 }}>
              <Button
                type="submit"
                primary
                label="Login"
              />

              <Button
                label="Reset"
                type="reset"
                style={{ marginLeft: 4 }}
                onClick={() => setValue(initialState)}
              />
            </div>
          </Form>
        </div>
      }}
    />
  </div>
}
