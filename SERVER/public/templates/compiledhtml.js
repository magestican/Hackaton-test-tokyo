angular.module('odigoapp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('templates/directives/answer.html',
    "<div ng-show=\"showerror\" class=\"ui error form segment\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"teal ui button\">B</div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('templates/directives/application-manager.html',
    "\r" +
    "\n" +
    "<div ng-controller=\"MainController\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div ng-if=\"model.userService.currentUser != null\">Hello {{model.userService.currentUser.username}}  <div ng-show=\"model.userService.currentUser.isAdmin\"> You are an admin!</div> </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <login ng-if=\"model.userService.currentUser == null\"></login>\r" +
    "\n" +
    "    <error:manager></error:manager>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <new:question></new:question>\r" +
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
    "        <question ng-repeat=\"question in global.questions | orderBy:rating | limitTo: 1\"></question>\r" +
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
    "</div>"
  );


  $templateCache.put('templates/directives/error.html',
    "<div ng-show=\"model.showerror\" class=\"ui error form segment\">\r" +
    "\n" +
    "    <div class=\"ui error message\">\r" +
    "\n" +
    "        <div class=\"header\">{{model.errorMessage}}</div>\r" +
    "\n" +
    "        <p>Error message long description</p>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('templates/directives/login.html',
    "<div>\r" +
    "\n" +
    " \r" +
    "\n" +
    "    <div ng-click=\"login()\" class=\"ui google plus button\">\r" +
    "\n" +
    "        <i class=\"google plus icon\"></i>\r" +
    "\n" +
    "        Login with google plus\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('templates/directives/new-question.html',
    "<div ng-controller=\"QuestionController\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('templates/directives/question.html',
    "<div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"header\">\r" +
    "\n" +
    "        <img ng-src=\"{{model.question.userpicture}}\" class=\"ui avatar image\">\r" +
    "\n" +
    "        {{model.question.title}}\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"description\">\r" +
    "\n" +
    "        {{model.question.body}}\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>"
  );

}]);
