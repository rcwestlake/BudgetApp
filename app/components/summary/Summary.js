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
import Chart from './ProgressBar';

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
    marginTop: 10,
    marginBottom: 20,
    textAlign: 'center',
    color: '#E34A3E',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#51602D',
    marginBottom: 15,
    textAlign: 'center',
  },
  dollarText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#E34A3E',
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
    backgroundColor: '#B2C777',
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
      recurring: null,
      expenses: null,
      income: null,
      savings: null,
    };
  }

  componentDidMount() {
    const user = this.props.user;
    firebase.database().ref(`users/${user.uid}`).on('value', (snapshot) => {
      const data = snapshot.val() || 0;
      this.calculateBudget(data);
    });
  }

  today = () => {
    return moment().format('ddd, MMMM Do');
  }

  daysLeftThisMonth = () => {
    return moment().daysInMonth() - moment().date();
  }

  calculateBudget(data) {
    let expenses;
    const daysLeft = this.daysLeftThisMonth();
    const income = data.income;
    const recurring = sum(map(data.recurring, val => val));
    const savings = data.savings;
    if (daysLeft === 0) {
      expenses = 0;
    } else {
      expenses = sum(map(data.expenses, val => val.dollar));
    }
    const fundsAvailable = income - recurring - expenses - savings;

    this.setState(
      {
        fundsAvailable,
        recurring,
        expenses,
        savings,
        income,
      }
    );
  }

  dailyAllowance = () => {
    const { fundsAvailable } = this.state;
    return Math.floor(fundsAvailable / this.daysLeftThisMonth());
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
    const { fundsAvailable, income } = this.state;
    return (
      <View>
        <ScrollView>
          <View style={styles.container}>
            <Text style={mStyles.title}>
              Summary
            </Text>
            <Separator />

            <Text style={styles.fundsAvailable}>
              $ {fundsAvailable}
            </Text>
            <Text style={styles.text}>
              {this.today()}
            </Text>
            <Text style={styles.text}>
              {this.daysLeftThisMonth()} days left this month
            </Text>
            <Separator />
            <Text style={styles.dollarText}>
              $ {this.dailyAllowance()}
            </Text>
            <Text style={styles.text}> avg. amount you could spend each day </Text>
            <TouchableHighlight
              style={styles.button}
              onPress={this.goToExpenses}
              underlayColor="#9CB65E"
            >
              <Text style={styles.buttonText}>
                Edit Expenses
              </Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.button}
              onPress={this.goToIncome}
              underlayColor="#9CB65E"
            >
              <Text style={styles.buttonText}>
                Edit Income
              </Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.button}
              onPress={this.goToProfile}
              underlayColor="#9CB65E"
            >
              <Text style={styles.buttonText}>
                Profile
              </Text>
            </TouchableHighlight>

          </View>
        </ScrollView>
        <Chart income={income} fundsAvailable={fundsAvailable} />
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
