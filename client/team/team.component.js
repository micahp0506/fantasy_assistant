'use strict';


angular.
  module('team').
  component('team', {
    templateUrl: 'team/team.html',
    bindings: {
        name: '<'
    },
    controller: [
      function TeamController() {
        // let config = {
        //     apiKey: "AIzaSyAEGPNZWcqhfxT8O4v91wxm7TMq5iSuxZU",
        //     authDomain: "fantasy-draft-asst.firebaseapp.com",
        //     databaseURL: "https://fantasy-draft-asst.firebaseio.com",
        //     storageBucket: "fantasy-draft-asst.appspot.com",
        // };
        // firebase.initializeApp(config);
        this.addPlayer = function () {
          console.log("this", this);
        }

        this.logOut = function () {
          console.log("this", this);
          firebase.auth().signOut().then(function() {
            window.location = "#/";
            console.log("Logged Out")
          }, function(error) {
            console.log("error", error);
          });
        }
      }
    ]
  });
