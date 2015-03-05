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
    "    <error:manager></error:manager>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div ng-if=\"model.userService.currentUser != null\">Hello {{model.userService.currentUser.username}}  <div ng-show=\"model.userService.currentUser.isAdmin\"> You are an admin!</div> </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <login ng-if=\"model.userService.currentUser == null\"></login>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <new:question ></new:question>\r" +
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
    "        <div class=\"header\">An error has ocurred</div>\r" +
    "\n" +
    "        <p>{{model.errorMessage}}</p>\r" +
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


  $templateCache.put('templates/directives/new-question-modal.html',
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
    "            <h4 class=\"ui dividing header\">Title for your question</h4>\r" +
    "\n" +
    "\r" +
    "\n" +
    "            <div class=\"ui corner labeled input\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <input type=\"text\" placeholder=\"Required Field\">\r" +
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
    "                <textarea></textarea>\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <label>Select a category</label>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "                <input type=\"text\" placeholder=\"Category\" id=\"categorySelector\" multiple=\"\" style=\"width:500px\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"actions\">\r" +
    "\n" +
    "        <div class=\"ui button\">Cancel</div>\r" +
    "\n" +
    "        <div class=\"ui green button\">Add</div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('templates/directives/new-question.html',
    "\r" +
    "\n" +
    "<div ng-controller=\"QuestionController\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <new:question:modal></new:question:modal>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div ng-click=\"global.showNewQuestionModal()\" class=\"ui fullscreen demo button\">Add question</div>\r" +
    "\n" +
    "\r" +
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
