'use strict';


angular.
  module('team').
  component('team', {
    templateUrl: 'team/team.html',
    bindings: {
        name: '<'
    },
    controller: [
      function TeamController() {
        console.log("this", this);
      }
    ]
  });
