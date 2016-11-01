import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default class LogIn extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> testing login comp </Text>
      </View>
    )
  }
}
