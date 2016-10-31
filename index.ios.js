import firebase from 'firebase'
import { usersReference, signIn } from './app/firebase.js'
import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class BudgetApp extends Component {
  constructor(){
    super()
    usersReference.push({
      users: 'test'
    })
    // let reference = new Firebase('https://budgetapp-b7608.firebaseio.com/')
    // reference.set({
    //   users: [],
    //   title: 'Andrew',
    //   budget: 10
    // })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
        Welcome boss man!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

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

AppRegistry.registerComponent('BudgetApp', () => BudgetApp);
