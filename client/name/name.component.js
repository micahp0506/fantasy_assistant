'use strict';


angular.
  module('name').
  component('name', {
    templateUrl: 'name/name.html',
    controller: [
      function NameController() {

        this.setName = function () {
          this.name = {
            teamName: this.teamName
          }
          console.log("this.teamName", this);
        }
      }
    ]
  });
