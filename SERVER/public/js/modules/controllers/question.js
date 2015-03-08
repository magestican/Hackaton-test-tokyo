angular.module('Controllers')
    .controller('QuestionController', ['$scope', '$filter', 'QuestionFactory', 'DatabaseFactory',
    function ($scope, $filter, QuestionFactory, DatabaseFactory) {



        //initialize with server data like mobile apps do..
        DatabaseFactory.getQuestions().getQuestions({},
            function (data) {
                $scope.global.questions = JSON.parse(data.result);
            },
            function (error) {
                console.log(error);
            })




        $scope.global.deleteQuestion = function (id) {
            QuestionFactory.deleteQuestion(id);
        }


    }]);