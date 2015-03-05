angular.module('Factories')

    .factory('LoginFactory', ['$rootScope', '$q', function ($rootScope, $q) {
        return {
            addQuestion: function (question) {

                var deferred = $q.defer();

                $http.get('/api/v1/movies/' + movie).success(function (data) {
                    deferred.resolve(result);
                }).error(function (error) {

                    deferred.reject(event);

                })

                return deferred.promise;

            }



        };
    }])
