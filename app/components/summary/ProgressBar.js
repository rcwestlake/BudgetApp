import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
} from 'react-native';
import Svg, {
    Rect,
    Circle,
    Path,
} from 'react-native-svg';

class ProgressBar extends Component {
  render() {
    const { income, recurring, expenses, savings, fundsAvailable } = this.props;
    let base = income;
    return (
      <Svg
        height="100"
        width="100"
      >
        <Rect x="0" y="0" width="50" height="25" fill="black" />
        <Rect x="25" y="15" width="50" height="25" fill="red" />
        <Circle cx="50" cy="50" r="30" fill="yellow" />
        <Circle cx="40" cy="40" r="4" fill="black" />
        <Circle cx="60" cy="40" r="4" fill="black" />
        <Path d="M 40 60 A 10 10 0 0 0 60 60" stroke="black" />
      </Svg>
        );
  }
}

ProgressBar.propTypes = {
  income: PropTypes.number.isRequired,
  recurring: PropTypes.number,
  expenses: PropTypes.number,
  savings: PropTypes.number,
  fundsAvailable: PropTypes.number.isRequired,
};

export default ProgressBar;
