'use strict';

angular.
module('fantasyAssistantApp').
config(['$locationProvider', '$routeProvider',
    function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('');
        let config = {
            apiKey: "AIzaSyAEGPNZWcqhfxT8O4v91wxm7TMq5iSuxZU",
            authDomain: "fantasy-draft-asst.firebaseapp.com",
            databaseURL: "https://fantasy-draft-asst.firebaseio.com",
            storageBucket: "fantasy-draft-asst.appspot.com",
        };
        firebase.initializeApp(config);

        $routeProvider
            .when('/', {
                template: '<auth></auth>'
            })
            .when('/header', {
                template: '<header></header>'
            })
            .when('/name', {
                template: '<name></name>'
            })
            .when('/team', {
                template: '<team></team>'
            })
            .otherwise('/');
    }
]);
