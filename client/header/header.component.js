'use strict';


angular.
  module('header').
  component('header', {
    templateUrl: 'header/header.html',
    controller:
      function HeaderController() {
        console.log("this", this);
      }
  });
