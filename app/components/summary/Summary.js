import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  ScrollView,
} from 'react-native';
import { map, sum } from 'lodash';
import moment from 'moment';
import firebase from 'firebase';
import mStyles from '../../styles/main';
import Separator from '../../helpers/Separator';
import ExpenseSummary from './ExpenseSummary';
import Profile from './Profile';
import IncomeSummary from './IncomeSummary';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    marginTop: 30,
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
    color: '#393E46',
    marginBottom: 15,
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    alignSelf: 'center',
  },
  button: {
    height: 40,
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#48BBEC',
    borderColor: '#ffffff',
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
      const fundsAvailable = this.calculateBudget(data);
      console.log('did mount summary');
      this.setState(
        {
          data, fundsAvailable,
        }
      );
    });
  }

  today = () => {
    return moment().format('ddd, MMMM Do');
  }

  daysLeftThisMonth() {
    let daysLeft = this.today() - 10;
    console.log(daysLeft);
    return daysLeft;
  }

  calculateBudget(data) {
    const income = data.income;
    const recurring = sum(map(data.recurring, val => val));
    const expenses = sum(map(data.expenses, val => val.dollar));
    const savings = data.savings;
    const fundsAvailable = income - recurring - expenses - savings;
    return fundsAvailable;
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

  goToProfile = () => {
    this.props.navigator.push({
      title: 'Profile',
      component: Profile,
      navigationBarHidden: 'false',
    });
  }


  render() {
    const { fundsAvailable } = this.state;
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={mStyles.colorTitle}>
            Summary
          </Text>
          <Separator />

          <Text style={styles.fundsAvailable}>
            $ {fundsAvailable}
          </Text>
          <Text>{this.today()}</Text>
          <Text>Days left this month: {this.daysLeftThisMonth()}</Text>
          <Text style={styles.text}>left this month</Text>
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
            onPress={this.goToIncome}
          >
            <Text style={styles.buttonText}>
              Edit Income
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            onPress={this.goToProfile}
          >
            <Text style={styles.buttonText}>
              Profile
            </Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    );
  }
}

Summary.propTypes = {
  user: PropTypes.object.isRequired,
  navigator: PropTypes.object,
  push: PropTypes.object,
};

export default Summary;
