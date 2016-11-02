import React, { Component } from 'react';
import firebase, { reference, signIn } from '../firebase.js';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  NavigatorIOS
} from 'react-native';
import Welcome from './Welcome.js';
import Summary from './Summary';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111'
  },
});

export default class Application extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => this.setState({ user }));
  }


  render() {
    const { user } = this.state;
    return (
      <View style={styles.container}>
        <NavigatorIOS
          initialRoute={{
            component: Welcome,
            title: "Welcome"
          }}
        />
      </View>
    );
  }
}
