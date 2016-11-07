import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
} from 'react-native';
import firebase from 'firebase';
import Welcome from '../Welcome';
import Separator from '../../helpers/Separator';
import mStyles from '../../styles/main';

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
    color: '#393E46',
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
    flex: 1,
    backgroundColor: '#48BBEC',
    borderColor: '#ffffff',
    borderWidth: 0.5,
    borderRadius: 8,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  resizeMode: {
    width: 275,
    height: 275,
    alignSelf: 'center',
  },
});

class Profile extends Component {

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
    return (
      <View style={styles.container}>
        {/* <Image
          style={styles.resizeMode}
          source={require('../../styles/images/PennyWise.png')}
        /> */}
        <Text style={mStyles.title}>
          Profile
        </Text>
        <Separator />
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

Profile.propTypes = {
  navigator: PropTypes.object.isRequired,
  push: PropTypes.func,
};

export default Profile;
