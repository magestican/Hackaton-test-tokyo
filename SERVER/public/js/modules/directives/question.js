angular.module('Directives')
    .directive('question', ['$filter', function ($filter) {
        return {
            restrict: 'E',
            templateUrl: 'templates/directives/question.html',
            transclude: true,
            replace: true,
            scope: {
                'model.questions': "="
            },
            link: function (scope, element, attrs, controllers) {


                if (attrs.$index != undefined) {

                    scope.model = {};
                    scope.model.question = scope.model.questions[attrs.$index];
                }

            }
        };
    }]);