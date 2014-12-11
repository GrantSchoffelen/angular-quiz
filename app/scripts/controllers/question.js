'use strict';

/**
 * @ngdoc function
 * @name quizApp.controller:QuestionCtrl
 * @description
 * # QuestionCtrl
 * Controller of the quizApp
 */
angular.module('quizApp')
  .controller('QuestionCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    
    $scope.checkAnswer = function(question, val) {
      // check if the given val matches the answer
     // console.log("question: ", question)
      if (!question.answered) {
        question.answered = true;
     
        if (question.answer === val) {
          //$scope.points += 10;
          $scope.$emit('MyEvent', 10)
        } else {
          // $scope.points -= 10;
          $scope.$emit('MyEvent', -10)
        }
      }

    };
})

