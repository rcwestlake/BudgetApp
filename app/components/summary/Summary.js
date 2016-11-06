import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
} from 'react-native';
import { map, sum } from 'lodash';
import firebase from 'firebase';
import mStyles from '../../styles/main';
import Separator from '../../helpers/Separator';
import ExpenseSummary from './ExpenseSummary';
import Welcome from '../Welcome';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  fundsAvailable: {
    fontSize: 45,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#19B5CB',
    marginBottom: 15,
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#393E46',
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
    alignSelf: 'stretch',
    justifyContent: 'center',
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
    const recurring = sum(map(data.recurring, val => val));
    const expenses = sum(map(data.expenses, val => val.dollar));
    console.log(expenses);
    const savings = data.savings;

    this.setState(
      {
        fundsAvailable: income - recurring - expenses - savings,
      }
    );
  }

  goToExpenses = () => {
    const { user } = this.props;
    this.props.navigator.push({
      title: 'Edit Expenses',
      component: ExpenseSummary,
      navigationBarHidden: 'false',
      passProps: { user },
    });
  }

  goToIncome = () => {
    const { user } = this.props;
    this.props.navigator.push({
      title: 'Edit Income',
      component: IncomeSummary,
      navigationBarHidden: 'false',
      passProps: { user },
    });
  }

  signOut() {
    firebase.auth().signOut().then(() => {
      this.props.navigator.push({
        title: 'Welcome',
        component: Welcome,
      });
    }, (error) => {
      console.log('Error with sign out process', error);
    });
  }


  render() {
    const { fundsAvailable } = this.state;
    return (
      <View style={styles.container}>
        <Text style={mStyles.title}>
          Summary
        </Text>
        <Separator />

        <Text style={styles.fundsAvailable}>
          $ {fundsAvailable}
        </Text>
        <Separator />

        <TouchableHighlight
          style={styles.button}
          onPress={this.goToExpenses}
        >
          <Text style={styles.buttonText}>
            Edit Expenses
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
        >
          <Text style={styles.buttonText}>
            Edit Income
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.signOut()}
        >
          <Text>
            Sign Out
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
