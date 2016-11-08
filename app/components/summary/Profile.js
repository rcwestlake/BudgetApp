import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
} from 'react-native';
import firebase from 'firebase';
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
    color: '#393E46',
    marginBottom: 15,
    marginLeft: 10,
  },
  categoryText: {
    color: '#9CB65E',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    marginBottom: 10,
    marginTop: 15,
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
    backgroundColor: '#FA7F7F',
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
      this.props.navigator.popToTop(0);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={mStyles.title}>
          Profile
        </Text>
        <Separator />
        <Text style={styles.categoryText}>
          About
        </Text>
        <Text style={styles.text}>
          In case you forgot, PennyWise is an app made for people
          who want to build a better financial future by creating a monthly budget.
          Owls are wise, which is why we chose the fine creature as our logo. By
          using our app, you will be more wise too.
        </Text>
        <Text style={styles.categoryText}>
          Account
        </Text>
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.signOut()}
          underlayColor="#F73859"
        >
          <Text style={styles.buttonText}>
            Sign Out
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

Profile.propTypes = {
  navigator: PropTypes.object.isRequired,
};

export default Profile;
