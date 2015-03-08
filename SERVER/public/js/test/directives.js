describe('Directives', function () {

    beforeEach(module('odigoapp'));

    ////////////////////////////////////////////////////////////
    // LETS CHECK THE ANSWER DIRECTIVE EXISTS AND ITS TEMPLATE..
    ////////////////////////////////////////////////////////////

    describe('answer', function () {

        var scope, directive;

        beforeEach(inject(function ($rootScope, $controller, $compile) {

            var html;

            if (scope === undefined) {

                html = [
                    '<div ng-show="showerror" class="ui error form segment">',
                    '<div class="teal ui button">B</div>',
                    , '</div>'
                ].join('');

                scope = $rootScope.$new();
                directive = $compile(html)(scope);

            }

        }));



    });

});