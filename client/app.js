'use strict';

angular.
module('fantasyAssistantApp').
config(['$locationProvider', '$routeProvider',
    function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider
            .when('/', {
                template: '<name></name>'
            })
            .otherwise('/');
    }
]);
