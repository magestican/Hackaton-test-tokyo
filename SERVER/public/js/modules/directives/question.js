angular.module('Directives')
    .directive('question', ['$filter', 'QuestionFactory', '$compile', '$http', 'UserService', function ($filter, QuestionFactory, $compile, $http, UserService) {
        return {
            restrict: 'E',
            transclude: true,
            replace: false,
            scope: true,
            link: function (scope, element, attrs, controllers) {

                var tpl = 'templates/directives/question.html';

                debugger
                scope.model = {};
                scope.model.UserService = UserService;
                scope.model.question = scope.question;
                debugger

                $http.get(tpl).then(function (response) {
                    element.html($compile(response.data)(scope));
                });

            }
        };
    }]);