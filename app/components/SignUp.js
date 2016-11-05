import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import firebase, { signIn } from '../firebase.js';
import IncomeSetUp from './SetUp/IncomeSetUp';
import Separator from '../Helpers/Separator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    fontSize: 45,
    marginLeft: 15,
    color: '#00AD7C',
  },
  intro: {
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 25,
    marginRight: 25,
  },
  buttonText: {
    fontSize: 20,
    color: '#ffffff',
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
    backgroundColor: '#19B5CB',
    borderColor: '#19B5CB',
    borderWidth: 0.2,
    borderRadius: 8,
    marginTop: 10,
    marginRight: 30,
    marginLeft: 30,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  input: {
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 10,
    borderColor: '#19B5CB',
    borderRadius: 8,
    height: 50,
    padding: 4,
    marginRight: 15,
    marginLeft: 20,
    marginBottom: 10,
    fontSize: 23,
    color: '#393E46',
  },
});

class SignUp extends Component {
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
        <Text style={styles.title}>
          Great decision.
        </Text>
        <Separator />
        <Text style={styles.intro}>
          We're glad you made it. You are a simple step away from a better financial future,
          and a better way to create a monthly budget.
        </Text>
        <TextInput
          placeholder="Email"
          style={styles.input}
          keyboardType="email-address"
          onChangeText={(email) => this.setState({ email })}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry="true"
          style={styles.input}
          keyboardType="email-address"
          onChangeText={(password) => this.setState({ password })}
        />
        <TouchableHighlight
          style={this.state.email && this.state.password ? styles.button : styles.disabledButton}
          underlayColor="#10DDC2"
          onPress={() => this.handleSignUp(email, password)}
        >
          <Text style={styles.buttonText} > Sign Up </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

SignUp.propTypes = {
  push: PropTypes.string,
  navigator: PropTypes.object,
};

export default SignUp;
