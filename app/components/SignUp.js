import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import firebase, { signIn } from '../firebase.js';
import IncomeSetUp from './IncomeSetUp';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#48BBEC',
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center',
  },
  disabledButton: {
    height: 0,
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
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
    justifyContent: 'center',
  },
  searchInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white',
  },
});

export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      email: null,
      password: null,
      isLoading: false,
    };
  }

  handleSignUp(email, password) {
    signIn(email, password);
    firebase.auth().onAuthStateChanged(user => this.setState({ user }, () => {
      this.props.navigator.push({
        title: 'Income',
        component: IncomeSetUp,
        passProps: { user },
      });
    }));
  }

  render() {
    const { email, password } = this.state;
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
          style={this.state.email && this.state.password ? styles.button : styles.disabledButton}
          underlayColor='black'
          onPress={() => this.handleSignUp(email, password)}
        >
          <Text style={styles.buttonText} > Sign Up </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

SignUp.propTypes = {
  navigator: PropTypes.string,
  push: PropTypes.string,
};
