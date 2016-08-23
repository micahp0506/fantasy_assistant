'use strict';


angular.
  module('name').
  component('name', {
    templateUrl: 'name/name.html',
    bindings: {
      user: '<'
    },
    controller:
      function NameController(draftService, authService) {
        console.log("this", this);
        console.log("authService", authService);
        let user = authService.getUser();
        console.log("user", user);
        this.showDraft = false;
        this.showName = true;

        this.setName = function () {
          console.log("this", this.teamName);

          let name = {teamName: this.teamName};
          draftService.database().ref(user.uid + '/name').set({
            teamName: this.teamName
          });
          // if (this.team.length === 0) {
          //   this.team.push({teamName: this.teamName});
          // } else {
          //   this.team.map((t) => {
          //     if (t.teamName !== this.teamName) {
          //       t.teamName === this.teamName;
          //     }
          //   });
          // };
          this.showDraft = true;
          this.showName = false;
        }
      }
  });
