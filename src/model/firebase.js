import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/analytics'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDILo2oTg3QXIZNeoIOd3aGsmbsqwmvzr4",
    authDomain: "meat-ec74b.firebaseapp.com",
    databaseURL: "https://meat-ec74b.firebaseio.com",
    projectId: "meat-ec74b",
    storageBucket: "meat-ec74b.appspot.com",
    messagingSenderId: "970600340663",
    appId: "1:970600340663:web:11591e8c31ce5d282d0132",
    measurementId: "G-QTGBWNNS8C"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export let db = firebase.firestore()
export let auth = firebase.auth()


