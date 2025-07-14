import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB9KUMYMJ7LhSL7ZvMy10vRtq5P4R6RN2Q",
    authDomain: "nothing-8c431.firebaseapp.com",
    projectId: "nothing-8c431",
    storageBucket: "nothing-8c431.appspot.com",
    messagingSenderId: "944141338317",
    appId: "1:944141338317:web:b882d9267a17e5ffe44b84"
  };

// Initialize Firebase
const app =firebase.initializeApp(firebaseConfig);
// export const db = getDatabase(app);
const db = firebase.firestore()

 
export default db;