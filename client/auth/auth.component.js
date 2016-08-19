'use strict';


angular.
  module('auth',[]).
  component('auth', {
    templateUrl: 'auth/auth.html',
    controller: [
      function AuthController($firebaseAuth, firebaseInstance) {
        console.log("this", this);
        let rootRef = firebase.database().ref();
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                console.log("user", user);
            } else {
                console.log("poop");
            }
        });
        this.newUser = function() {
            console.log("in");

            firebase.auth().createUserWithEmailAndPassword(this.username, this.password).catch(function(error) {
                if (error) {
                    alert(error.messgae);
                    console.log("errorMessage", errorMessage);
                }
            });
        }
        this.loginUser = function() {
            firebase.auth().signInWithEmailAndPassword(this.username, this.password).catch(function(error) {
                if (error) {
                    alert(error.messgae);
                    console.log("errorMessage", error.message);
                }
            });
        }
      }
    ]
  });
