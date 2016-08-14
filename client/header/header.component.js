// Register `header` component, along with its associated controller and template
angular.
  module('header').
  component('header', {
    templateUrl: 'header/header.html',
    controller: ['Header',
      function HeaderController() {
        console.log("poop");
      }
    ]
  });
