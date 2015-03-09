angular.module('Services')
    .service('CategoryService', ['$rootScope', '$q', '$resource', 'UserService', 'DatabaseFactory', function ($rootScope, $q, $resource, UserService, DatabaseFactory) {

        function category(name) {
            this.name = name;
        }
        this.categories = ['Funny', 'Intellectual', 'Super smart'];
        var that = this;

        this.newCategory = function (name) {

            if (UserService.currentUser.isAdmin) {
                if (name != null && name != undefined) {


                    //i used this system just to save time and not use a database in the server since i dont know much about ruby or rails..in production case I would use only one method of course to save on server calls
                    var qq = new category(name);

                    DatabaseFactory.getCategories().getCategories({},
                    function (data) {

                        that.categories = JSON.parse((data.result != "" ? data.result : []));
                        that.categories.push(qq.name);

                        DatabaseFactory.updateCategories().updateCategories({
                            categories: JSON.stringify(that.categories),
                            token: UserService.currentUser.token
                        },
                        function (data2) {

                            that.categories = JSON.parse(data2.result);
                            console.log("database updated");
                        },
                        function (error2) {
                            console.log(error2);
                        })
                    },
                    function (error) {
                        console.log(error);
                    })

                    that.categories.push(name);
                }
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
