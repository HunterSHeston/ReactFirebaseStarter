import * as firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "key",
    authDomain: "domain",
    databaseURL: "url",
    projectId: "id",
    storageBucket: "bucket",
    messagingSenderId: "id"
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
