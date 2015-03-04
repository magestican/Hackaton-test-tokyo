angular.module('odigoapp')
    .controller('DummyController', ['$scope', '$filter',
    function ($scope, $filter) {

        console.log($scope.global);
        console.log("asd");
        $scope.something = "asd";

    }]);