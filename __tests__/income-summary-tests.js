import { ScrollView,
         Text,
         View,
         TextInput,
         TouchableHighlight,
          } from 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import IncomeSummary from '../app/components/summary/IncomeSummary';

describe('IncomeSummary default states', () => {
  beforeEach(() => {
    wrapper = shallow(<IncomeSummary />);
  });
  it('has a default value of null for data', () => {
    expect(wrapper.state().data).to.equal(null);
  });
  it('has a default value of null for user', () => {
    expect(wrapper.state().user).to.equal(null);
  });
  it('has a default value of null for income', () => {
    expect(wrapper.state().income).to.equal(null);
  });
  it('has a default value of null for extraIncome', () => {
    expect(wrapper.state().extraIncome).to.equal(null);
  });
});

describe('IncomeSummary Component', () => {
  beforeEach(() => {
    wrapper = shallow(<IncomeSummary />);
  });

  it('renders correctly', () => {
    expect(wrapper.type()).to.equal(ScrollView);
  });
  it('renders 2 views', () => {
    expect(wrapper.find(View)).to.have.length(2);
  });
  it('renders a Text component', () => {
    expect(wrapper.find(Text)).to.have.length(5);
  });
  it('renders a TextInput component', () => {
    expect(wrapper.find(TextInput)).to.have.length(1);
  })
  it('renders button components', () => {
    expect(wrapper.find(TouchableHighlight)).to.have.length(1);
  });
});
