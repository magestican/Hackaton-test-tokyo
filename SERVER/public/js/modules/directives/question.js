angular.module('Directives')
    .directive('question', ['$filter', 'QuestionFactory', '$compile', '$http', 'UserService', function ($filter, QuestionFactory, $compile, $http, UserService) {
        return {
            restrict: 'E',
            transclude: true,
            replace: false,
            scope: true,
            link: function (scope, element, attrs, controllers) {

                var tpl = 'templates/directives/question.html';

                
                scope.model = {};
                scope.model.UserService = UserService;
                scope.model.question = scope.question;



                $http.get(tpl).then(function (response) {
                    return element.html($compile(response.data)(scope));
                });

            }
        };
    }]);