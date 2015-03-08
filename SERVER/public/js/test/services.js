"use strict";
describe("Services", function () {


    var userService;

    beforeEach(module("odigoapp"));

    beforeEach(inject(function (_UserService_) {
        userService = _UserService_;
    }));

    it("that the user is initialized as null when the app starts", function () {

        expect(userService.currentUser).toEqual(null);
    });



});