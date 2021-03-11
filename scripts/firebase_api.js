// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC-cHjkHbLJ-Mn0CwKvdsLb-2gQac77624",
    authDomain: "march02demohana.firebaseapp.com",
    projectId: "march02demohana",
    storageBucket: "march02demohana.appspot.com",
    messagingSenderId: "543027715886",
    appId: "1:543027715886:web:0ca540a2425b63680f64bf"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();           //add this to read/write
