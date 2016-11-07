import React, { Component, PropTypes } from 'react';
import firebase from 'firebase';
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  income: {
    color: '#00AD7C',
    fontSize: 45,
    marginBottom: 15,
    textAlign: 'center',
  },
  categoryText: {
    color: '#00AD7C',
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 10,
    marginTop: 15,
  },
  text: {
    fontSize: 16,
    color: '#393E46',
    marginBottom: 15,
    marginLeft: 15,
    textAlign: 'center',
  },
  boldText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#393E46',
    marginBottom: 15,
    marginLeft: 15,
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#393E46',
    alignSelf: 'center',
    textAlign: 'center',
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
    marginRight: 15,
  },
});

class IncomeSummary extends Component {
  constructor() {
    super();

    this.state = {
      data: null,
      user: null,
      income: null,
      extraIncome: null,
    };
  }

  componentDidMount() {
    const user = this.props.user;
    firebase.database().ref(`users/${user.uid}`).on('value', (snapshot) => {
      const data = snapshot.val() || 0;
      const income = data.income;
      this.setState(
        {
          income,
        }
      );
    });
  }

  handleIncomeChange(input) {
    const number = parseInt(input, 10);
    this.setState(
      {
        extraIncome: number,
      }
    );
  }

  addIncomeToDatabase = () => {
    const { user } = this.props;
    const { income, extraIncome } = this.state;
    const newIncome = income + extraIncome;
    firebase.database().ref(`users/${user.uid}`).update(
      {
        income: newIncome,
      });
  }

  render() {
    const { income } = this.state;
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={mStyles.title}>Your Income</Text>
          <Separator />
          <Text style={styles.text}>Add any extra income to keep your budget up to date.</Text>
          <Text style={styles.income}>$ {income}</Text>
          <Text style={styles.boldText}>Earned more this month?</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="$"
              onChangeText={input => this.handleIncomeChange(input)}
            />
            <TouchableHighlight
              style={styles.inputButton}
              onPress={this.addIncomeToDatabase}
            >
              <Text style={styles.buttonText}>Add</Text>
            </TouchableHighlight>
          </View>
          <Separator />
        </View>
      </ScrollView>
    );
  }
}

IncomeSummary.propTypes = {
  user: PropTypes.object.isRequired,
};

export default IncomeSummary;
