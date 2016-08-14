'use strict';

const app = angular.module('FantasyAssistantApp', ['ngRoute']);

app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'HomeCtrl',
                templateUrl: 'partials/home.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);
