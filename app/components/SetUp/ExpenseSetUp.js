import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import Housing from './Housing.js';
import Auto from './Auto.js';
import Insurance from './Insurance.js';
import Utilities from './Utilities.js';
import Savings from './Savings.js';

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
    color: '#FFFFFF',
    alignSelf: 'center',
  },
  selectedButton: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: '#10DDC2',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: '#19B5CB',
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
      passProps: { user },
    });
  }

  handleAutoSubmit = () => {
    const { user } = this.props;
    this.props.navigator.push({
      title: 'Auto',
      component: Auto,
      passProps: { user },
    });
  }

  handleInsuranceSubmit = () => {
    const { user } = this.props;
    this.props.navigator.push({
      title: 'Insurance',
      component: Insurance,
      passProps: { user },
    });
  }

  handleUtilitiesSubmit = () => {
    const { user } = this.props;
    this.props.navigator.push({
      title: 'Utilities',
      component: Utilities,
      passProps: { user },
    });
  }

  handleContinue = () => {
    const { user } = this.props;
    this.props.navigator.push({
      title: 'Savings',
      component: Savings,
      passProps: { user },
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Select all recurring expenses. Amounts will be entered on the next page.</Text>

        <TouchableHighlight
          style={this.state.housing ? styles.selectedButton : styles.button}
          underlayColor="#19B5CB"
          onPress={this.handleHousingSubmit}

        >
          <Text style={styles.buttonText}> Rent/Mortgage </Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={this.state.auto ? styles.selectedButton : styles.button}
          underlayColor="#19B5CB"
          onPress={this.handleAutoSubmit}
        >
          <Text style={styles.buttonText}> Auto </Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={this.state.insurance ? styles.selectedButton : styles.button}
          underlayColor="#19B5CB"
          onPress={this.handleInsuranceSubmit}
        >
          <Text style={styles.buttonText}> Insurance </Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={this.state.utilities ? styles.selectedButton : styles.button}
          underlayColor="#19B5CB"
          onPress={this.handleUtilitiesSubmit}
        >
          <Text style={styles.buttonText}> Utilities </Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.button}
          underlayColor="#19B5CB"
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
