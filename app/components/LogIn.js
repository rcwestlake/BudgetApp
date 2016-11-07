import React, { Component, PropTypes } from 'react';
import {
  Text,
  TextInput,
  TouchableHighlight,
  View,
  StyleSheet,
} from 'react-native';
import firebase, { signIn } from '../firebase';
import Separator from '../helpers/Separator';
import Summary from './summary/Summary';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    fontSize: 45,
    marginLeft: 15,
    color: '#9CB65E',
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
    backgroundColor: '#B2C777',
    borderColor: '#B2C777',
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

class LogIn extends Component {
  constructor() {
    super();

    this.state = {
      user: null,
      email: null,
      password: null,
    };
  }

  handleSignUp(email, password) {
    signIn(email, password).then(() => {
      firebase.auth().onAuthStateChanged(user => this.setState({ user }, () => {
        this.props.navigator.push({
          title: 'Summary',
          component: Summary,
          passProps: { user },
        });
      }));
    });
  }

  render() {
    const { email, password } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Welcome back.
        </Text>
        <Separator />
        <Text style={styles.intro}>
          We've missed you. Log in to add or edit any expenses
          and see your funds available.
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
          underlayColor="#9CB65E"
          onPress={() => this.handleSignUp(email, password)}
        >
          <Text style={styles.buttonText} > Sign Up </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

LogIn.propTypes = {
  navigator: PropTypes.object.isRequired,
  push: PropTypes.object,
};

export default LogIn;
