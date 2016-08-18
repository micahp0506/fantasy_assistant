'use strict';


angular.
  module('auth').
  component('auth', {
    templateUrl: 'auth/auth.html',
    controller: [
      function AuthController() {
        console.log("this", this);
      }
    ]
  });
