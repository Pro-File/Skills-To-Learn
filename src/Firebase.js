import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyCoRTcSXe7PFz0E2l5nBtA9Kqcnwz6un-4",
  authDomain: "skills-to-learn.firebaseapp.com",
  projectId: "skills-to-learn",
  storageBucket: "skills-to-learn.appspot.com",
  messagingSenderId: "642499395470",
  appId: "1:642499395470:web:5fbce2c6fba52b39bb2edf",
  measurementId: "G-V3NLEC57ZC"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export var auth = firebase.auth();
  export var firestore = firebase.firestore();
  export var googleAuthProvider = new firebase.auth.GoogleAuthProvider(); 
  export var serverTimestamp = () => {
    return firebase.firestore.FieldValue.serverTimestamp();
  };
  export var storage = firebase.storage().ref();

  export default firebase;
