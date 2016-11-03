import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import firebase, { reference, signIn } from '../../firebase.js';
import Housing from './Housing.js';
import Auto from './Auto.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#48BBEC',
  },
  buttonText: {
    fontSize: 18,
    color: '#FFFFFF',
    alignSelf: 'center',
  },
  selectedButton: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: '#10DDC2',
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
    backgroundColor: '#19B5CB',
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
    color: 'white',
  },
});

export default class ExpenseSetUp extends Component {
  constructor() {
    super();
    this.state = {
      housing: false,
      auto: false,
      insurance: false,
      utilities: false,
    };
  }
//May not need these functions\/
  // setHouseState = () => this.setState({ housing: !this.state.housing })
  // setAutoState = () => this.setState({ auto: !this.state.auto })
  // setInsuranceState = () => this.setState({ insurance: !this.state.insurance })
  // setUtilitiesState = () => this.setState({ utilities: !this.state.utilities })

  handleHousingSubmit() {
    const { user } = this.props;
    this.props.navigator.push({
      title: 'Rent/Mortgage',
      component: Housing,
      passProps: { user },
    });
  }

  handleAutoSubmit() {
    const { user } = this.props;
    this.props.navigator.push({
      title: 'Auto',
      component: Auto,
      passProps: { user },
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Select all recurring expenses. Amounts will be entered on the next page.</Text>

        <TouchableHighlight
          style={this.state.housing ? styles.selectedButton : styles.button}
          underlayColor="black"
          onPress={() => this.handleHousingSubmit()}
        >
          <Text style={styles.buttonText} >Rent/Mortgage</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={this.state.auto ? styles.selectedButton : styles.button}
          underlayColor="black"
          onPress={() => this.handleAutoSubmit()}
        >
          <Text style={styles.buttonText} >Auto</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={this.state.insurance ? styles.selectedButton : styles.button}
          underlayColor="black"
          onPress={this.setInsuranceState}
        >
          <Text style={styles.buttonText} >Insurance</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={this.state.utilities ? styles.selectedButton : styles.button}
          underlayColor="black"
          onPress={this.setUtilitiesState}
        >
          <Text style={styles.buttonText} >Utilities</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.button}
          underlayColor="black"
        >
          <Text style={styles.buttonText} >Continue</Text>
        </TouchableHighlight>

      </View>
    );
  }
}
