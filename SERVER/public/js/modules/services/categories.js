angular.module('Services')
    .service('CategoryService', ['$rootScope', '$q', '$resource', 'UserService', function ($rootScope, $q, $resource, UserService) {

        function category(name) {
            this.name = name;
        }
        this.categories = ['Funny', 'Intellectual', 'Super smart'];
        var that = this;

        this.newCategory = function (name) {

            if (UserService.currentUser.isAdmin) {
                if (name != null && name != undefined)
                    that.categories.push(name);
                else {
                    $rootScope.global.errorInModalOcurred("The name of the category cannot be empty");
                    throw new RegExp("The name of the category cannot be empty");
                }
            }
            else {
                $rootScope.global.errorInModalOcurred("You are not an admin so you cannot add categories");
                throw new RegExp("You are not an admin so you cannot add categories");
            }
        }

    }])
