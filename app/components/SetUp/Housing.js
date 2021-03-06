import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  } from 'react-native';
import firebase from '../../firebase.js';
import ExpenseSetUp from './ExpenseSetUp';


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
    color: '#FFFFFF',
    alignSelf: 'center',
  },
  selectedButton: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: '#9CB65E',
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
    backgroundColor: '#9CB65E',
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
    color: '#51602D',
  },
});

class Housing extends Component {
  constructor() {
    super();
    this.state = {
      housing: '',
    };
  }

  setHousingState(expense) {
    const number = parseInt(expense, 10);
    this.setState({ housing: number });
  }

  goBack = () => {
    const { user } = this.props;
    const { housing } = this.state;
    firebase.database().ref(`users/${user.uid}/recurring`).update(
      {
        Housing: housing,
      });

    this.props.navigator.push({
      title: 'Recurring Expenses',
      component: ExpenseSetUp,
      navigationBarHidden: 'false',
      passProps: { housing, user },
    });
  }

  render() {
    return (
      <View
        style={styles.container}
      >
        <TextInput
          placeholder="Enter housing expense"
          autoFocus={true}
          keyboardType="numeric"
          onChangeText={expense => this.setHousingState(expense)}
          style={styles.searchInput}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={this.goBack}
        >
          <Text
            style={styles.buttonText}
          >
            Done
          </Text>
        </TouchableHighlight>
      </View>
      );
  }
}


Housing.propTypes = {
  user: PropTypes.object.isRequired,
  navigator: PropTypes.object.isRequired,
};

export default Housing;
