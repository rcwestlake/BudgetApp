import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import styles from '../styles.js';

export default class Welcome extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
        The app logo
        </Text>
        <Text style={styles.tagline}>The monthly budget you’ll use and like</Text>
        <Text style={styles.quote}>
          The Best Way to teach your kids about taxes is by eating 30% of their ice cream
          - Bill Murray
        </Text>
        <Text style={styles.privacy}>Privacy: [company name] is serious about your privacy. Log in is handled through Google Auth.</Text>
        <View style={styles.buttonContainer}>
          <TouchableHighlight style={styles.homeButton} underlayColor='white'>
            <Text>Log in</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.homeButton} underlayColor='white'>
            <Text>Sign up</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
