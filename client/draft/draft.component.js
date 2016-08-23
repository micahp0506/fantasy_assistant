'use strict';


angular.
  module('draft').
  component('draft', {
    templateUrl: 'draft/draft.html',
    bindings: {
        team: '<'
    },
    controller:
      function DraftController(draftService, authService) {
        let user = authService.getUser();
        this.round = 0;
        this.teamArray =[];
        this.qbArray = [];
        this.wrArray = [];
        this.rbArray = [];
        this.teArray = [];
        this.kArray = [];
        this.defArray = [];

        this.addPlayer = function () {
          console.log("this", this);
          this.round += 1;
          this.pId = new Date() * -1;

          draftService.database().ref(user.uid + '/players').push({
            playerId: this.pId,
            round: this.round,
            playerName: this.playerName,
            playerTeamName: this.playerTeamName,
            playerPosition: this.playerPosition,
            byeWeek: this.byeWeek
          });

          let player = {
            playerId: this.pId,
            round: this.round,
            playerName: this.playerName,
            playerTeamName: this.playerTeamName,
            playerPosition: this.playerPosition,
            byeWeek: this.byeWeek
          }

          this.teamArray.push(player);
          this.round = this.teamArray.length;
          this.teamArray.map((t) => {
            if (t.playerPosition === "QB") {
              this.qbArray.push(t);
            } else if (t.playerPosition === "WR") {
              this.wrArray.push(t);
            } else if (t.playerPosition === "RB") {
              this.rbArray.push(t);
            } else if (t.playerPosition === "TE") {
              this.teArray.push(t);
            } else if (t.playerPosition === "K") {
              this.kArray.push(t);
            } else if (t.playerPosition === "DEF") {
              this.defArray.push(t);
            }
          });
          console.log("this", this);
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
