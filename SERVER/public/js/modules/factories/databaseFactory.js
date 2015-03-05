angular.module('Factories')

    .factory('DatabaseFactory', ['$rootScope', '$q', '$resource', function ($rootScope, $q, $resource) {


        return {

            update: function (Title, Body, Rating, Datetime, Categories) {

                var update = $resource('/main/update_database/:token', {}, {
                    'getDatabase': { method: 'POST' },
                });

                return update;
            },

            get: function () {

                var get = $resource('/main/get_database', {}, {
                    'getDatabase': { method: 'GET' },
                });

                return get;

            }


        };

    }])
