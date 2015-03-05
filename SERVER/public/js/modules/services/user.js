angular.module('Services')
    .service('UserService', ['$rootScope', '$q', '$resource', function ($rootScope, $q, $resource) {

        function user(Username, Picture, Token, Email) {
            this.username = Username;
            this.picture = Picture;
            this.token = Token;
            this.email = Email;
            debugger
            this.isAdmin = window.admin == Email;
        }


        this.currentUser = null;
        var that = this;
        this.newUser = function (Username, Picture, Token, Email) {
            if (that.currentUser == null) {
                var newuser = new user(Username, Picture, Token, Email);
                that.currentUser = newuser;

                return newuser;
            }
            else {
                throw new RegExp("There can only be one user logged in, you are trying to log a second user that is wrong");
            }
        }

    }])
