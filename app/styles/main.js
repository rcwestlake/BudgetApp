import {
  StyleSheet,
} from 'react-native';

const mStyles = StyleSheet.create({
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    marginTop: 10,
  },
  colorTitle: {
    color: '#9CB65E',
    fontSize: 45,
    fontWeight: 'bold',
    marginTop: 10,
  },
  intro: {
    marginTop: 40,
    marginBottom: 50,
    marginLeft: 30,
    marginRight: 30,
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: '#9CB65E',
    borderColor: '#9CB65E',
    borderWidth: 0.2,
    borderRadius: 8,
    marginTop: 10,
    marginRight: 30,
    marginLeft: 30,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    alignSelf: 'center',
  },
  selectedButton: {
    height: 30,
    flexDirection: 'row',
    backgroundColor: '#9CB65E',
    borderColor: '#9CB65E',
    borderWidth: 0.2,
    borderRadius: 8,
    marginTop: 10,
    marginRight: 30,
    marginLeft: 30,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
});

export default mStyles;
