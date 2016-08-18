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

        this.addPlayer = function () {
          console.log("this", this);
        }
      }
    ]
  });
