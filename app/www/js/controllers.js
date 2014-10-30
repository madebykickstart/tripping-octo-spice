angular.module('whoisnext.controllers', [])

.controller('GroupsCtrl', function($scope, GroupsService) {
  //$scope.friends = Friends.all();
    $scope.groups = [];
    console.log(GroupsService);   
    // initial fetch
    GroupsService.getGroups(true).then(function (groups) {
        $scope.groups = groups;
    });
})

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
