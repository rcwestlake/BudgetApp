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
  },
  title: {
    marginBottom: 10,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
  },
  tagline: {
    fontSize: 12,
    marginBottom: 40,
    textAlign: 'center',
  },
  quote: {
    fontSize: 15,
    marginBottom: 50,
    textAlign: 'center',
  },
  privacy: {
    fontSize: 10,
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
});

export default class Welcome extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> The app logo </Text>
        <Text style={styles.tagline}>The monthly budget you’ll use and like</Text>
        <Text style={styles.quote}>
          The Best Way to teach your kids about taxes is by eating 30% of their ice cream
          - Bill Murray
        </Text>
        <Text style={styles.privacy}>Privacy: [company name] is serious about your privacy. Log in is handled through Google Auth.</Text>
        <TouchableHighlight style={styles.button} underlayColor='black'>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} underlayColor='black'>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
