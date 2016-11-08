import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableHighlight,
  } from 'react-native';
import mStyles from '../../styles/main';
import Separator from '../../helpers/Separator';
import firebase from '../../firebase.js';
import ExpenseSetUp from './ExpenseSetUp';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    color: '#51602D',
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#9CB65E',
    alignSelf: 'center',
  },
  continueText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    alignSelf: 'center',
  },
  selectedButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    alignSelf: 'center',
  },
  selectedButton: {
    height: 40,
    flexDirection: 'row',
    backgroundColor: '#9CB65E',
    borderColor: '#9CB65E',
    borderWidth: 0.2,
    borderRadius: 8,
    marginTop: 10,
    marginRight: 80,
    marginLeft: 80,
    alignSelf: 'stretch',
    justifyContent: 'center',
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
  continueButton: {
    height: 40,
    flexDirection: 'row',
    backgroundColor: '#9CB65E',
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
    color: '#51602D',
    padding: 4,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 10,
    fontSize: 23,
    textAlign: 'center',
  },
});

class IncomeSetUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      income: '',
      weekly: false,
      biweekly: false,
      monthly: false,
      annually: false,
      none: false,
    };
  }

  updateState = (name, state) => {
    this.setState({
      [name]: !state,
    });
  }

  handleSubmit() {
    const user = this.props.user;
    const { income } = this.state;
    firebase.database().ref(`users/${user.uid}`).set({
      income: this.calculateIncome(income),
    });
    this.props.navigator.push({
      title: 'Recurring Expenses',
      component: ExpenseSetUp,
      navigationBarHidden: 'false',
      passProps: { user },
    });
  }

  calculateIncome(income) {
    if (this.state.weekly) {
      const adjustedIncome = Math.floor((income * 52) / 12);
      return adjustedIncome;
    }

    if (this.state.biweekly) {
      const adjustedIncome = Math.floor((income * 26) / 12);
      return adjustedIncome;
    }

    if (this.state.monthly) {
      const adjustedIncome = Math.floor(income);
      return adjustedIncome;
    }

    if (this.state.annually) {
      const adjustedIncome = Math.floor(income / 12);
      return adjustedIncome;
    }

    if (this.state.none) {
      return income;
    }
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={mStyles.title}> Income </Text>
          <Separator />

          <Text style={mStyles.intro}>
            What is your income? Include salary, hourly wage,
            investment income, anything that leads to more money in your pocket.
          </Text>

          <TextInput
            style={styles.searchInput}
            autoFocus={true}
            keyboardType="numeric"
            onChangeText={text => this.setState({ income: text })}
            placeholder="Enter income"
          />

          <Text style={styles.text}> How often? </Text>

          <TouchableHighlight
            style={this.state.weekly ? styles.selectedButton : styles.button}
            onPress={() => this.updateState('weekly', this.state.weekly)}
          >
            <Text style={this.state.weekly ? styles.selectedButtonText : styles.buttonText}>
              Weekly
            </Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={this.state.biweekly ? styles.selectedButton : styles.button}
            onPress={() => this.updateState('biweekly', this.state.biweekly)}
          >
            <Text style={this.state.biweekly ? styles.selectedButtonText : styles.buttonText}>
              Biweekly
            </Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={this.state.monthly ? styles.selectedButton : styles.button}
            onPress={() => this.updateState('monthly', this.state.monthly)}
          >
            <Text style={this.state.monthly ? styles.selectedButtonText : styles.buttonText}>
              Monthly
            </Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={this.state.annually ? styles.selectedButton : styles.button}
            onPress={() => this.updateState('annually', this.state.annually)}
          >
            <Text style={this.state.annually ? styles.selectedButtonText : styles.buttonText}>
              Annually
            </Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={this.state.none ? styles.selectedButton : styles.button}
            onPress={() => this.updateState('none', this.state.none)}
          >
            <Text style={this.state.none ? styles.selectedButtonText : styles.buttonText}>
              None
            </Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.continueButton}
            underlayColor="#9CB65E"
            onPress={() => this.handleSubmit()}
          >
            <Text style={styles.continueText}> Continue </Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    );
  }
}

IncomeSetUp.propTypes = {
  navigator: PropTypes.object.isRequired,
  push: PropTypes.func,
  user: PropTypes.object,
};

export default IncomeSetUp;
