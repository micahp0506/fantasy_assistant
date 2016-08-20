'use strict';


angular.
  module('name').
  component('name', {
    templateUrl: 'name/name.html',
    controller:
      function NameController() {
        this.showTeam = false;
        this.setName = function () {
          console.log("this", this);
          // this.name = {
          //   teamName: this.teamName
          // }
          this.team = [];
          console.log("this", this.teamName);
          if (this.team.length === 0) {
            this.team.push({teamName: this.teamName});
          } else {
            this.team.map((t) => {
              if (t.teamName !== this.teamName) {
                t.teamName === this.teamName;
              }
            });
          };
          this.showTeam = true;
        }
        console.log("this", this.team);
      }
  });
