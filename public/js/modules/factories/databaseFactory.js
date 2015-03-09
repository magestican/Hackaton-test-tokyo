angular.module('Factories')

    .factory('DatabaseFactory', ['$rootScope', '$q', '$resource', function ($rootScope, $q, $resource) {
        

        return {

            updateQuestions: function (Title, Body, Rating, Datetime, Categories) {

                var updateQuestions = $resource('/main/update_questions/:questions:token', {}, {
                    'updateQuestions': { method: 'POST' },
                });

                return updateQuestions;
            },

            updateCategories: function () {

                var updateCategories = $resource('/main/update_categories/:categories:token', {}, {
                    'updateCategories': { method: 'POST' },
                });

                return updateCategories;

            },
            getCategories: function () {

                var getCategories = $resource('/main/get_categories', {}, {
                    'getCategories': { method: 'GET' },
                });

                return getCategories;

            },
            getQuestions: function () {

                var getQuestion = $resource('/main/get_questions', {}, {
                    'getQuestions': { method: 'GET' },
                });

                return getQuestion;

            }


        };

    }])
