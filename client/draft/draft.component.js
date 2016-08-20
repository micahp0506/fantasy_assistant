'use strict';


angular.
  module('draft').
  component('draft', {
    templateUrl: 'draft/draft.html',
    bindings: {
        teamArray: '<'
    },
    controller:
      function TeamController(draftService) {

        this.addPlayer = function () {
          console.log("this", this);
          let player = {
            playerId: new Date() * -1,
            name: this.playerName,
            teamName: this.playerTeamName,
            position: this.playerPosition,
            byeWeek: this.byeWeek
          }
          this.teamArray.push(player);
          console.log("team", this.teamArray);
          this.playerName = null;
          this.playerTeamName = null;
          this.playerPosition = '';
          this.byeWeek = null;
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
