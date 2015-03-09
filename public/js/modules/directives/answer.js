angular.module('Directives')
    .directive('answer', ['$filter', function ($filter) {
        return {
            restrict: 'E',
            templateUrl: 'answer.html',
            transclude: true,
            replace: true,
            scope: false,
            link: function (scope, element, attrs, controllers) {

                scope.dummy = function ()
				{
				}

            }
        };
    }]);