import React from 'react';
import { create } from 'react-test-renderer';
import Button from '../components/Button/Button';

describe('Button component', () => {
  test('Matches the provided label', () => {
    const component = create(<Button label="Checkout"/>);
    const instance = component.root;

    const button = instance.findByType('button');

    expect(button.props.children).toBe('Checkout');
  });

  test('Throws an error if no label is provided', () => {
    const component = create(<Button/>);
    const instance = component.root;

    const button = instance.findByType('button');

    expect(button.props.children).toBeUndefined();
  });
});