'use strict';

angular.
module('fantasyAssistantApp').
config(['$locationProvider', '$routeProvider',
    function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('');

        $routeProvider
            .when('/', {
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
