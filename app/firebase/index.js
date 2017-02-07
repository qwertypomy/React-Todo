import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyA-2Lh5pAB-P2AiyiiGfG5Do7IlREi14yQ",
    authDomain: "my-todo-app-93965.firebaseapp.com",
    databaseURL: "https://my-todo-app-93965.firebaseio.com",
    storageBucket: "my-todo-app-93965.appspot.com",
    messagingSenderId: "218310974239"
  };

  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();

export default firebase;
