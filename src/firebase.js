import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAzeVrK8s9uNxIyQ-FELos6BGgmfCTHIHo",
  authDomain: "linkedin-clone-aaf7d.firebaseapp.com",
  projectId: "linkedin-clone-aaf7d",
  storageBucket: "linkedin-clone-aaf7d.appspot.com",
  messagingSenderId: "522888476033",
  appId: "1:522888476033:web:96efe9cfc626f9485c6480"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };