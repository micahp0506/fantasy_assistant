'use strict';


angular.
  module('draft').
  component('draft', {
    templateUrl: 'draft/draft.html',
    bindings: {
        team: '<'
    },
    controller:
      function DraftController(draftService) {
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
          let player = {
            playerId: new Date() * -1,
            round: this.round,
            playerName: this.playerName,
            playerteamName: this.playerTeamName,
            playerPosition: this.playerPosition,
            byeWeek: this.byeWeek
          }

          draftService.database().ref('team/players').push({
            playerId: new Date() * -1,
            round: this.round,
            playerName: this.playerName,
            playerteamName: this.playerTeamName,
            playerPosition: this.playerPosition,
            byeWeek: this.byeWeek
          });
          // if (this.teamArray.length === 0) {
          //   this.teamArray.push({teamName: this.team});
          // } else {
          //   this.teamArray.map((t) => {
          //     if (t.teamName !== this.team) {
          //       t.teamName === this.team;
          //     }
          //   });
          // };

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
