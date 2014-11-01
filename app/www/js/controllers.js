angular.module('whoisnext.controllers', [])

.controller('GroupsCtrl', function($scope, $ionicModal, GroupsService) {
  //$scope.friends = Friends.all();
    $scope.groups = [];
    
    $scope.loggedIn = false;
    
    // initial fetch
    //GroupsService.getGroups(true).then(function (groups) {
        //$scope.groups = groups;
    //});
    $scope.groups = GroupsService.getGroups(true);
    
    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function() {
        $scope.modal.hide();
    };
    // Open the login modal
    $scope.login = function() {
        $scope.modal.show();
    };
    $scope.fbLogin = function() {
        openFB.login(
            function(response) {
                if (response.status === 'connected') {
                    $scope.loggedIn = true;
                    $scope.closeLogin();
                } else {
                    $scope.loggedIn = false;
                }
            },
            {scope: 'email'} //,publish_actions'}
        );
    }
    
});

/*
angular.module('whoisnext.controllers', [])
.controller('GroupsCtrl', ['$scope', 'GroupsService'], function($scope, $groupsService) {
    console.log("TEST");
    $scope.groups = [];
        
    // initial fetch
    $groupsService.getGroups().then(function (groups) {
        $scope.groups = groups;
    }); 
});

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});*/
