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
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#48BBEC'
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
