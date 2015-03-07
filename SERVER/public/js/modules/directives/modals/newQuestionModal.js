angular.module('Directives')
    .directive('newQuestionModal', ['$filter', 'CategoryService', 'QuestionFactory', 'UserService', function ($filter, CategoryService, QuestionFactory, UserService) {
        return {
            restrict: 'E',
            templateUrl: 'templates/directives/modals/new-question-modal.html',
            transclude: false,
            replace: true,
            scope: false,
            link: function (scope, element, attrs, controllers) {

                var model = scope.model;

                $(element[0]).find("#categorySelector").select2({
                    tags: true,
                    data: CategoryService.categories
                })


                scope.resetQuestionModal = function () {
                    model.title = null;
                    model.body = null;
                    model.categories = null;

                    if ($('ul.select2-selection__rendered') != undefined) {

                        $('ul.select2-selection__rendered').find('li.select2-selection__choice').each(function (index, object) {

                            $(object).remove();

                        })
                    }

                }


                scope.global.showNewQuestionModal = function () {

                    if (UserService.currentUser == null) {
                        //the user cant post if he or she is not logged
                        scope.global.errorOcurred("You must login to ask a new question");
                    }
                    else {
                        $(element[0]).find("#categorySelector").select2("destroy");

                        scope.global.removeError();
                        scope.global.removeModalError();
                        scope.resetQuestionModal();
                        $(element[0]).modal('show');

                        $(element[0]).find("#categorySelector").select2({
                            tags: true,
                            data: CategoryService.categories
                        })
                    }

                  
                }


                scope.cancelAddQuestion = function () {

                    scope.global.removeModalError();
                    scope.resetQuestionModal();
                    $(element[0]).modal('hide');
                }

                scope.addQuestion = function () {


                    scope.global.removeModalError();


                    $('ul.select2-selection__rendered').find('li.select2-selection__choice').each(function (index, object) {
                        model.categories = $(object).text;
                    })

                    try {

                        var question = QuestionFactory.newQuestion(model.title, model.body, UserService.currentUser.username, 0, new Date().toDateString(), model.categories, UserService.currentUser.picture);
                        scope.global.questions.push(question);


                        scope.resetQuestionModal();
                        $(element[0]).modal('hide');
                    }

                    catch (exception) {
                        console.log(exception);
                    }


                }

            }
        };
    }]);