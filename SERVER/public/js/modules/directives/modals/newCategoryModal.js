angular.module('Directives')
    .directive('newCategoryModal', ['$filter', 'CategoryService', 'QuestionFactory', 'UserService', function ($filter, CategoryService, QuestionFactory, UserService) {
        return {
            restrict: 'E',
            templateUrl: 'templates/directives/modals/new-category-modal.html',
            transclude: true,
            replace: true,
            scope: false,
            link: function (scope, element, attrs, controllers) {

                debugger
                var model = scope.model;

                scope.resetCategoryModal = function () {
                    model.categoryName = null;

                }


                scope.global.showNewCategoryModal = function () {
                    debugger
                    scope.global.removeError();
                    scope.global.removeModalError();
                    scope.resetCategoryModal();
                    $(element[0]).modal('show');

                }


                scope.cancelAddCategory = function () {

                    scope.global.removeModalError();
                    scope.resetCategoryModal();
                    $(element[0]).modal('hide');
                }

                scope.addCategory = function () {


                    scope.global.removeModalError();


                    try {

                        CategoryService.newCategory(model.categoryName);

                        scope.resetCategoryModal();
                        $(element[0]).modal('hide');
                    }

                    catch (exception) {
                        console.log(exception);
                    }


                }

            }
        };
    }]);