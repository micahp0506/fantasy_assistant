'use strict';


angular.
  module('name').
  component('name', {
    templateUrl: 'name/name.html',
    controller:
      function NameController() {
        this.showDraft = false;
        this.showName = true;

        this.setName = function () {
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
          this.showDraft = true;
          this.showName = false;
        }
        console.log("this", this.team);
      }
  });
