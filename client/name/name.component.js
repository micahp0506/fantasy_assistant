'use strict';


angular.
  module('name').
  component('name', {
    templateUrl: 'name/name.html',
    bindings: {
        name: '<'
    },
    controller: [
      function NameController() {

        this.setName = function () {
            let name = this.name;
        }
      }
    ]
  });
