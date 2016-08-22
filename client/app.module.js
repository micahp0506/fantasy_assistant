'use strict';

// Define the `fantasyAssistantApp` module
angular.module('fantasyAssistantApp', [
    'ngRoute',
    'header',
    'auth',
    'name',
    'draft',
    'team'
])
.service('draftService', ['$rootScope', function($rootScope) {
    let config = {
        apiKey: "AIzaSyAEGPNZWcqhfxT8O4v91wxm7TMq5iSuxZU",
        authDomain: "fantasy-draft-asst.firebaseapp.com",
        databaseURL: "https://fantasy-draft-asst.firebaseio.com",
        storageBucket: "fantasy-draft-asst.appspot.com",
    };

    let firebaseInstance = firebase.initializeApp(config);
    return firebaseInstance;

    let database = firebase.database();
}]);


