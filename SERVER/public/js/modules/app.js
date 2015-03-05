
////////////////////////////////////////////////////////////
// App
////////////////////////////////////////////////////////////

var App = angular.module('odigoapp', ['ngRoute', 'Directives', 'Controllers', 'Factories', 'Filters']);

////////////////////////////////////////////////////////////
// CONFIG
////////////////////////////////////////////////////////////
//inject name of controller inside every controller
var global = {};


App.run(function ($rootScope) {
    //if scope is not available
    $rootScope.model = {};
    $rootScope.global = global;
});


App.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/', {
        controller: 'MainController'
    });
}]);