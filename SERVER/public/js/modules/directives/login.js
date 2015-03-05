angular.module('Directives')
    .directive('login', ['$filter', 'LoginFactory', function ($filter, LoginFactory) {
        return {
            restrict: 'E',
            templateUrl: 'templates/directives/login.html',
            transclude: true,
            replace: true,
            scope: false,
            link: function (scope, element, attrs, controllers) {

                scope.dummy = function () {
                }

                scope.login = function () {
                    var myParams = {
                        'clientid': '28552151452-v86ec9nn8jm6r4de5sghds4bmq4n1ccb.apps.googleusercontent.com', //You need to set client id
                        'cookiepolicy': 'single_host_origin',
                        'callback': 'loginCallback', //callback function
                        'approvalprompt': 'force',
                        'scope': 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.profile.emails.read'
                    };
                    gapi.auth.signIn(myParams);
                }
                var reference = scope.global.user;
                window.loginCallback = function (result) {
                    if (result['status']['signed_in']) {

                        console.log("login success");

                        //if success get user data
                        debugger

                        var login = new LoginFactory();
                        login.login({ token: result.access_token }, function (data) {
                            console.log("login server result");
                            console.log(data);
                        }, function (error) {
                            console.log("error ocurred");
                            console.log(error);

                        });

                        //var request = gapi.client.plus.people.get(
                        //{
                        //    'userId': 'me'
                        //});
                        //request.execute(function (resp) {
                        //    var email = '';
                        //    if (resp['emails']) {
                        //        for (i = 0; i < resp['emails'].length; i++) {
                        //            if (resp['emails'][i]['type'] == 'account') {
                        //                email = resp['emails'][i]['value'];
                        //            }
                        //        }
                        //    }

                        //    var str = "Name:" + resp['displayName'] + "<br>";
                        //    str += "Image:" + resp['image']['url'] + "<br>";
                        //    str += "<img src='" + resp['image']['url'] + "' /><br>";

                        //    str += "URL:" + resp['url'] + "<br>";
                        //    str += "Email:" + email + "<br>";
                        //    document.getElementById("profile").innerHTML = str;
                        //});

                    }
                }




            }
        };
    }]);