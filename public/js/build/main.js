(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

////////////////////////////////////////////////////////////
// App
////////////////////////////////////////////////////////////

var App = angular.module('odigoapp', ['ngRoute', 'ngResource', 'Directives', 'Controllers', 'Factories', 'Filters', 'Services']);

////////////////////////////////////////////////////////////
// CONFIG
////////////////////////////////////////////////////////////
//inject name of controller inside every controller
var global = {};


App.run(function ($rootScope) {
    //if scope is not available
    $rootScope.model = {};
    $rootScope.global = global;
});


App.config(['$routeProvider', '$httpProvider', function ($routeProvider, provider) {


    //ruby stuff
    provider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');


    //no need to use routes for this project
    /*
    $routeProvider.when('/', {
        controller: 'MainController'
    });*/
}]);
},{}],2:[function(require,module,exports){
angular.module('Controllers', []);

require('./controllers/main.js');
require('./controllers/question.js');
require('./controllers/category.js');
},{"./controllers/category.js":3,"./controllers/main.js":4,"./controllers/question.js":5}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
angular.module('Controllers')
    .controller('MainController', ['$scope', '$filter', 'UserService',
    function ($scope, $filter, UserService) {

        $scope.global.questions = [];
        $scope.model.userService = UserService;

    }]);
},{}],5:[function(require,module,exports){
angular.module('Controllers')
    .controller('QuestionController', ['$scope', '$filter', 'QuestionFactory', 'DatabaseFactory',
    function ($scope, $filter, QuestionFactory, DatabaseFactory) {



        //initialize with server data like mobile apps do..
        DatabaseFactory.getQuestions().getQuestions({},
            function (data) {
                $scope.global.questions = JSON.parse(data.result);
            },
            function (error) {
                console.log(error);
            })




        $scope.global.deleteQuestion = function (id) {
            QuestionFactory.deleteQuestion(id);
        }

        $scope.global.likeQuestion = function (id) {
            QuestionFactory.likeQuestion(id);
        }


    }]);
},{}],6:[function(require,module,exports){
angular.module('Directives', []);

require('./directives/answer.js');
require('./directives/errorManager.js');
require('./directives/newQuestionManager.js');
require('./directives/newCategoryManager.js');
require('./directives/question.js');
require('./directives/applicationManager.js');
require('./directives/login.js');
require('./directives/modals/newQuestionModal.js');
require('./directives/modals/modalErrorManager.js');
require('./directives/modals/newCategoryModal.js');

},{"./directives/answer.js":7,"./directives/applicationManager.js":8,"./directives/errorManager.js":9,"./directives/login.js":10,"./directives/modals/modalErrorManager.js":11,"./directives/modals/newCategoryModal.js":12,"./directives/modals/newQuestionModal.js":13,"./directives/newCategoryManager.js":14,"./directives/newQuestionManager.js":15,"./directives/question.js":16}],7:[function(require,module,exports){
angular.module('Directives')
    .directive('answer', ['$filter', function ($filter) {
        return {
            restrict: 'E',
            templateUrl: 'answer.html',
            transclude: true,
            replace: true,
            scope: false,
            link: function (scope, element, attrs, controllers) {

                scope.dummy = function ()
				{
				}

            }
        };
    }]);
},{}],8:[function(require,module,exports){
angular.module('Directives')
    .directive('applicationManager', ['$filter', function ($filter) {
        return {
            restrict: 'E',
            templateUrl: 'templates/directives/application-manager.html',
            transclude: true,
            replace: true,
            scope: false,
            link: function (scope, element, attrs, controllers) {
                //this is a dummy directive

            }
        };
    }]);
},{}],9:[function(require,module,exports){
angular.module('Directives')
    .directive('errorManager', ['$filter', function ($filter) {
        return {
            restrict: 'E',
            templateUrl: 'templates/directives/error.html',
            transclude: true,
            replace: true,
            scope: false,
            link: function (scope, element, attrs, controllers) {

                scope.model.errorMessage = "";
                scope.model.showerror = false;

                scope.global.errorOcurred = function (Description) {
                    if (Description != undefined) {
                        scope.model.errorMessage = Description;
                        scope.model.showerror = true;
                    }

                    throw new RegExp(Description);
                }

                scope.global.removeError = function () {
                    scope.model.showerror = false;
                    scope.model.errorMessage = "";

                }
            }
        };
    }]);

},{}],10:[function(require,module,exports){
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
},{}],11:[function(require,module,exports){
angular.module('Directives')
    .directive('modalErrorManager', ['$filter', function ($filter) {
        return {
            restrict: 'E',
            templateUrl: 'templates/directives/modals/error-modal.html',
            transclude: true,
            replace: true,
            scope: false,
            link: function (scope, element, attrs, controllers) {

                scope.model.errorMessage = "";
                scope.model.showerror = false;

                scope.global.errorInModalOcurred = function (Description) {
                    if (Description != undefined) {
                        scope.model.errorModalMessage = Description;
                        scope.model.showErrorModal = true;
                    }

                    throw new RegExp(Description);
                }

                scope.global.removeModalError = function () {
                    scope.model.showErrorModal = false;
                    scope.model.errorModalMessage = "";

                }
            }
        };
    }]);

},{}],12:[function(require,module,exports){
angular.module('Directives')
    .directive('newCategoryModal', ['$filter', 'CategoryService', 'QuestionFactory', 'UserService', function ($filter, CategoryService, QuestionFactory, UserService) {
        return {
            restrict: 'E',
            templateUrl: 'templates/directives/modals/new-category-modal.html',
            transclude: true,
            replace: true,
            scope: false,
            link: function (scope, element, attrs, controllers) {

                debugger
                var model = scope.model;

                scope.resetCategoryModal = function () {
                    model.categoryName = null;

                }


                scope.global.showNewCategoryModal = function () {
                    debugger
                    scope.global.removeError();
                    scope.global.removeModalError();
                    scope.resetCategoryModal();
                    $(element[0]).modal('show');

                }


                scope.cancelAddCategory = function () {

                    scope.global.removeModalError();
                    scope.resetCategoryModal();
                    $(element[0]).modal('hide');
                }

                scope.addCategory = function () {


                    scope.global.removeModalError();


                    try {

                        CategoryService.newCategory(model.categoryName);

                        scope.resetCategoryModal();
                        $(element[0]).modal('hide');
                    }

                    catch (exception) {
                        console.log(exception);
                    }


                }

            }
        };
    }]);
},{}],13:[function(require,module,exports){
angular.module('Directives')
    .directive('newQuestionModal', ['$filter', 'CategoryService', 'QuestionFactory', 'UserService', function ($filter, CategoryService, QuestionFactory, UserService) {
        return {
            restrict: 'E',
            templateUrl: 'templates/directives/modals/new-question-modal.html',
            transclude: false,
            replace: true,
            scope: false,
            link: function (scope, element, attrs, controllers) {

                var model = scope.model;

                $(element[0]).find("#categorySelector").select2({
                    tags: true,
                    data: CategoryService.categories
                })


                scope.resetQuestionModal = function () {
                    model.title = null;
                    model.body = null;
                    model.categories = null;

                    if ($('ul.select2-selection__rendered') != undefined) {

                        $('ul.select2-selection__rendered').find('li.select2-selection__choice').each(function (index, object) {

                            $(object).remove();

                        })
                    }

                }


                scope.global.showNewQuestionModal = function () {

                    if (UserService.currentUser == null) {
                        //the user cant post if he or she is not logged
                        scope.global.errorOcurred("You must login to ask a new question");
                    }
                    else {
                        $(element[0]).find("#categorySelector").select2("destroy");

                        scope.global.removeError();
                        scope.global.removeModalError();
                        scope.resetQuestionModal();
                        $(element[0]).modal('show');

                        $(element[0]).find("#categorySelector").select2({
                            tags: true,
                            data: CategoryService.categories
                        })
                    }


                }


                scope.cancelAddQuestion = function () {

                    scope.global.removeModalError();
                    scope.resetQuestionModal();
                    $(element[0]).modal('hide');
                }

                scope.addQuestion = function () {


                    scope.global.removeModalError();

                    model.categories = [];
                    $('ul.select2-selection__rendered').find('li.select2-selection__choice').each(function (index, object) {
                        model.categories.push($(object).text);
                    })

                    try {

                        QuestionFactory.newQuestion(model.title, model.body, UserService.currentUser.username, 0, new Date().toDateString(), model.categories, UserService.currentUser.picture);



                        scope.resetQuestionModal();
                        $(element[0]).modal('hide');
                    }

                    catch (exception) {
                        console.log(exception);
                    }


                }

            }
        };
    }]);
},{}],14:[function(require,module,exports){
angular.module('Directives')
    .directive('newCategoryManager', ['$filter', 'QuestionFactory', function ($filter, QuestionFactory) {
        return {
            restrict: 'E',
            templateUrl: 'templates/directives/new-category-manager.html',
            transclude: true,
            replace: true,
            scope: false,
            link: function (scope, element, attrs, controllers) {

                var model = scope.model;

            }
        };
    }]);
},{}],15:[function(require,module,exports){
angular.module('Directives')
    .directive('newQuestionManager', ['$filter', 'QuestionFactory', function ($filter, QuestionFactory) {
        return {
            restrict: 'E',
            templateUrl: 'templates/directives/new-question-manager.html',
            transclude: true,
            replace: true,
            scope: false,
            link: function (scope, element, attrs, controllers) {

                var model = scope.model;

            }
        };
    }]);
},{}],16:[function(require,module,exports){
angular.module('Directives')
    .directive('question', ['$filter', 'QuestionFactory', '$compile', '$http', 'UserService', function ($filter, QuestionFactory, $compile, $http, UserService) {
        return {
            restrict: 'E',
            transclude: true,
            replace: false,
            scope: true,
            link: function (scope, element, attrs, controllers) {

                var tpl = 'templates/directives/question.html';

                
                scope.model = {};
                scope.model.UserService = UserService;
                scope.model.question = scope.question;



                $http.get(tpl).then(function (response) {
                    return element.html($compile(response.data)(scope));
                });

            }
        };
    }]);
},{}],17:[function(require,module,exports){
angular.module('Factories', []);

require('./factories/questionFactory.js');
require('./factories/loginFactory.js');
require('./factories/databaseFactory.js');

},{"./factories/databaseFactory.js":18,"./factories/loginFactory.js":19,"./factories/questionFactory.js":20}],18:[function(require,module,exports){
angular.module('Factories')

    .factory('DatabaseFactory', ['$rootScope', '$q', '$resource', function ($rootScope, $q, $resource) {
        

        return {

            updateQuestions: function (Title, Body, Rating, Datetime, Categories) {

                var updateQuestions = $resource('/main/update_questions/:questions:token', {}, {
                    'updateQuestions': { method: 'POST' },
                });

                return updateQuestions;
            },

            updateCategories: function () {

                var updateCategories = $resource('/main/update_categories/:categories:token', {}, {
                    'updateCategories': { method: 'POST' },
                });

                return updateCategories;

            },
            getCategories: function () {

                var getCategories = $resource('/main/get_categories', {}, {
                    'getCategories': { method: 'GET' },
                });

                return getCategories;

            },
            getQuestions: function () {

                var getQuestion = $resource('/main/get_questions', {}, {
                    'getQuestions': { method: 'GET' },
                });

                return getQuestion;

            }


        };

    }])

},{}],19:[function(require,module,exports){
angular.module('Factories')
    .factory('LoginFactory', ['$rootScope', '$q', '$resource', function ($rootScope, $q, $resource) {

        return {

            login: function () {

                var login = $resource('/main/login/:token', {}, {
                    'login': { method: 'POST' },
                });

                return login;
            }


        };
    }])

},{}],20:[function(require,module,exports){
angular.module('Factories')

    .factory('QuestionFactory', ['$rootScope', '$q', 'DatabaseFactory', 'UserService', function ($rootScope, $q, DatabaseFactory, UserService) {

        function guidGenerator() {
            var S4 = function () {
                return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
            };
            return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
        }

        return {

            newQuestion: function (Title, Body, Username, Rating, Datetime, Categories, UserPicture) {

                function throwError(errorMessage) {

                    $rootScope.global.errorInModalOcurred(errorMessage);
                    throw new RegExp(errorMessage);
                }

                function question(Title, Body, Username, Rating, Datetime, Categories, UserPicture) {

                    this.title = Title || throwError("The title cannot be empty");
                    this.body = Body || throwError("The body canot be empty");
                    this.username = Username;
                    this.rating = Rating || 0;
                    this.datetime = Datetime || new Date().toDateString();
                    this.categories = Categories || throwError("You must input at least one category");
                    this.userpicture = UserPicture || "images/profile-placeholder.jpg";
                    this.id = guidGenerator();
                }


                //i used this system just to save time and not use a database in the server since i dont know much about ruby or rails..in production case I would use only one method of course to save on server calls

                var qq = new question(Title, Body, Username, Rating, Datetime, Categories, UserPicture);

                DatabaseFactory.getQuestions().getQuestions({},
                    function (data) {

                        $rootScope.global.questions = JSON.parse((data.result != "" ? data.result : []));

                        $rootScope.global.questions.push(qq);

                        DatabaseFactory.updateQuestions().updateQuestions({
                            questions: JSON.stringify($rootScope.global.questions),
                            token: UserService.currentUser.token
                        },
                        function (data2) {

                            $rootScope.global.questions = JSON.parse(data2.result);
                            console.log("database updated");
                        },
                        function (error2) {
                            console.log(error2);
                        })

                    },
                    function (error) {
                        console.log(error);
                    })

            },

            deleteQuestion: function (id) {
                //i used this system just to save time and not use a database in the server since i dont know much about ruby or rails..in production case I would use only one method of course to save on server calls

                DatabaseFactory.getQuestions().getQuestions({},
                    function (data) {

                        $rootScope.global.questions = JSON.parse((data.result != "" ? data.result : []));

                        var found = false;

                        for (var i = 0; i < $rootScope.global.questions.length ; i++) {

                            var qq = $rootScope.global.questions[i];

                            if (qq.id == id) {

                                $rootScope.global.questions.splice(i, 1);
                                found = true;
                            }
                        }

                        //if we are in debug mode lets not delete questions on the server :)
                        if (!$rootScope.global.debugMode) {
                            if (found) {

                                DatabaseFactory.updateQuestions().updateQuestions({
                                    questions: JSON.stringify($rootScope.global.questions),
                                    token: UserService.currentUser.token
                                },
                                function (data2) {
                                    debugger
                                    $rootScope.global.questions = JSON.parse(data2.result);
                                    console.log("database updated");
                                },
                                function (error2) {
                                    console.log(error2);
                                })
                            }
                        }
                    },
                    function (error) {
                        console.log(error);
                    })
            },

            likeQuestion: function (id) {
                //i used this system just to save time and not use a database in the server since i dont know much about ruby or rails..in production case I would use only one method of course to save on server calls

                DatabaseFactory.getQuestions().getQuestions({},
                    function (data) {

                        $rootScope.global.questions = JSON.parse((data.result != "" ? data.result : []));

                        var found = false;

                        for (var i = 0; i < $rootScope.global.questions.length ; i++) {

                            var qq = $rootScope.global.questions[i];

                            if (qq.id == id) {

                                qq.rating += 1;
                                found = true;
                            }
                        }

                        //if we are in debug mode lets not delete questions on the server :)
                        if (!$rootScope.global.debugMode) {
                            if (found) {

                                DatabaseFactory.updateQuestions().updateQuestions({
                                    questions: JSON.stringify($rootScope.global.questions),
                                    token: UserService.currentUser.token
                                },
                                function (data2) {

                                    $rootScope.global.questions = JSON.parse(data2.result);
                                    console.log("database updated");
                                },
                                function (error2) {
                                    console.log(error2);
                                })
                            }
                        }
                    },
                    function (error) {
                        console.log(error);
                    })
            }


        };
    }])

},{}],21:[function(require,module,exports){
angular.module('Filters', []);

},{}],22:[function(require,module,exports){

require('./app.js');

require('./controllers.js');
require('./services.js');
require('./directives.js');
require('./factories.js');
require('./filters.js');


require('../../templates/compiledhtml.js')
},{"../../templates/compiledhtml.js":26,"./app.js":1,"./controllers.js":2,"./directives.js":6,"./factories.js":17,"./filters.js":21,"./services.js":23}],23:[function(require,module,exports){
angular.module('Services', []);

require('./services/user.js');
require('./services/categories.js');
},{"./services/categories.js":24,"./services/user.js":25}],24:[function(require,module,exports){
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

},{}],25:[function(require,module,exports){
angular.module('Services')
    .service('UserService', ['$rootScope', '$resource', function ($rootScope,  $resource) {

        function user(Username, Picture, Token, Email) {
            this.username = Username;
            this.picture = Picture;
            this.token = Token;
            this.email = Email;
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

},{}],26:[function(require,module,exports){
angular.module('odigoapp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('public/templates/directives/answer.html',
    "<div ng-show=\"showerror\" class=\"ui error form segment\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"teal ui button\">B</div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('public/templates/directives/application-manager.html',
    "\r" +
    "\n" +
    "<div ng-controller=\"MainController\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <error:manager></error:manager>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div ng-if=\"model.userService.currentUser != null\" class=\"ui fluid vertical steps\">\r" +
    "\n" +
    "        <a class=\"step\">\r" +
    "\n" +
    "            <img ng-src=\"{{model.userService.currentUser.picture}}\" class=\"ui avatar image\">\r" +
    "\n" +
    "            <div class=\"title\">Hello {{model.userService.currentUser.username}}</div>\r" +
    "\n" +
    "            <div class=\"content\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <div ng-show=\"model.userService.currentUser.isAdmin\" class=\"description\">You are an admin!</div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </a>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"ui hidden divider\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <login ng-if=\"model.userService.currentUser == null\"></login>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div ng-click=\"global.showNewQuestionModal()\" class=\"ui labeled button\">Add question</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div ng-if=\"model.userService.currentUser != null && model.userService.currentUser.isAdmin\" ng-click=\"global.showNewCategoryModal()\" class=\"ui right fullscreen demo button\">Add Category</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <new:question:manager></new:question:manager>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <new:category:manager></new:category:manager>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"ui center aligned segment\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"ui horizontal divider\">Top question of the community</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <question ng-repeat=\"question in global.questions | orderBy:'-rating' | limitTo: 1\"></question>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"ui horizontal divider\">Other questions by the community</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <question ng-repeat=\"question in  global.questions\"></question>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <reply></reply>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('public/templates/directives/error.html',
    "<div ng-show=\"model.showerror\" class=\"ui error form segment\">\r" +
    "\n" +
    "    <div class=\"ui error message\">\r" +
    "\n" +
    "        <div class=\"header\">An error has ocurred</div>\r" +
    "\n" +
    "        <p>{{model.errorMessage}}</p>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('public/templates/directives/login.html',
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div ng-click=\"login()\" class=\"ui labeled   google plus button\">\r" +
    "\n" +
    "    <i class=\"google plus icon\"></i>\r" +
    "\n" +
    "    Login with google plus\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('public/templates/directives/modals/error-modal.html',
    "<div ng-show=\"model.showErrorModal\" class=\"ui error form segment\">\r" +
    "\n" +
    "    <div class=\"ui error message\">\r" +
    "\n" +
    "        <div class=\"header\">An error has ocurred</div>\r" +
    "\n" +
    "        <p>{{model.errorModalMessage}}</p>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('public/templates/directives/modals/new-category-modal.html',
    "<div class=\"ui fullscreen modal\" style=\"top: 3408px;\">\r" +
    "\n" +
    "    <i class=\"close icon\"></i>\r" +
    "\n" +
    "    <div class=\"header\">\r" +
    "\n" +
    "        Add a new category\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"content\">\r" +
    "\n" +
    "        <div class=\"ui form\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <modal:error:manager></modal:error:manager>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <h4 class=\"ui dividing header\">Input the name of your category</h4>\r" +
    "\n" +
    "            <div class=\"ui corner labeled input\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <input ng-model=\"model.categoryName\" type=\"text\" placeholder=\"Required Field\">\r" +
    "\n" +
    "                <div class=\"ui corner label\">\r" +
    "\n" +
    "                    <i class=\"asterisk icon\"></i>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"select2-actions-override\">\r" +
    "\n" +
    "        <div ng-click=\"addCategory()\" class=\"ui blue button\">Add</div>\r" +
    "\n" +
    "        <div ng-click=\"cancelAddCategory()\" class=\"ui button\">Cancel</div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('public/templates/directives/modals/new-question-modal.html',
    "<div class=\"ui fullscreen modal\" style=\"top: 3408px;\">\r" +
    "\n" +
    "    <i class=\"close icon\"></i>\r" +
    "\n" +
    "    <div class=\"header\">\r" +
    "\n" +
    "        Add a new question\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"content\">\r" +
    "\n" +
    "        <div class=\"ui form\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <modal:error:manager></modal:error:manager>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <h4 class=\"ui dividing header\">Title for your question</h4>\r" +
    "\n" +
    "            <div class=\"ui corner labeled input\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <input ng-model=\"model.title\" type=\"text\" placeholder=\"Required Field\">\r" +
    "\n" +
    "                <div class=\"ui corner label\">\r" +
    "\n" +
    "                    <i class=\"asterisk icon\"></i>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div class=\"field\">\r" +
    "\n" +
    "                <label>Description</label>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <textarea ng-model=\"model.body\"></textarea>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <label>Select a category</label>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <input type=\"text\" placeholder=\"Category\" id=\"categorySelector\" multiple=\"\" tabindex=\"-1\" style=\"width:500px\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"select2-actions-override\">\r" +
    "\n" +
    "        <div ng-click=\"addQuestion()\" class=\"ui blue button\">Add</div>\r" +
    "\n" +
    "        <div ng-click=\"cancelAddQuestion()\" class=\"ui button\">Cancel</div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('public/templates/directives/new-category-manager.html',
    "\r" +
    "\n" +
    "<div ng-controller=\"CategoryController\" >\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <new:category:modal></new:category:modal>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('public/templates/directives/new-question-manager.html',
    "\r" +
    "\n" +
    "<div ng-controller=\"QuestionController\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <new:question:modal></new:question:modal>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('public/templates/directives/question.html',
    "<div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"ui hidden divider\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div ng-if=\"$index > 0\" class=\"ui horizontal divider\"> {{model.question.datetime}}</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"header\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <a class=\"user\">\r" +
    "\n" +
    "            {{model.question.username}}\r" +
    "\n" +
    "        </a>\r" +
    "\n" +
    "        <img ng-src=\"{{model.question.userpicture}}\" class=\"ui avatar image\">\r" +
    "\n" +
    "        {{model.question.title}}\r" +
    "\n" +
    "        <a ng-if=\"model.UserService.currentUser != null && model.UserService.currentUser.isAdmin\" ng-click=\"global.deleteQuestion(model.question.id)\" class=\"ui top right attached red button \">\r" +
    "\n" +
    "            <i class=\" black  \">DELETE </i>\r" +
    "\n" +
    "        </a>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"ui hidden divider\"></div>\r" +
    "\n" +
    "    <div class=\"description\">\r" +
    "\n" +
    "        {{model.question.body}}\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"ui hidden divider\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div ng-if=\"model.UserService.currentUser != null\" ng-click=\"global.likeQuestion(model.question.id)\" class=\"mini ui blue button\">\r" +
    "\n" +
    "        <i class=\"like icon\"></i>\r" +
    "\n" +
    "        Like\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"ui hidden divider\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div ng-repeat=\"category in model.question.categories\" class=\"ui  mini button\">\r" +
    "\n" +
    "        {{category}}\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>"
  );

}]);

},{}]},{},[22]);
