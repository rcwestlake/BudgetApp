import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
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

export default class SignUp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> testing signup comp</Text>
      </View>
    )
  }
}
