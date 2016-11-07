import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Application from '../index.ios.js';
import { expect } from 'chai';

it.skip('renders correctly', () => {
  const tree = renderer.create(
    <Application />
    );
});

describe('Addition', () => {
  it('knows that 2 and 2 make 4', () => {
    expect(2 + 2).to.equal(4);
  });
});
