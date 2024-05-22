import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCB4dflktcbjnsvOa5DyVUbamsPuyBBkH0",
  authDomain: "flixdisk-d8d0b.firebaseapp.com",
  projectId: "flixdisk-d8d0b",
  storageBucket: "flixdisk-d8d0b.appspot.com",
  messagingSenderId: "755458473978",
  appId: "1:755458473978:web:555ba6f3e7348126fbee43",
  measurementId: "G-CXEW64GW9Z",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, storage, auth, provider };
