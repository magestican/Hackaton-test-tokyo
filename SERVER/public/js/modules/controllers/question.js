angular.module('Controllers')
    .controller('QuestionController', ['$scope', '$filter', 'QuestionFactory',
    function ($scope, $filter, QuestionFactory) {


        $scope.addQuestion = function () {

            try {
                var result = new QuestionFactory.newQuestion(model.title,
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

        $scope.addDummyQuestion = function () {
            try {
                var result = new QuestionFactory.newQuestion("How do I code?", "Hello everyone I wanted to know how to code..thanks", "magestico", 5, new Date().toDateString(), ["category1", "category2"]);
                $scope.global.questions.push(result);

            }
            catch (exception) {
                console.log("an exception ocurred");
                console.log(exception);
            }
        }



        $scope.addDummyQuestion();

    }]);