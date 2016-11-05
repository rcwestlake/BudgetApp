import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
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
    color: '#111',
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00AD7C',
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
    backgroundColor: '#00AD7C',
    borderColor: '#00AD7C',
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
  searchInput: {
    height: 50,
    padding: 4,
    marginLeft: 40,
    marginRight: 40,
    fontSize: 23,
  },
});

export default class Savings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      income: '',
      percentSave: '',
      dollarSave: '',
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
      passProps: { user },
    });
  }

  componentDidMount() {
    const user = this.props.user;
    firebase.database().ref(`users/${user.uid}`).child('income').on('value', (snapshot) => {
      const income = snapshot.val() || 0;
      this.setState(
        {
          income,
        }
      );
    });
  }

  dollarSavings() {

  }

  percentSavings() {

  }

  render() {
    console.log(this.state.dollarSave);
    console.log(this.state.percentSave);
    return (
      <View style={styles.container}>
        <Text style={mStyles.title}> Savings </Text>
        <Separator />

        <Text style={mStyles.intro}>
          Here you will enter the amount or % you want to save each month.
          It will be deducted from your available funds.

          This is a good idea because it forces you to set aside a specific
          amount for the future.
        </Text>

        <TextInput
          style={styles.searchInput}
          onChangeText={text => this.setState({ dollarSave: text })}
          placeholder="Enter dollar amount you want to save"
        />

        <TextInput
          style={styles.searchInput}
          onChangeText={text => this.setState({ percentSave: text })}
          placeholder="Enter percent of your income you want to save"
        />

        <TouchableHighlight
          style={styles.button}
          underlayColor="#10DDC2"
          onPress={() => this.handleSubmit()}
        >
          <Text style={styles.buttonText}> Continue </Text>
        </TouchableHighlight>
      </View>
    );
  }
}
