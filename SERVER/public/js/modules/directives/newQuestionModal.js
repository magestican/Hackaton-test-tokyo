angular.module('Directives')
    .directive('newQuestionModal', ['$filter', 'CategoryService', 'QuestionFactory', 'UserService', function ($filter, CategoryService, QuestionFactory, UserService) {
        return {
            restrict: 'E',
            templateUrl: 'templates/directives/new-question-modal.html',
            transclude: true,
            replace: true,
            scope: false,
            link: function (scope, element, attrs, controllers) {

                //a lot of ugly jquery stuff
                scope.global.showNewQuestionModal = function () {

                    if (UserService.currentUser == null) {
                        //the user cant post if he or she is not logged
                        scope.global.errorOcurred("You must login to ask a new question");
                    }
                    else {
                        scope.global.removeError();
                        $(element[0]).modal('show');
                    }
                }

                $(element[0]).find("#categorySelector").select2({
                    tags: CategoryService.categories
                })


                scope.addQuestion = function () {

                    $('ul.select2-selection__rendered').find('li.select2-selection__choice').each(function (index, object) {


                        scope.model.categories = $(object).text;

                    })


                    QuestionFactory.newQuestion(scope.model.title, scope.model.body, UserService.currentUser.username, 0, new Date().toDateString(), scope.model.categories, UserService.currentUser.picture);

                    scope.model.title = null;
                    scope.model.body = null;
                    scope.model.categories = null;
                }

            }
        };
    }]);