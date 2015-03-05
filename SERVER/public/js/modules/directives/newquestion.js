angular.module('Directives')
    .directive('newQuestion', ['$filter', 'QuestionFactory', function ($filter, QuestionFactory) {
        return {
            restrict: 'E',
            templateUrl: 'templates/directives/new-question.html',
            transclude: true,
            replace: true,
            scope: false,
            link: function (scope, element, attrs, controllers) {

                var model = scope.model;




            }
        };
    }]);