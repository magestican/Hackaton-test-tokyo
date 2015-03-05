angular.module('Factories')

    .factory('QuestionFactory', ['$rootScope', '$q', function ($rootScope, $q) {
        return {

            newQuestion: function (Title, Body, Username, Rating, Datetime, Categories, UserPicture) {

                function question(Title, Body, Username, Rating, Datetime, Categories, UserPicture) {

                    this.title = Title || $rootScope.global.errorOcurred("The title cannot be empty");
                    this.body = Body || $rootScope.global.errorOcurred("The body canot be empty");
                    this.username = Username;
                    this.rating = Rating || 0;
                    this.datetime = Datetime || new Date().toDateString();
                    this.categories = Categories || $rootScope.global.errorOcurred("You must input at least one category");
                    this.userpicture = UserPicture || "images/profile-placeholder.jpg";
                }

                return new question(Title, Body, Username, Rating, Datetime, Categories, UserPicture);
            }


        };
    }])
