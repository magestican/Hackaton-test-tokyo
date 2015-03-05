angular.module('Directives')
    .directive('newQuestion', ['$filter', '$questionFactory', function ($filter, $questionFactory) {
        return {
            restrict: 'E',
            template: 'newQuestion.html',
            transclude: true,
            replace: true,
            scope: false,
            link: function (scope, element, attrs, controllers) {

                function question(Title, Body, Username, Rating, Datetime, Categories, UserPicture) {

                    this.title = Title || $scope.global.errorOcurred("The title cannot be empty");
                    this.body = Body || $scope.global.errorOcurred("The body canot be empty");
                    this.username = Username;
                    this.rating = Rating || 0;
                    this.datetime = Datetime || new Date().toDateString();
                    this.categories = Categories || $scope.global.errorOcurred("You must input at least one category");
                    this.userPicture = UserPicture;
                }


                $scope.addQuestion = function () {

                    try {
                        var result = new question();

                        $questionFactory.addQuestion(result);
                    }
                    catch (exception) {
                        console.log("an exception ocurred");
                        console.log(exception);
                    }
                }

            }
        };
    }]);