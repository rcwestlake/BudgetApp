import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  ProgressViewIOS,
  View,
  Text,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
  progressView: {
    marginTop: 50,
  },
  text: {
    fontSize: 12,
    marginTop: 10,
    textAlign: 'center',
  },
});

class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0,
    };
  }

  getProgress() {
    const { income, fundsAvailable } = this.props;
    const diff = income - fundsAvailable;
    const progress = diff / income;
    return progress % 1;
  }

  render() {
    return (
      <View style={styles.container}>
        <ProgressViewIOS
          style={styles.progressView}
          progressTintColor="#FA7F7F"
          progress={this.getProgress()}
        />
        <Text style={styles.text}>Budget vs. Spent</Text>
      </View>
    );
  }
}

Chart.propTypes = {
  income: PropTypes.number,
  fundsAvailable: PropTypes.number,
};


export default Chart;
