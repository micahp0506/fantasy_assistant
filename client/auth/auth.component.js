'use strict';


angular.
  module('auth',[]).
  component('auth', {
    templateUrl: 'auth/auth.html',
    controller: [
      function AuthController($firebaseAuth) {
        console.log("this", this);
        let config = {
            apiKey: "AIzaSyAEGPNZWcqhfxT8O4v91wxm7TMq5iSuxZU",
            authDomain: "fantasy-draft-asst.firebaseapp.com",
            databaseURL: "https://fantasy-draft-asst.firebaseio.com",
            storageBucket: "fantasy-draft-asst.appspot.com",
        };
        firebase.initializeApp(config);
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
                    console.log("errorMessage", errorMessage);
                }
            });
        }
      }
    ]
  });
