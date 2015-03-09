angular.module('Controllers')
    .controller('CategoryController', ['$scope', '$filter', 'CategoryService', 'DatabaseFactory',
    function ($scope, $filter, CategoryService, DatabaseFactory) {


        DatabaseFactory.getCategories().getCategories({},
           function (data) {
               CategoryService.categories = JSON.parse(data.result);
           },
           function (error) {
               console.log(error);
           })

    }]);