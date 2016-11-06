import React, { Component, PropTypes } from 'react';
import firebase from 'firebase';
import { map } from 'lodash';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableHighlight,
  } from 'react-native';
import Summary from './Summary';
import mStyles from '../../styles/main';
import Separator from '../../helpers/Separator';

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
  inputContainer: {
    flexDirection: 'row',
  },
  input: {
    flex: 2,
    borderWidth: 1,
    borderBottomWidth: 10,
    borderColor: '#19B5CB',
    borderRadius: 8,
    height: 50,
    padding: 4,
    marginRight: 15,
    marginLeft: 20,
    marginBottom: 10,
    fontSize: 23,
    color: '#393E46',
  },
  inputButton: {
    flex: 1,
    height: 40,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderColor: '#393E46',
    borderWidth: 0.5,
    borderRadius: 8,
    marginTop: 10,
  },
});

class ExpenseSummary extends Component {
  constructor() {
    super();

    this.state = {
      data: null,
      user: null,
      recurringData: null,
      expenseData: null,
      title: '',
      dollar: '',
    };
  }

  componentWillMount() {
    const user = this.props.user;
    firebase.database().ref(`users/${user.uid}`).on('value', (snapshot) => {
      const data = snapshot.val() || 0;
      this.setState(
        {
          data,
        }
      );

      const recurringMap = map(data.recurring, (value, prop) => ({ prop, value }));
      const expenseMap = map(data.expenses, (value, prop) => ({ prop, value }));
      this.setState({
        recurringData: recurringMap,
        expenseData: expenseMap,
      });
    });
  }


  handleTitleChange(input) {
    this.setState(
      {
        title: input,
      }
    );
  }

  handleDollarChange(input) {
    const number = parseInt(input, 10);
    this.setState(
      {
        dollar: number,
      }
    );
  }

  addExpenseToDataBase = () => {
    const { user } = this.props;
    const { title, dollar } = this.state;
    firebase.database().ref(`users/${user.uid}/expenses`).push(
      {
        title,
        dollar,
      });
  }

  renderRecurring() {
    const { recurringData } = this.state;
    const expenses = map(recurringData, (item) => {
      return (
        <TouchableHighlight key={item.prop} style={styles.button}>
          <Text style={styles.buttonText}>
            {item.prop} ${item.value}
          </Text>
        </TouchableHighlight>
      );
    });
    return expenses;
  }

  renderExpenses() {
    const { expenseData } = this.state;
    const expenses = map(expenseData, (item) => {
      return (
        <TouchableHighlight key={item.prop} style={styles.button}>
        <Text style={styles.buttonText}>
          {item.value.title} ${item.value.dollar}
        </Text>
        </TouchableHighlight>
      );
    });
    return expenses;
  }

  render() {
    console.log('dollar', this.state.dollar);
    console.log('title', this.state.title);
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text
            style={mStyles.title}
          >
            Life Expenses
          </Text>
          <Text>Add/Edit Expenses</Text>
          <TextInput
            style={styles.input}
            placeholder="Title"
            onChangeText={input => this.handleTitleChange(input)}
          />
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="$"
              onChangeText={input => this.handleDollarChange(input)}
            />
            <TouchableHighlight
              style={styles.inputButton}
              onPress={this.addExpenseToDataBase}
            >
              <Text style={styles.buttonText}>Add</Text>
            </TouchableHighlight>
          </View>
          <Separator />
          <Text>
            Recurring
          </Text>
          {this.renderRecurring()}
          <Separator />
          <Text>
            Other Expenses
          </Text>
          {this.renderExpenses()}
          <Separator />
        </View>
      </ScrollView>
    );
  }
}

ExpenseSummary.propTypes = {
  user: PropTypes.object.isRequired,
  navigator: PropTypes.object,
  push: PropTypes.func,
};

export default ExpenseSummary;
