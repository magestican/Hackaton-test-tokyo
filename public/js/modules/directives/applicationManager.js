angular.module('Directives')
    .directive('applicationManager', ['$filter', function ($filter) {
        return {
            restrict: 'E',
            templateUrl: 'templates/directives/application-manager.html',
            transclude: true,
            replace: true,
            scope: false,
            link: function (scope, element, attrs, controllers) {
                //this is a dummy directive

            }
        };
    }]);