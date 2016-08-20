'use strict';

angular.
module('fantasyAssistantApp').
config(['$locationProvider', '$routeProvider',
    function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('');

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
            .when('/draft', {
                template: '<draft></draft>'
            })
            .when('/team', {
                template: '<team></team>'
            })
            .otherwise('/');
    }
]);
