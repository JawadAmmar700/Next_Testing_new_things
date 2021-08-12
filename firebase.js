
import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmRKUk9e5rAjnggSILCJjmKvrP4WP_XO4",
  authDomain: "testlivedatabase-4477d.firebaseapp.com",
  projectId: "testlivedatabase-4477d",
  storageBucket: "testlivedatabase-4477d.appspot.com",
  messagingSenderId: "979402684314",
  appId: "1:979402684314:web:470f8609af9f6afca0ec23",
  measurementId: "G-RJ9YF4MGPC"
};


const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig): firebase.app()

export const db = app.firestore()