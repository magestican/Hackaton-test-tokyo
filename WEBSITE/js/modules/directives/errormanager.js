angular.module('Directives')
    .directive('errorManager', ['$filter', function ($filter) {
        return {
            restrict: 'E',
            template: 'error.html',
            transclude: true,
            replace: true,
            scope: false,
            link: function (scope, element, attrs, controllers) {

                scope.model.errorMessage = "";
                scope.model.showerror = false;

                scope.global.errorOcurred = function (Description) {
                    if (Description != undefined) {
                        scope.model.errorMessage = Description;
                        scope.model.showerror = true;
                    }

                    throw new EventException(Description);
                }

                scope.global.removeError = function () {
                    scope.model.showerror = false;
                    scope.model.errorMessage = "";

                }
            }
        };
    }]);
