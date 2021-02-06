import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAxDQNu9BLovxNz2G_VX4UzSXFx46_l3b4",
    authDomain: "bloodbankapp-15b95.firebaseapp.com",
    databaseURL: "https://bloodbankapp-15b95-default-rtdb.firebaseio.com",
    projectId: "bloodbankapp-15b95",
    storageBucket: "bloodbankapp-15b95.appspot.com",
    messagingSenderId: "151810044060",
    appId: "1:151810044060:web:9d4bf5834d86f55d6bfd59",
    measurementId: "G-NJCL37N3D1"
  };
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }