import React from 'react';
import { create } from 'react-test-renderer';
import Button from '../components/Button/Button';

describe('Button component', () => {
  test('Matches the provided label', () => {
    const component = create(<Button label="Checkout"/>);
    const instance = component.root;

    const button = instance.findByType('button');

    expect(button.props.children.indexOf('Checkout')).not.toBe(-1);
  });

  // test('Returns undefined if no label is provided', () => {
  //   const component = create(<Button/>);
  //   const instance = component.root;

  //   const button = instance.findByType('button');

  //   expect(button.props.children).toBeUndefined();
  // });

  test('Includes btn--primary class if the "primary" property is provided', () => {
    const component = create(<Button primary/>);
    const instance = component.root;

    const button = instance.findByType('button');

    expect(button.props.className.includes('btn--primary')).toBe(true);
  });

  test('Includes btn--accent class if the "accent" property is provided', () => {
    const component = create(<Button accent/>);
    const instance = component.root;

    const button = instance.findByType('button');

    expect(button.props.className.includes('btn--accent')).toBe(true);
  });

  test('Includes btn--small class if the "small" property is provided', () => {
    const component = create(<Button small/>);
    const instance = component.root;

    const button = instance.findByType('button');

    expect(button.props.className.includes('btn--small')).toBe(true);
  });

  test('Includes btn--large class if the "large" property is provided', () => {
    const component = create(<Button large/>);
    const instance = component.root;

    const button = instance.findByType('button');

    expect(button.props.className.includes('btn--large')).toBe(true);
  });

  test('Includes disabled attribute if the "disabled" property is provided', () => {
    const component = create(<Button disabled/>);
    const instance = component.root;

    const button = instance.findByType('button');

    expect(button.props.disabled).toBeTruthy();
  });

  /* TODO: Figure out how to do this properly */
  test('Displays a spinner component if the "loading" property is provided', () => {
    const component = create(<Button loading/>);
    const instance = component.root;

    const button = instance.findByType('button');

    expect(button.props.children[0]).toBeInstanceOf(Object);
  });

  /* TODO: Test
    - Required props
    - onClick
  */
});