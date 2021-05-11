import { v4 as uuid } from 'uuid';
import {
  auth,
  firestore,
  serverTimestamp,
  googleAuthProvider,
} from "./../../../src/Firebase";

import { REMOVE_USER, SET_USER } from "./AuthConstants";
import firebase from "./../../Firebase";
// import history from "../../history/history"

export var setUser = (user) => ({
  type: SET_USER,
  payload: {
    user,
  },
});

export var removeUser = () => ({
  type: REMOVE_USER,
});

export var signup = async(user)=> {
  try {
        var ref = firebase.storage().ref();
        const metadata = {
          contentType : 'image/jpeg',
        }
        // console.log(metadata.contentType);
      const fileRef = ref.child(`users/img-${uuid()}.jpg`);

        const uploadTaskSnapshot = await fileRef.put(user.photo, metadata);

          const downloadURL = await uploadTaskSnapshot.ref.getDownloadURL();
          // console.log(downloadURL)
            user.photo = downloadURL;
    //         //create user on firebase auth section
    var { user: { uid } } = await auth.createUserWithEmailAndPassword(user.Email, user.Pass);

      // console.log(user);

    await firestore.collection("users").doc(uid).set(user);

    //navigate to hom page
    // history.push("/home")
      return true;

  } catch (error) {
    console.log(error);
    return false;
  }
};

export var signin = (user) => async (dispatch) => {
  try {
    // console.log(user)
    //signin user with auth
    await auth.signInWithEmailAndPassword(user.Email, user.Pass);
    return true;
    //navigate to hom page
    // history.push("/")
  } catch (error) {
    console.log(error);
    return false;
  }
};

export var signout = () => async (dispatch) => {
  try {
    //signout user from firebase auth
    await auth.signOut();
  } catch (error) {
    console.log(error);
  }
};

export var googleSignin = () => async (dispatch) => {
  try {
    //signin user in firebase auth (google)
    var {
      user: { displayName, email, uid, photoURL },
      additionalUserInfo: { isNewUser },
    } = await auth.signInWithPopup(googleAuthProvider);
    if (isNewUser) {
      //if new user -> add info to fire store
      var userInfo = {
        Name: displayName,
        Email: email,
        photo: photoURL,
        uid,
        createdAt: serverTimestamp(),
      };
      await firestore.collection("users").doc(uid).set(userInfo);
      
    }
  } catch (error) {
    console.log(error);
  }
};


//app auth state (centralize auth manager for our app)
export var checkAuthStatus = () => async (dispatch) => {
  try {
    //firebase auth listener
    firebase.auth().onAuthStateChanged(async function (user) {
      // console.log(user)
      if (user) {
        // User is signed in.
        var { uid } = user;
        //fetch user data from firestore
        var query = await firestore.collection("users").doc(uid).get();
        var { Name, Email, photo } = query.data();
        //setting up redux state
        var userDataForState = {
          Name,
          Email,
          photo,
          uid,
        };
        dispatch(setUser(userDataForState));
        return true;
      } else {
        // No user is signed in.
        //set auth state to null
        dispatch(removeUser());
        return false;
      }
    });
  } catch (error) {
    console.log(error);
  }
};
