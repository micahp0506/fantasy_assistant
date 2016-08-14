'use strict';

angular.
module('fantasyAssistantApp', ['ngRoute']).
config(['$locationProvider', '$routeProvider',
    function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider
            .when('/', {
                template: '<header></header>'
            })
            .otherwise('/');
    }
]);
