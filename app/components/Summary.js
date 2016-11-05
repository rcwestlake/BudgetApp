import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import firebase from 'firebase'

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
export default class Summary extends Component {
  constructor() {
    super();
    this.state = {
      data: '',
    };
  }

  componentDidMount() {
    const user = this.props.user;
    firebase.database().ref(`users/${user.uid}`).on('value', (snapshot) => {
      const data = snapshot.val() || 0;
      debugger;
      this.setState(
        {
          data,
        }
      );
    });
  }
  render() {
    console.log('user', this.props.user);
    console.log('user data, ', this.state.data);
    return (
      <View style={styles.container}>
        <Text>{this.state.data.income}</Text>
      </View>
    );
  }
}

Summary.propTypes = {
  user: PropTypes.string,
};
