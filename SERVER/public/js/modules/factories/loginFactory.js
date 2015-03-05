angular.module('Factories')
    .factory('LoginFactory', ['$rootScope', '$q', '$resource', function ($rootScope, $q, $resource) {

        return {

            login: function () {

                var login = $resource('/main/login/:token', {}, {
                    'login': { method: 'POST' },
                });

                return login;
            }


        };
    }])
