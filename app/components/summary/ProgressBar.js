import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
} from 'react-native';

const Bar = require('react-native-progress-bar');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

class ProgressBar extends Component {
  render() {
    return (
      <Bar
        fillStyle={{}}
        backgroundStyle={{backgroundColor: '#cccccc', borderRadius: 2}}
        style={{marginTop: 10, width: 300}}
        progress={this.state.progress}
      />
    )
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
