angular.module('Controllers')
    .controller('DummyController', ['$scope', '$filter',
    function ($scope, $filter) {

        console.log($scope.global);
        console.log("asd");
        $scope.something = "asd";

    }]);