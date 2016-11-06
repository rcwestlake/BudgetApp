import React, { Component, PropTypes } from 'react';
import firebase from 'firebase';
import { map, forEach } from 'lodash';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  } from 'react-native';
import Summary from './Summary';
import mStyles from '../../styles/main';

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

class ExpenseSummary extends Component {
  constructor() {
    super();

    this.state = {
      data: null,
      user: null,
      recurringData: null,
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
      this.setState({
        recurringData: recurringMap,
      });
    });
  }

  render() {
    const { recurringData } = this.state;
    const renderStuff = map(recurringData, (item) => {
      return (
        <TouchableHighlight style={styles.button}>
          <Text style={styles.buttonText}>
            {item.prop} ${item.value}
          </Text>
        </TouchableHighlight>
      );
    });

    return (
      <ScrollView>
        <View
          style={styles.container}
        >
          <Text
            style={mStyles.title}
          >
            Life Expenses
          </Text>
          {renderStuff}
          <TouchableHighlight
            style={styles.button}
          >
            <Text>Add/Edit</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            onPress={this.renderRecurring}
          >
            <Text> test renderRecurring</Text>
          </TouchableHighlight>
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
