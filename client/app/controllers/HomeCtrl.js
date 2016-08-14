'use strict';

app.controller("HomeCtrl", ["$scope",
    function($scope) {
        console.log("this", this);
        console.log("$scope", $scope);
    // // Firebase reference
    // var ref = new Firebase("https://brilliant-heat-5523.firebaseio.com/songs");
    // // Showing songs from Firebase
    // $scope.songs = $firebaseArray(ref);

    //   $scope.deleteSong = function(song){
    //     console.log("delete click");
    //     $scope.songs.$remove(song);

    //   }

}]);
