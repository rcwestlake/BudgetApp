import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#48BBEC',
  },
  text: {
    fontSize: 18,
    color: '#111',
    textAlign: 'center',
  },
});

export default class Summary extends Component {
  render() {
    console.log(this.props.user);
    return (
      <View style={styles.container}>
        <Text> the summary page</Text>
      </View>
    );
  }
}

Summary.propTypes = {
  user: PropTypes.string,
};
