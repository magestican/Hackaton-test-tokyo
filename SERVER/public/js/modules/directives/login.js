angular.module('Directives')
    .directive('login', ['$filter', 'LoginFactory', 'UserService', 'DatabaseFactory', function ($filter, LoginFactory, UserService, DatabaseFactory) {
        return {
            restrict: 'E',
            templateUrl: 'templates/directives/login.html',
            transclude: false,
            replace: true,
            scope: false,
            link: function (scope, element, attrs, controllers) {

                scope.dummy = function () {
                }


                scope.login = function () {

                    scope.global.removeError();
                    //login parameters
                    var myParams = {
                        'clientid': '28552151452-v86ec9nn8jm6r4de5sghds4bmq4n1ccb.apps.googleusercontent.com',
                        'cookiepolicy': 'single_host_origin',
                        'callback': 'loginCallback',
                        'approvalprompt': 'force',
                        'scope': 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.profile.emails.read'
                    };
                    gapi.auth.signIn(myParams);
                }

                window.loginCallback = function (result) {
                    if (result['status']['signed_in']) {

                        console.log("login success");

                        LoginFactory.login().login({ token: result.access_token }, function (data) {
                            console.log("login server result");

                            //if success get user data
                            if (data.result == "success") {


                                var request = gapi.client.plus.people.get(
                                {
                                    'userId': 'me'
                                });
                                request.execute(function (resp) {

                                    UserService.newUser(resp.displayName, resp.image.url, result.access_token, resp.emails[0].value)
                                    scope.$apply();
                                })
                            }
                        }, function (error) {
                            console.log("error ocurred");
                            console.log(error);

                        });


                    }
                }




            }
        };
    }]);