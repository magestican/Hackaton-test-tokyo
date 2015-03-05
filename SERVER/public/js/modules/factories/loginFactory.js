angular.module('Factories')

    .factory('LoginFactory', ['$rootScope', '$q', '$resource', function ($rootScope, $q, $resource) {


        var LoginService = function () {

            var LoginService = $resource('/main/login/:token', {}, {
                'login': { method: 'POST' },
            });

            return LoginService;
        }
        return LoginService;

    }])
