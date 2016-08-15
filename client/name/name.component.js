'use strict';


angular.
  module('name').
  component('name', {
    templateUrl: 'name/name.html',
    controller: [
      function NameController() {
        console.log("this", this);
      }
    ]
  });
