'use strict';


angular.
  module('team').
  component('team', {
    templateUrl: 'team/team.html',
    bindings: {
        teamArray: '<'
    },
    controller:
      function TeamController(draftService) {
        console.log("this", this);
        // this.team = [];
        // console.log("this", this);
        // if (this.team.length === 0) {
        //   this.team.push(this.name);
        //   } else {
        //   this.team.map((t) => {
        //     if (t.teamName !== this.name.teamName) {
        //       t.teamName === this.name.teamName;
        //     }
        //   });
        // };

        this.addPlayer = function () {
          console.log("this", this);
          let player = {
            name: this.playerName,
            teamName: this.playerTeamName,
            position: this.playerPosition,
            byeWeek: this.byeWeek
          }
          this.teamArray.push(player);
          console.log("team", this.teamArray);
        }

        this.logOut = function () {
          console.log("this", this);
          draftService.auth().signOut().then(function() {
            window.location = "#/";
            console.log("Logged Out")
          }, function(error) {
            console.log("error", error);
          });
        }
      }

  });
