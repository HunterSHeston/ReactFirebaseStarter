import * as firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDsD3ZgnIQhlhbMDt5J2_isAvgYMk4Ugvc",
    authDomain: "groupup-c482e.firebaseapp.com",
    databaseURL: "https://groupup-c482e.firebaseio.com",
    projectId: "groupup-c482e",
    storageBucket: "groupup-c482e.appspot.com",
    messagingSenderId: "18796911954"
};

if(!firebase.apps.length){
    firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
    auth,
    db,
};