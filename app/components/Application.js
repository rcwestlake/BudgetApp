import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  NavigatorIOS,
} from 'react-native';
import firebase from '../firebase.js';
import Welcome from './Welcome.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  },
});

export default class Application extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => this.setState({ user }));
  }


  render() {
    return (
      <View style={styles.container}>
        <NavigatorIOS
          initialRoute={{
            component: Welcome,
            title: 'Welcome',
          }}
        />
      </View>
    );
  }
}
