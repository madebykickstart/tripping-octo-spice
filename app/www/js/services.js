angular.module('whoisnext.services', [])
.service('GroupsService', ['$rootScope', '$filter', '$http', '$q', function ($rootScope, $filter, $http, $q) {
    console.log($q);
    var urlBase = 'http://private-2782f-whoisnext.apiary-mock.com/groups';

    this.getGroups = function(sync) {
        if (sync) {
            var deferred = $q.defer();
            $http.get(urlBase).
                success(function(data, status, headers, config) {
                    console.log(data);
                    deferred.resolve(data);
                }).
                error(function(data, status, headers, config) {
                    deferred.reject('error');
                });
            return deferred.promise;
        } else {
            /*$http.get(urlBase).
                success(function(data, status, headers, config) {
                    $rootScope.$broadcast('pages.update', data);
                }).
                error(function(data, status, headers, config) {
                    return null;
                });*/
        }
        return null;
    };
}]);
