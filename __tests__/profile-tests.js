import { View,
         Text,
         TouchableHighlight,
          } from 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Profile from '../app/components/summary/Profile';


describe('Profile Component', () => {
  beforeEach(() => {
    wrapper = shallow(<Profile />);
  });

  it('renders correctly', () => {
    expect(wrapper.type()).to.equal(View);
  });

  it('renders a Text component', () => {
    expect(wrapper.find(Text)).to.have.lengthOf(5);
  });

  it('renders button components', () => {
    expect(wrapper.find(TouchableHighlight)).to.have.length(1);
  });
});
