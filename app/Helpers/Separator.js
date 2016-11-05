import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: '#e4e4e4',
    marginLeft: 15,
    marginRight: 15,
  },
});

export default class Separator extends Component {
  render() {
    return (
      <View style={styles.separator} />
    );
  }
}
