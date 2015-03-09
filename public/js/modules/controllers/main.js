angular.module('Controllers')
    .controller('MainController', ['$scope', '$filter', 'UserService',
    function ($scope, $filter, UserService) {

        $scope.global.questions = [];
        $scope.model.userService = UserService;

    }]);