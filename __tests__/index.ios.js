import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { expect } from 'chai';
import Application from '../index.ios.js';
// Note: test renderer must be required after react-native.

describe('Application', function () {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Application />
    );
    expect(tree).toMatchSnapshot();
  });
});
