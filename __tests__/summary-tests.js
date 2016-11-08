import { View,
         Text,
         ScrollView,
         Image,
         TouchableHighlight,
          } from 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import { expect, assert } from 'chai';
import Summary from '../app/components/summary/Summary';


describe('Summary Component', () => {
  beforeEach(() => {
    wrapper = shallow(<Summary />);
  });

  it('renders within a ScrollView', () => {
    expect(wrapper.type()).to.equal(ScrollView);
  });

  it('renders Text components', () => {
    expect(wrapper.find(Text)).to.have.lengthOf(9);
  });

  it.skip('renders buttons', () => {
    expect(wrapper.find(TouchableHighlight)).to.have.length(1);
  });
});

  describe('Summary States', () => {
    beforeEach(() => {
      wrapper = shallow(<Summary />);
    });
    it('should set fundsAvailable to null by default', () => {
      expect(wrapper.state().fundsAvailable).to.equal(null);
    });
    it('should set data to an empty string by default', () => {
      expect(wrapper.state().data).to.equal('');
    });
  });
