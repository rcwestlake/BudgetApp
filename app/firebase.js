import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyCAjJio9TjM53Vspna4z5j6ch2UXqrgLDo",
  authDomain: "budgetapp-b7608.firebaseapp.com",
  databaseURL: "https://budgetapp-b7608.firebaseio.com",
  storageBucket: "budgetapp-b7608.appspot.com",
  messagingSenderId: "295664394992"
};
firebase.initializeApp(config);

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider()
export const signOut = () => auth.signOut()
export const usersReference = firebase.database().ref('users')

export default firebase
