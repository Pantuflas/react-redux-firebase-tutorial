import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyBhv21IKohffWjoF2WP2RjBkEr24s2KN0U",
    authDomain: "react-redux-firebase-tut-44906.firebaseapp.com",
    databaseURL: "https://react-redux-firebase-tut-44906.firebaseio.com",
    projectId: "react-redux-firebase-tut-44906",
    storageBucket: "react-redux-firebase-tut-44906.appspot.com",
    messagingSenderId: "205437199123",
    appId: "1:205437199123:web:88d79342ed341c75e6b0e6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase;

