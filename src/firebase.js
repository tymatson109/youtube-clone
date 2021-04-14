import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDlRfOxC4jdD5Hs37YCIgoCr26N5qVNG6A",
    authDomain: "clone-3a3db.firebaseapp.com",
    projectId: "clone-3a3db",
    storageBucket: "clone-3a3db.appspot.com",
    messagingSenderId: "707981101514",
    appId: "1:707981101514:web:987c5235a77b9b5cd7e733",
    measurementId: "G-E3MCQ86GLP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export default db;
  export {auth, provider};