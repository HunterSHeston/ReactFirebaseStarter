const firebase = require('firebase');

var config = {
    apiKey: "AIzaSyDsD3ZgnIQhlhbMDt5J2_isAvgYMk4Ugvc",
    authDomain: "groupup-c482e.firebaseapp.com",
    databaseURL: "https://groupup-c482e.firebaseio.com",
    projectId: "groupup-c482e",
    storageBucket: "groupup-c482e.appspot.com",
    messagingSenderId: "18796911954"
};

var app = firebase.initializeApp(config);
var db = app.database();

var name = 'Bane';

function print_snap(snap){
    console.log(snap.val());
}

function print_querry(name){
	let ref = db.ref('users');

	ref.once("value").then(print_snap);
}


print_querry();