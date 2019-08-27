import React from 'react';
import { create } from 'react-test-renderer';
import Spinner from '../components/Spinner/Spinner';

describe('Spinner component', () => {
  test('It renders', () => {
    const component = create(<Spinner/>);
    const instance = component.root;

    const spinner = instance.findByType('svg');

    expect(spinner).toBeDefined();
  });

  test('Includes spinner--large class if the "large" property is provided', () => {
    const component = create(<Spinner large/>);
    const instance = component.root;

    const spinner = instance.findByType('svg');

    expect(spinner.props.className.includes('spinner--large')).toBe(true);
  });
});