angular.module('Factories')

    .factory('QuestionFactory', ['$rootScope', '$q', 'DatabaseFactory', 'UserService', function ($rootScope, $q, DatabaseFactory, UserService) {
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
                }


                //i used this system just to save time and not use a database in the server since i dont know much about ruby or rails..in production case I would use only one method of course to save on server calls

                var qq = new question(Title, Body, Username, Rating, Datetime, Categories, UserPicture);

                DatabaseFactory.getQuestions().getQuestions({},
                    function (data) {
                        debugger
                        $rootScope.global.questions = JSON.parse((data.result != "" ? data.result : []));

                        $rootScope.global.questions.push(qq);

                        DatabaseFactory.updateQuestions().updateQuestions({
                            questions: JSON.stringify($rootScope.global.questions),
                            token: UserService.currentUser.token
                        },
                        function (data2) {

                            $rootScope.global.questions = JSON.parse(data2.result);
                            console.log("database updated");
                        })

                    })






            }


        };
    }])
