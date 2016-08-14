'use strict';


angular.
  module('header').
  component('header', {
    templateUrl: 'header/header.html',
    controller: ['Header',
      function HeaderController() {
        console.log("this", this);
      }
    ]
  });
