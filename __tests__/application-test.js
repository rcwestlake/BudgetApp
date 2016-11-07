import ReactNative, { View } from 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { expect } from 'chai';
import Application from '../app/components/Application';

it('renders correctly', () => {
  const tree = renderer.create(
    <Application />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
