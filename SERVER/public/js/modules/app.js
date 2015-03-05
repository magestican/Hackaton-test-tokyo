
////////////////////////////////////////////////////////////
// App
////////////////////////////////////////////////////////////

var App = angular.module('odigoapp', ['ngRoute','ngResource', 'Directives', 'Controllers', 'Factories', 'Filters']);

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


App.config(['$routeProvider', '$httpProvider', function ($routeProvider, provider) {
    

    //ruby stuff
    provider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');


    //no need to use routes for this project
    /*
    $routeProvider.when('/', {
        controller: 'MainController'
    });*/
}]);