(function () {


    ////////////////////////////////////////////////////////////
    // App
    ////////////////////////////////////////////////////////////

    var App = angular.module('OdigoApp', ['ngRoute','Directives', 'Controllers', 'Factories', 'Filters', 'Services']);

    ////////////////////////////////////////////////////////////
    // CONFIG
    ////////////////////////////////////////////////////////////
    //inject name of controller inside every controller
    var global = {};
    App.config(['$routeProvider', '$provide', function ($routeProvider, $provide) {

        $routeProvider.when('/Home', {
            templateUrl: 'main.html',
            controller: 'MainController'
        });

        $provide.decorator('$controller', [
            '$delegate',
            function ($delegate) {
                return function (constructor, locals) {
                    if (typeof constructor == "string") {
                        locals.$scope.controllerName = constructor;
                        //this is so that every controller will have a model object
                        locals.$scope.model = {};
                        //shared global variable for inter connectivity
                        locals.$scope.global = global;
                    }
                    return $delegate(constructor, locals);
                }
            }]);
    }]);

    App.run(function ($rootScope) {
	    //if scope is not available
        $rootScope.global = global;
    });

})();
