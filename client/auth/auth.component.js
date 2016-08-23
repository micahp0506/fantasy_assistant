'use strict';


angular.
  module('auth').
  component('auth', {
    templateUrl: 'auth/auth.html',
    controller:
      function AuthController(draftService, authService) {
        console.log("this", this);
        console.log("draftService", draftService);

        draftService.auth().onAuthStateChanged(function(user) {
            if (user) {
                authService.setUser(user);
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
                } else {
                    draftService.database().ref('users/' + user.userId).set({
                        userName: this.username,
                        passWord: this.password
                    });
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
  }).
  service('authService', ['$rootScope', function($rootScope) {
        let userObj;

        return {
            setUser: function(user) {
                console.log("user", user);
                userObj = user;
            },

            getUser: function() {
                return userObj;
            }
        }

    }]);
