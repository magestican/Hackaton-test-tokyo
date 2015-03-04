angular.module('Directives')
    .directive('dummy', ['$filter', function ($filter) {
        return {
            restrict: 'E',
            template: '<div>dummy</div>',
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