import { View,
         Text,
         TextInput,
         TouchableHighlight } from 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import { expect, assert } from 'chai';
import SignUp from '../app/components/SignUp';

describe('Signup constructor', () => {
  beforeEach(() => {
    wrapper = shallow(<SignUp />);
  });

  it('is an object', () => {
    assert.isObject(wrapper.state(), 'signUp state is an object');
  });

  it('sets user to null by default', () => {
    assert.equal(wrapper.state().user, null);
  });

  it('sets email to null by default', () => {
    assert.equal(wrapper.state().email, null);
  });

  it('sets password to null by default', () => {
    assert.equal(wrapper.state().password, null);
  });

  it('sets the loading state to false by default', () => {
    assert.equal(wrapper.state().isLoading, false);
  });
});

describe('Signup render', () => {
  beforeEach(() => {
    wrapper = shallow(<SignUp />);
  });

  it('should render within a view', () => {
    expect(wrapper.type()).to.equal(View);
  });

  it.skip('should render 3 text components', () => {
    expect(wrapper.find(Text).to.have.length(3));
  });

  it.skip('should render 2 TextInput components', () => {
    expect(wrapper.find(TextInput).length.to.be(2));
  });

});
