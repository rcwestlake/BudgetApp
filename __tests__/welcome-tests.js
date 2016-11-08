import { View,
         Text,
         ScrollView,
         Image,
          } from 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import { expect, assert } from 'chai';
import Welcome from '../app/components/Welcome';


describe('Welcome Component', () => {
  beforeEach(() => {
    wrapper = shallow(<Welcome />);
  });

  it('renders correctly', () => {
    expect(wrapper.type()).to.equal(View);
  });

  it('renders a Text component', () => {
    expect(wrapper.find(Text)).to.have.lengthOf(3);
  });

  it('renders an Image component', () => {
    expect(wrapper.find(Image)).to.have.length(1);

  it('renders with ScrollView', () => {
    expect(wrapper.find(ScrollView).to.have.length(1));
  });
  });

  describe('Welcome States', () => {
    beforeEach(() => {
      wrapper = shallow(<Welcome />);
    });
    it('should set user to null by default', () => {
      expect(wrapper.state().user).to.equal(null);
    });
  });
});
