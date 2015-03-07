angular.module('Directives')
    .directive('modalErrorManager', ['$filter', function ($filter) {
        return {
            restrict: 'E',
            templateUrl: 'templates/directives/modals/error-modal.html',
            transclude: true,
            replace: true,
            scope: false,
            link: function (scope, element, attrs, controllers) {

                scope.model.errorMessage = "";
                scope.model.showerror = false;

                scope.global.errorInModalOcurred = function (Description) {
                    if (Description != undefined) {
                        scope.model.errorModalMessage = Description;
                        scope.model.showErrorModal = true;
                    }

                    throw new RegExp(Description);
                }

                scope.global.removeModalError = function () {
                    scope.model.showErrorModal = false;
                    scope.model.errorModalMessage = "";

                }
            }
        };
    }]);
