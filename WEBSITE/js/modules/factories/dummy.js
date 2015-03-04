angular.module('Factories')

    .factory('dummy', ['$rootScope', '$q', function($rootScope) {
        return {
		    dummy: function () {
			//dummy
			}
        };
    }])
