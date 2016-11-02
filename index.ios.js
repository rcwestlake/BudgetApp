'use strict';

import firebase from 'firebase'
import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  View
 } from 'react-native';
import Welcome from './app/components/Welcome.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111'
  },
});

export default class Application extends Component {
  render() {
    return(
        <NavigatorIOS
          style={styles.container}
          initialRoute={{
            component: Welcome,
            title: "Welcome",
          }} />
    );
  }
}

AppRegistry.registerComponent('BudgetApp', () => Application);
