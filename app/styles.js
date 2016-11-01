const React = require('react-native');
const { StyleSheet } = React;

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  tagline: {
    fontSize: 10,
    marginBottom: 30
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  quote: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  privacy: {
    fontSize: 5
  },

  buttonContainer: {
    flex: 1,
  },

  homeButton: {
    borderWidth: 2,
    backgroundColor: 'magenta'
  }
});
