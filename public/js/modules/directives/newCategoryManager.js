angular.module('Directives')
    .directive('newCategoryManager', ['$filter', 'QuestionFactory', function ($filter, QuestionFactory) {
        return {
            restrict: 'E',
            templateUrl: 'templates/directives/new-category-manager.html',
            transclude: true,
            replace: true,
            scope: false,
            link: function (scope, element, attrs, controllers) {

                var model = scope.model;

            }
        };
    }]);