'use strict';


angular.
  module('team').
  component('team', {
    templateUrl: 'team/team.html',
    bindings: {
        teamArray: '<'
    },
    controller:
      function TeamController(draftService) {
