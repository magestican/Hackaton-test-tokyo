angular.module('Services')
    .factory('UserService', ['$rootScope', '$q', '$resource', function ($rootScope, $q, $resource) {

        var userService = function () {

            function user(Username, Picture, Token, Email) {
                this.username = Username;
                this.picture = Picture;
                this.token = Token;
                this.email = Email;
            }


            this.currentUser;
            var that = this;
            this.newUser = function (Username, Picture, Token, Email) {
                if (that.currentUser == null) {
                    return new user(Username, Picture, Token, Email);
                }
                else {
                    throw new RegExp("There can only be one user logged in, you are trying to log a second user that is wrong");
                }
            }
        }


        return userService;

    }])
