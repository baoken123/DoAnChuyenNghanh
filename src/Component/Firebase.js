import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAXd4fEKBRLmx5cuB0M3CxWEpgZ4dmKNas",
    authDomain: "data-test-22926.firebaseapp.com",
    databaseURL: "https://data-test-22926.firebaseio.com",
    projectId: "data-test-22926",
    storageBucket: "gs://data-test-22926.appspot.com",
    messagingSenderId: "213350556824",
    appId: "1:213350556824:web:ba1ccb4286e8051e1b5ced",
    measurementId: "G-FZKLJGK132"
  };
  
  firebase.initializeApp(firebaseConfig);
  export const dataNote = firebase.database().ref('data-test-22926/');
  export const storage = firebase.storage().ref();

