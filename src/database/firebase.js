import firebase from 'firebase/app';
import firestore from 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAJbP51_-hiuhZghfNE4Szuky9heAZRLG0",
  authDomain: "udna-app.firebaseapp.com",
  databaseURL: "https://udna-app.firebaseio.com",
  projectId: "udna-app",
  storageBucket: "udna-app.appspot.com",
  messagingSenderId: "747644474180",
  appId: "1:747644474180:web:356b28161e70b7cda47d11",
  measurementId: "G-7X53L0GGPR"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
