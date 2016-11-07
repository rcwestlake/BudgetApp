import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView,
  Image,
} from 'react-native';
import LogIn from './LogIn';
import SignUp from './SignUp';
import randomQuote from './Quotes';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  main: {
    flexDirection: 'column',
    alignSelf: 'center',
    justifyContent: 'center',
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
    fontSize: 20,
    marginBottom: 50,
    textAlign: 'center',
    marginTop: 20,
    padding: 5,
    color: '#6A8035',
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
  },
  resizeMode: {
    width: 275,
    height: 275,
    alignSelf: 'center',
  },
  button: {
    height: 75,
    flexDirection: 'row',
    backgroundColor: '#00AD7C',
    borderRightWidth: 1,
    borderColor: '#ffffff',
    marginTop: 10,
    alignSelf: 'stretch',
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
            <Image style={styles.resizeMode} source={require('../../app/styles/images/PennyWise.png')} />
            <Text style={styles.quote}>
              {randomQuote()}
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
