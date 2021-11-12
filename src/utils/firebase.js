import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDdyEbiBSHglB1mwMFFiX_zxHOAI2bJnq0",
    authDomain: "birthday-cbc2c.firebaseapp.com",
    projectId: "birthday-cbc2c",
    storageBucket: "birthday-cbc2c.appspot.com",
    messagingSenderId: "257262818314",
    appId: "1:257262818314:web:76c615ce0d62b366e4fbf3"
  };

firebase.initializeApp(firebaseConfig);
export default firebase;