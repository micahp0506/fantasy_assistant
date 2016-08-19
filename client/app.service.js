'use strict';


let app = angular.module('app', []);
app.service('draftService', function() {
    let config = {
        apiKey: "AIzaSyAEGPNZWcqhfxT8O4v91wxm7TMq5iSuxZU",
        authDomain: "fantasy-draft-asst.firebaseapp.com",
        databaseURL: "https://fantasy-draft-asst.firebaseio.com",
        storageBucket: "fantasy-draft-asst.appspot.com",
    };

    this.firebaseInstance = firebase.initializeApp(config);
    return firebaseInstance;
});
