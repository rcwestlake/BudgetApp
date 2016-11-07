import { View, NavigatorIOS } from 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Application from '../app/components/Application';


describe('Application Component', () => {
  beforeEach(() => {
    wrapper = shallow(<Application />);
  });
  it('renders correctly', () => {
    expect(wrapper.type()).to.equal(View);
  });
  it('renders a NavigatorIOS component', () => {
    expect(wrapper.find(NavigatorIOS)).to.have.length(1);
  });

  describe('user state', () => {
    beforeEach(() => {
      wrapper = shallow(<Application />);
    });
    it('should set user state to null by default', () => {
      expect(wrapper.state().user).to.equal(null);
    });
  });
});
