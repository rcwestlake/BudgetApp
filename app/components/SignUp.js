import React, { Component } from 'react';
import firebase, { reference, signIn } from '../firebase.js'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
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
  searchInput: {
     height: 50,
     padding: 4,
     marginRight: 5,
     fontSize: 23,
     borderWidth: 1,
     borderColor: 'white',
     borderRadius: 8,
     color: 'white'
 },
})

export default class SignUp extends Component {
  constructor(){
    super()
    this.state = {
      email: null,
      password: null,
      isLoading: false
    }
  }

  login(email, password) {
     firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
    console.log(email, password);
  }

  render() {
    const { email, password } = this.state
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Email"
          style={styles.searchInput}
          keyboardType="email-address"
          onChangeText={(email) => this.setState({ email })}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry='true'
          style={styles.searchInput}
          keyboardType="email-address"
          onChangeText={(password) => this.setState({ password })}
        />
        <TouchableHighlight
          style={styles.button}
          underlayColor='black'
          onPress={() => this.login(email, password) }
        >
          <Text style={styles.buttonText} >Sign Up with Google</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
