(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

////////////////////////////////////////////////////////////
// App
////////////////////////////////////////////////////////////

var App = angular.module('odigoapp', ['ngRoute', 'Directives', 'Controllers', 'Factories', 'Filters']);

////////////////////////////////////////////////////////////
// CONFIG
////////////////////////////////////////////////////////////
//inject name of controller inside every controller
var global = {};


App.run(function ($rootScope) {
    //if scope is not available
    $rootScope.global = global;
});
},{}],2:[function(require,module,exports){
angular.module('Controllers', []);

require('./controllers/dummy.js');
},{"./controllers/dummy.js":3}],3:[function(require,module,exports){
angular.module('Controllers')
    .controller('DummyController', ['$scope', '$filter',
    function ($scope, $filter) {

        console.log($scope.global);
        console.log("asd");
        $scope.something = "asd";

    }]);
},{}],4:[function(require,module,exports){
angular.module('Directives', []);

require('./directives/dummy.js');

},{"./directives/dummy.js":5}],5:[function(require,module,exports){
angular.module('Directives')
    .directive('dummy', ['$filter', function ($filter) {
        return {
            restrict: 'E',
            template: '<div>dummy</div>',
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
},{}],6:[function(require,module,exports){
angular.module('Factories', []);

require('./factories/dummy.js');

},{"./factories/dummy.js":7}],7:[function(require,module,exports){
angular.module('Factories')

    .factory('dummy', ['$rootScope', '$q', function($rootScope) {
        return {
		    dummy: function () {
			//dummy
			}
        };
    }])

},{}],8:[function(require,module,exports){
angular.module('Filters', []);

},{}],9:[function(require,module,exports){

require('./app.js');

require('./controllers.js');
require('./directives.js');
require('./factories.js');
require('./filters.js');


require('../../templates/compiledhtml.js')
},{"../../templates/compiledhtml.js":10,"./app.js":1,"./controllers.js":2,"./directives.js":4,"./factories.js":6,"./filters.js":8}],10:[function(require,module,exports){
angular.module('odigoapp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('WEBSITE/templates/pages/index.html',
    "<!DOCTYPE html>\r" +
    "\n" +
    "<html>\r" +
    "\n" +
    "<head>\r" +
    "\n" +
    "    <!-- Standard Meta -->\r" +
    "\n" +
    "    <meta charset=\"utf-8\" />\r" +
    "\n" +
    "    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\" />\r" +
    "\n" +
    "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "    icon-stackoverflow\r" +
    "\n" +
    "    <title>Feed Example - Semantic</title>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <link rel=\"stylesheet\" type=\"text/css\" href=\"./styles/build/main.css\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <!-- Semantics has a requirement for jquery to do its effects -->\r" +
    "\n" +
    "    <script src=\"http://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.js\"></script>\r" +
    "\n" +
    "    <script src=\"http://cdnjs.cloudflare.com/ajax/libs/jquery.address/1.6/jquery.address.js\"></script>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <script src=\"./js/build/lib.js\"></script>\r" +
    "\n" +
    "    <script src=\"./js/build/main.js\"></script>\r" +
    "\n" +
    "</head>\r" +
    "\n" +
    "<body id=\"feed\" ng-app=\"odigoapp\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div ng-controller=\"DummyController\">\r" +
    "\n" +
    "        {{something}}\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"ui large inverted vertical sidebar menu\">\r" +
    "\n" +
    "        <a class=\"active item\">\r" +
    "\n" +
    "            Dogs Weekly <span class=\"ui label\">213</span>\r" +
    "\n" +
    "        </a>\r" +
    "\n" +
    "        <a class=\"item\">\r" +
    "\n" +
    "            Joystiq <span class=\"ui label\">113</span>\r" +
    "\n" +
    "        </a>\r" +
    "\n" +
    "        <div class=\"item\">\r" +
    "\n" +
    "            <b>Archived Feeds</b>\r" +
    "\n" +
    "            <div class=\"menu\">\r" +
    "\n" +
    "                <a class=\"item\">\r" +
    "\n" +
    "                    Engadget <span class=\"ui label\">11</span>\r" +
    "\n" +
    "                </a>\r" +
    "\n" +
    "                <a class=\"item\">\r" +
    "\n" +
    "                    NY Times Tech Blog <span class=\"ui label\">21</span>\r" +
    "\n" +
    "                </a>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <a class=\"item\">\r" +
    "\n" +
    "            <i class=\"bookmark icon\"></i> Favorites\r" +
    "\n" +
    "        </a>\r" +
    "\n" +
    "        <div class=\"ui dropdown item\">\r" +
    "\n" +
    "            <i class=\"add icon\"></i> New\r" +
    "\n" +
    "            <div class=\"menu\">\r" +
    "\n" +
    "                <a class=\"item\"><i class=\"rss icon\"></i> Feed</a>\r" +
    "\n" +
    "                <a class=\"item\"><i class=\"tag icon\"></i> Tag</a>\r" +
    "\n" +
    "                <a class=\"item\"><i class=\"folder icon\"></i> Group</a>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"ui divided two column padded grid\">\r" +
    "\n" +
    "        <div class=\"left column\">\r" +
    "\n" +
    "            <div class=\"ui left floated launch icon button\">\r" +
    "\n" +
    "                <i class=\"sidebar icon\"></i>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"ui right floated launch primary button\">\r" +
    "\n" +
    "                <i class=\"mail icon\"></i> Compose\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"ui secondary pointing filter menu\">\r" +
    "\n" +
    "                <a class=\"active red item\" data-tab=\"unread\">Unread</a>\r" +
    "\n" +
    "                <a class=\"blue item\" data-tab=\"saved\">Saved</a>\r" +
    "\n" +
    "                <a class=\"green item\" data-tab=\"all\">All</a>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"ui active tab\" data-tab=\"unread\">\r" +
    "\n" +
    "                <div class=\"ui very relaxed divided link list\">\r" +
    "\n" +
    "                    <a class=\"item\">\r" +
    "\n" +
    "                        <div class=\"left floated ui star rating\">\r" +
    "\n" +
    "                            <i class=\"icon\"></i>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"right floated date\">Sep 14, 2013</div>\r" +
    "\n" +
    "                        <div class=\"description\">Scientists discover new breed of dog</div>\r" +
    "\n" +
    "                    </a>\r" +
    "\n" +
    "                    <a class=\"active item\">\r" +
    "\n" +
    "                        <div class=\"left floated ui star rating\">\r" +
    "\n" +
    "                            <i class=\"icon\"></i>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"right floated date\">Sep 14, 2013</div>\r" +
    "\n" +
    "                        <div class=\"description\">Weekly Webcomic Wrapup fought the law, and the law won</div>\r" +
    "\n" +
    "                    </a>\r" +
    "\n" +
    "                    <a class=\"item\">\r" +
    "\n" +
    "                        <div class=\"left floated ui star rating\">\r" +
    "\n" +
    "                            <i class=\"icon\"></i>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"right floated date\">Sep 10, 2013</div>\r" +
    "\n" +
    "                        <div class=\"description\">Dogs colony in Antarctica</div>\r" +
    "\n" +
    "                    </a>\r" +
    "\n" +
    "                    <a class=\"item\">\r" +
    "\n" +
    "                        <div class=\"left floated ui star rating\">\r" +
    "\n" +
    "                            <i class=\"icon\"></i>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"right floated date\">Sep 09, 2013</div>\r" +
    "\n" +
    "                        <div class=\"description\">Famous dog whisperer Chakotay dies today at 104</div>\r" +
    "\n" +
    "                    </a>\r" +
    "\n" +
    "                    <a class=\"item\">\r" +
    "\n" +
    "                        <div class=\"left floated ui star rating\">\r" +
    "\n" +
    "                            <i class=\"icon\"></i>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"right floated date\">Sep 07, 2013</div>\r" +
    "\n" +
    "                        <div class=\"description\">Top 10 Things to Know about Labradoodles</div>\r" +
    "\n" +
    "                    </a>\r" +
    "\n" +
    "                    <a class=\"item\">\r" +
    "\n" +
    "                        <div class=\"left floated ui star rating\">\r" +
    "\n" +
    "                            <i class=\"icon\"></i>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"right floated date\">Sep 05, 2013</div>\r" +
    "\n" +
    "                        <div class=\"description\">Study shows children enjoy the company of animals</div>\r" +
    "\n" +
    "                    </a>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"ui tab\" data-tab=\"saved\">\r" +
    "\n" +
    "                <div class=\"ui very relaxed divided link list\">\r" +
    "\n" +
    "                    <a class=\"item\">\r" +
    "\n" +
    "                        <div class=\"left floated ui star rating\">\r" +
    "\n" +
    "                            <i class=\"icon\"></i>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"right floated date\">Sep 14, 2013</div>\r" +
    "\n" +
    "                        <div class=\"description\">Your favorite saved article</div>\r" +
    "\n" +
    "                    </a>\r" +
    "\n" +
    "                    <a class=\"item\">\r" +
    "\n" +
    "                        <div class=\"left floated ui star rating\">\r" +
    "\n" +
    "                            <i class=\"icon\"></i>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"right floated date\">Sep 14, 2013</div>\r" +
    "\n" +
    "                        <div class=\"description\">Your favorite saved article</div>\r" +
    "\n" +
    "                    </a>\r" +
    "\n" +
    "                    <a class=\"item\">\r" +
    "\n" +
    "                        <div class=\"left floated ui star rating\">\r" +
    "\n" +
    "                            <i class=\"icon\"></i>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"right floated date\">Sep 14, 2013</div>\r" +
    "\n" +
    "                        <div class=\"description\">Your favorite saved article</div>\r" +
    "\n" +
    "                    </a>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"ui tab\" data-tab=\"all\">\r" +
    "\n" +
    "                <div class=\"ui very relaxed divided link list\">\r" +
    "\n" +
    "                    <a class=\"item\">\r" +
    "\n" +
    "                        <div class=\"left floated ui star rating\">\r" +
    "\n" +
    "                            <i class=\"link icon\"></i>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"right floated date\">Sep 14, 2013</div>\r" +
    "\n" +
    "                        <div class=\"description\">There turns out there is only one article under all.</div>\r" +
    "\n" +
    "                    </a>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <div class=\"ui divider\"></div>\r" +
    "\n" +
    "            <div class=\"current\">Showing <b>6</b> of 213</div>\r" +
    "\n" +
    "            <div class=\"ui text menu\">\r" +
    "\n" +
    "                <a class=\"icon item\"><i class=\"icon left chevron\"></i></a>\r" +
    "\n" +
    "                <a class=\"active item\">1</a>\r" +
    "\n" +
    "                <div class=\"disabled item\">...</div>\r" +
    "\n" +
    "                <a class=\"item\">10</a>\r" +
    "\n" +
    "                <a class=\"item\">11</a>\r" +
    "\n" +
    "                <a class=\"item\">12</a>\r" +
    "\n" +
    "                <a class=\"icon item\"><i class=\"icon right chevron\"></i></a>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"right column\">\r" +
    "\n" +
    "            <h1 class=\"ui header\">Weekly Webcomic Wrapup fought the law, and the law won</h1>\r" +
    "\n" +
    "            <a class=\"ui label\">Unread</a>\r" +
    "\n" +
    "            <a class=\"ui label\">Comics</a>\r" +
    "\n" +
    "            <div class=\"ui divider\"></div>\r" +
    "\n" +
    "            <p>So there's this video game coming out Tuesday called Grand Theft Auto 5. Don't know if you've heard of it. Anyways, it's all about crime and gangs and some roughneck ne'er-do-wells, so I thought this would be the perfect time to talk about times when we've been... well, less than perfect.</p>\r" +
    "\n" +
    "            <p>When I was a young'un, I was a frequent visitor to the local swimming pool. I was also a frequent lover of AirHeads candy, which the pool happened to sell. Waiting, watching, stalking the counter like a big cat in the savannah, I waited for the perfect opportunity to strike. While the lifeguards were busy, I snuck through the gate, reached up and took both cherry and \"mystery white\" AirHeads. I quickly ran out to the sidewalk and reveled in my sweet, delicious victory... for all of ten seconds, before I felt guilty enough to sneak back in and return the .20 worth of candy I had stolen.</p>\r" +
    "\n" +
    "            <p>While you confess your crimes - hopefully minor, and nothing you can be persecuted for - take a moment to enjoy this week's webcomics, and vote for your favorite after the jump.</p>\r" +
    "\n" +
    "            <div class=\"ui divider\"></div>\r" +
    "\n" +
    "            <div class=\"ui basic button\">Save</div>\r" +
    "\n" +
    "            <div class=\"ui basic button\">Delete</div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</body>\r" +
    "\n" +
    "</html>"
  );

}]);

},{}]},{},[9]);
