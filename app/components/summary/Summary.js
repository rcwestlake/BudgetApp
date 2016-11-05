import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
} from 'react-native';
import { map, sum } from 'lodash';
import firebase from 'firebase';
import ExpenseSummary from './ExpenseSummary';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#19B5CB',
    marginBottom: 15,
    textAlign: 'center',
  },
  percent: {
    color: '#393E46',
    fontSize: 30,
    marginBottom: 100,
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
  input: {
    height: 50,
    padding: 4,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 40,
    fontSize: 23,
    textAlign: 'center',
  },
});
class Summary extends Component {
  constructor() {
    super();
    this.state = {
      data: '',
      fundsAvailable: null,
    };
  }

  componentDidMount() {
    const user = this.props.user;
    firebase.database().ref(`users/${user.uid}`).on('value', (snapshot) => {
      const data = snapshot.val() || 0;
      this.setState(
        {
          data,
        }
      );
      this.calculateBudget();
    });
  }

  calculateBudget() {
    const { data } = this.state;
    const income = data.income;
    const expenses = sum(map(data.recurring, val => val));
    const savings = data.savings;

    this.setState(
      {
        fundsAvailable: income - expenses - savings,
      }
    );
  }

  goToExpenses = () => {
    const { user } = this.props;
    this.props.navigator.push({
      title: 'Edit Expenses',
      component: ExpenseSummary,
      passProps: { user },
    });
  }
  render() {
    const { fundsAvailable } = this.state;
    return (
      <View style={styles.container}>
        <Text>
          {fundsAvailable}
        </Text>
        <TouchableHighlight style={styles.button}>
          <Text>
            Edit Expenses
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

Summary.propTypes = {
  user: PropTypes.object.isRequired,
  navigator: PropTypes.object,
  push: PropTypes.object,
};


export default Summary;
