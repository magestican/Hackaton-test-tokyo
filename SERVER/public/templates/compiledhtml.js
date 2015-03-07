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
    "    <div class=\"ui hidden divider\"></div>\r" +
    "\n" +
    "    <div class=\"mini ui blue button\">\r" +
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
    "</div>"
  );

}]);
