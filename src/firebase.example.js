import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "Your-API-Key",
    authDomain: "Auth-Domain.firebaseapp.com",
    databaseURL: "https://Your-DB-URL.firebaseio.com",
    projectId: "Your-Project-ID",
    storageBucket: "Your-Storage-Bucket.appspot.com",
    messagingSenderId: "Your-Messaging-Sender-ID",
    appId: "Your-App-ID",
    measurementId: "Your-Measurement-ID"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };