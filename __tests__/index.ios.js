import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Application from '../index.ios.js';
import { expect } from 'chai';

it('renders correctly', () => {
    beforeEach(() => {
      wrapper = shallow(<Application />);
    });

    it('should render within a view', () => {
      expect(wrapper.type()).to.equal(View);
    });
});
