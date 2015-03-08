describe('Controllers', function () {

    beforeEach(module('odigoapp'));

    ////////////////////////////////////////////////////////////
    // MainController
    ////////////////////////////////////////////////////////////

    describe('MainController', function () {

        var scope, controller;

        beforeEach(inject(function ($rootScope, $compile, $controller) {

            if (scope === undefined) {

                scope = $rootScope.$new();
                controller = $controller('MainController', { $scope: scope });

            }

        }));

        it('quesitons are initialized', function () {

            expect(scope.global).not.toBeNull();

        });

        it('user service exists', function () {

            expect(scope.model.userService).not.toBeNull();

        });

    });

    ////////////////////////////////////////////////////////////
    // QuestionController
    ////////////////////////////////////////////////////////////

    describe('QuestionController', function () {

        var scope, controller;

        beforeEach(inject(function ($rootScope, $compile, $controller) {

            if (scope === undefined) {

                scope = $rootScope.$new();
                controller = $controller('QuestionController', { $scope: scope });

            }

        }));

        it('check that delete question method exists', function () {

            expect(scope.global.deleteQuestion).not.toBeNull();

        });


    });


});