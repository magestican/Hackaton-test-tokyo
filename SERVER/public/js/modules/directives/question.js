angular.module('Directives')
    .directive('question', ['$filter', function ($filter) {
        return {
            restrict: 'E',
            templateUrl: 'templates/directives/question.html',
            transclude: true,
            replace: true,
            scope: false,
            link: function (scope, element, attrs, controllers) {

                scope.model = {};
                scope.model.question = scope.question;
            }
        };
    }]);