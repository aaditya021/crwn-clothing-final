import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyC0MZ3JSrNG-jH8vj4j9Xx37UL77r7VJ8w",
  authDomain: "crwn-db-18886.firebaseapp.com",
  databaseURL: "https://crwn-db-18886.firebaseio.com",
  projectId: "crwn-db-18886",
  storageBucket: "crwn-db-18886.appspot.com",
  messagingSenderId: "958004798629",
  appId: "1:958004798629:web:69d9cc7529550488cdd94c",
  measurementId: "G-LSFYJ6SEJY"
};

  firebase.initializeApp(config);

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;
  