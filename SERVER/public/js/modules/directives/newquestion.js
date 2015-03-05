angular.module('Directives')
    .directive('newQuestion', ['$filter', 'QuestionFactory', function ($filter, QuestionFactory) {
        return {
            restrict: 'E',
            templateUrl: 'templates/directives/new-question.html',
            transclude: true,
            replace: true,
            scope: false,
            link: function (scope, element, attrs, controllers) {

                var model = scope.model;

                function question(Title, Body, Username, Rating, Datetime, Categories, UserPicture) {

                    this.title = Title || scope.global.errorOcurred("The title cannot be empty");
                    this.body = Body || scope.global.errorOcurred("The body canot be empty");
                    this.username = Username;
                    this.rating = Rating || 0;
                    this.datetime = Datetime || new Date().toDateString();
                    this.categories = Categories || scope.global.errorOcurred("You must input at least one category");
                    this.userPicture = UserPicture;
                }


                scope.addQuestion = function () {

                    try {
                        var result = new question(model.title,
                                                    model.body,
                                                    model.username,
                                                    model.rating,
                                                    model.datetime,
                                                    model.categories,
                                                    model.userPicture);

                        QuestionFactory.addQuestion(result);
                    }
                    catch (exception) {
                        console.log("an exception ocurred");
                        console.log(exception);
                    }
                }

                scope.addDummyQuestion = function () {

                    try {
                        var result = new question("this is title", "this is body", "magestico", 5, new Date().toDateString(), ["category1", "category2"]);
                        scope.global.questions.push(result);

                    }
                    catch (exception) {
                        console.log("an exception ocurred");
                        console.log(exception);
                    }
                }



                scope.addDummyQuestion();
            }
        };
    }]);