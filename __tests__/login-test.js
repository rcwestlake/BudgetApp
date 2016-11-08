import { View,
         Text,
         TextInput,
         TouchableHighlight } from 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import LogIn from '../app/components/LogIn';


describe('LogIn Component', () => {
  beforeEach(() => {
    wrapper = shallow(<LogIn />);
  });

  it('renders correctly', () => {
    expect(wrapper.type()).to.equal(View);
  });

  it('renders a Text component', () => {
    expect(wrapper.find(Text)).to.have.lengthOf(3);
  });

  it('renders a TextInput for an email and password', () => {
    expect(wrapper.find(TextInput).to.have.lengthOf(2));

  it('renders a button', () => {
    expect(wrapper.find(TouchableHighlight).to.have.lengthOf(1));
  });
  });

  describe('LogIn States', () => {
    beforeEach(() => {
      wrapper = shallow(<LogIn />);
    });
    it('should set user to null by default', () => {
      expect(wrapper.state().user).to.equal(null);
    });
    it('should set email to null by default', () => {
      expect(wrapper.state().email).to.equal(null);
    });
    it('should set password to null by default', () => {
      expect(wrapper.state().password).to.equal(null);
    });


  })
});
