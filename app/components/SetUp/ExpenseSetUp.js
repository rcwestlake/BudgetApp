import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import Housing from './Housing';
import Auto from './Auto';
import Insurance from './Insurance';
import Utilities from './Utilities';
import Savings from './Savings';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#9CB65E',
    alignSelf: 'center',
  },
  selectedButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    alignSelf: 'center',
  },
  button: {
    height: 40,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderColor: '#393E46',
    borderWidth: 0.5,
    borderRadius: 8,
    marginTop: 10,
    marginRight: 80,
    marginLeft: 80,
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
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#51602D',
    marginBottom: 15,
    textAlign: 'center',
  },
});

class ExpenseSetUp extends Component {
  constructor() {
    super();
    this.state = {
      housing: false,
      auto: false,
      insurance: false,
      utilities: false,
    };
  }

  handleHousingSubmit = () => {
    const { user } = this.props;
    this.props.navigator.push({
      title: 'Rent/Mortgage',
      component: Housing,
      navigationBarHidden: 'false',
      passProps: { user },
    });
  }

  handleAutoSubmit = () => {
    const { user } = this.props;
    this.props.navigator.push({
      title: 'Auto',
      component: Auto,
      navigationBarHidden: 'false',
      passProps: { user },
    });
  }

  handleInsuranceSubmit = () => {
    const { user } = this.props;
    this.props.navigator.push({
      title: 'Insurance',
      component: Insurance,
      navigationBarHidden: 'false',
      passProps: { user },
    });
  }

  handleUtilitiesSubmit = () => {
    const { user } = this.props;
    this.props.navigator.push({
      title: 'Utilities',
      component: Utilities,
      navigationBarHidden: 'false',
      passProps: { user },
    });
  }

  handleContinue = () => {
    const { user } = this.props;
    this.props.navigator.push({
      title: 'Savings',
      component: Savings,
      navigationBarHidden: 'false',
      passProps: { user },
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> Select all recurring expenses. Amounts will be entered on the next page.</Text>

        <TouchableHighlight
          style={this.state.housing ? styles.selectedButton : styles.button}
          underlayColor="#9CB65E"
          onPress={this.handleHousingSubmit}
        >
          <Text style={styles.buttonText}> Rent/Mortgage </Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={this.state.auto ? styles.selectedButton : styles.button}
          underlayColor="#9CB65E"
          onPress={this.handleAutoSubmit}
        >
          <Text style={styles.buttonText}> Auto </Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={this.state.insurance ? styles.selectedButton : styles.button}
          underlayColor="#9CB65E"
          onPress={this.handleInsuranceSubmit}
        >
          <Text style={styles.buttonText}> Insurance </Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={this.state.utilities ? styles.selectedButton : styles.button}
          underlayColor="#9CB65E"
          onPress={this.handleUtilitiesSubmit}
        >
          <Text style={styles.buttonText}> Utilities </Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.button}
          underlayColor="#9CB65E"
          onPress={this.handleContinue}
        >
          <Text style={styles.buttonText} >Continue</Text>
        </TouchableHighlight>

      </View>
    );
  }
}

ExpenseSetUp.propTypes = {
  user: PropTypes.object.isRequired,
  navigator: PropTypes.object,
};

export default ExpenseSetUp;
