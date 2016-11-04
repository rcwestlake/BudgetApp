import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import LogIn from './LogIn.js';
import SignUp from './SignUp.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  main: {
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  title: {
    marginBottom: 10,
    fontSize: 25,
    textAlign: 'center',
    color: '#000',
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
    color: '#ffffff',
    alignSelf: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
  },
  button: {
    height: 75,
    flexDirection: 'row',
    backgroundColor: '#00AD7C',
    borderRightWidth: 1,
    borderColor: '#ffffff',
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
    width: 190,
  },
});

export default class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  goToLogIn() {
    this.props.navigator.push({
      title: 'Log In',
      component: LogIn,
    });
  }

  goToSignUp() {
    this.props.navigator.push({
      title: 'Sign Up',
      component: SignUp,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.main}>
            <Text style={styles.title}> The app logo </Text>
            <Text style={styles.tagline}>The monthly budget you’ll use and like</Text>
            <Text style={styles.quote}>
            The Best Way to teach your kids about taxes is by eating 30% of their ice cream
            - Bill Murray
            </Text>
          </View>
        </ScrollView>
        <View style={styles.buttonContainer}>
          <TouchableHighlight
            style={styles.button}
            underlayColor="#52D681"
            onPress={() => this.goToLogIn()}
          >
            <Text style={styles.buttonText}>Log in</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            underlayColor="#52D681"
            onPress={() => this.goToSignUp()}
          >
            <Text style={styles.buttonText}>Sign up</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

Welcome.propTypes = {
  push: PropTypes.string,
  navigator: PropTypes.object,
};
