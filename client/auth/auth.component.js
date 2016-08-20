'use strict';


angular.
  module('auth').
  component('auth', {
    templateUrl: 'auth/auth.html',
    controller:
      function AuthController(draftService) {
        console.log("this", this);
        console.log("draftService", draftService);
        // let rootRef = firebase.database().ref();
        draftService.auth().onAuthStateChanged(function(user) {
            if (user) {
                console.log("user", user);
            } else {
                console.log("poop");
            }
        });
        this.newUser = function() {
            console.log("in");

            draftService.auth().createUserWithEmailAndPassword(this.username, this.password).catch(function(error) {
                if (error) {
                    alert(error.messgae);
                    console.log("errorMessage", error.message);
                    window.location = "#/";
                }
            });
        }
        this.loginUser = function() {
            draftService.auth().signInWithEmailAndPassword(this.username, this.password).catch(function(error) {
                if (error) {
                    alert(error.messgae);
                    console.log("errorMessage", error.message);
                    window.location = "#/";
                }
            });
        }
      }
  });
