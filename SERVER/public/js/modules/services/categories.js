angular.module('Services')
    .service('CategoryService', ['$rootScope', '$q', '$resource', 'UserService', function ($rootScope, $q, $resource, UserService) {

        function category(name) {

        }
        this.categories = ['Funny', 'Intellectual', 'Super smart'];
        var that = this;

        this.newCategory = function (name) {

            if (UserService.currentUser.isAdmin) {
                that.categories.push(new category(name));
            }
            else {
                scope.global.errorOcurred("You are not an admin so you cannot add categories");
                throw new RegExp("You are not an admin so you cannot add categories");
            }
        }

    }])
