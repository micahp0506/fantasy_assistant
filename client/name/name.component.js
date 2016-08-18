'use strict';


angular.
  module('name').
  component('name', {
    templateUrl: 'name/name.html',
    controller: [
      function NameController() {
        this.showTeam = false;
        this.setName = function () {
          console.log("this", this);
          this.name = {
            teamName: this.teamName
          }

          this.showTeam = true;
          console.log("this", this);
        }
        console.log("this", this);
      }
    ]
  });
