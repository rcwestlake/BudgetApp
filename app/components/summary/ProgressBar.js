'use strict';
import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  ProgressViewIOS,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: -20,
    backgroundColor: 'transparent',
  },
  progressView: {
    marginTop: 20,
  },
});

class Chart extends Component {
  constructor() {
    super();

    this.state = {
      progress: 0,
    };
  }

  getProgress(offset) {
    let progress = this.state.progress + offset;
    return Math.sin(progress % Math.PI) % 1;
  }

  render() {
    return (
      <View style={styles.container}>
        <ProgressViewIOS style={styles.progressView} progressTintColor="orange" progress={this.getProgress(0.6)} />
      </View>
    );
  }
}

Chart.propTypes = {
  income: PropTypes.number.isRequired,
  fundsAvailable: PropTypes.number.isRequired,
};


export default Chart;

// import Svg, {
//     Rect,
//     Circle,
//     Path,
// } from 'react-native-svg';
//
// class ProgressBar extends Component {
//   render() {
//     const { income, recurring, expenses, savings, fundsAvailable } = this.props;
//     let base = income;
//     return (
//       <Svg
//         height="100"
//         width="100"
//       >
//         <Rect x="0" y="0" width={100 / 10} height="25" fill="black" />
//         <Rect x="25" y="0" width="50" height="25" fill="red" />
//         <Rect x="50" y="0" width="900" height="25" fill="purple" />
//       </Svg>
//         );
//   }
// }
//
// ProgressBar.propTypes = {
//   income: PropTypes.number.isRequired,
//   recurring: PropTypes.number,
//   expenses: PropTypes.number,
//   savings: PropTypes.number,
//   fundsAvailable: PropTypes.number.isRequired,
// };
