'use strict';

/**
 * @ngdoc function
 * @name quizApp.controller:QuizCtrl
 * @description
 * # QuizCtrl
 * Controller of the quizApp
 */
angular.module('quizApp')
	.controller('QuizCtrl', function($scope) {
		var ctrl = this;
		this.timeRemaining = 10000;
		setInterval(function() {
			if (timerOn === true) {
				ctrl.timeRemaining--
			} else if (timerOn === false) {
				ctrl.timeRemaining = ctrl.timeRemaining
			}
			$scope.$apply();
		}, 1000)

		$scope.toggle = function() {

			if (timerOn) {
				timerOn = false
			} else {
				timerOn = true;
			}
		}

var timerOn = false;




		this.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];
		this.quiz = [{
			'q': 'Who is the best ping pong player at FSA?',
			'options': [{
				'value': 'Mike'
			}, {
				'value': 'Eddie'
			}, {
				'value': 'Nimit'
			}, {
				'value': 'Patrick'
			}],
			'answer': 'Nimit',
			'difficulty': 8,
			'answered': false
		}, {
			'q': 'Which robot name was chanted during Lego Mindstorms?',
			'options': [{
				'value': 'infiniteLoop'
			}, {
				'value': 'noHope.js'
			}, {
				'value': 'johnny5'
			}, {
				'value': 'none of the above'
			}],
			'answer': 'noHope.js',
			'difficulty': 5,
			'answered': false
		}, {
			'q': 'Out of the following frontend frameworks, which framework is most rails-like',
			'options': [{
				'value': 'Ember.js'
			}, {
				'value': 'Angular.js'
			}, {
				'value': 'Backbone.js'
			}, {
				'value': 'Meteor.js'
			}],
			'answer': 'Ember.js',
			'difficulty': 1,
			'answered': false
		}, {
			'q': 'Which project used a local data store?',
			'options': [{
				'value': 'TripPlanner'
			}, {
				'value': 'Twitter.js'
			}, {
				'value': 'WikiWalker'
			}, {
				'value': 'WikiStack'
			}],
			'answer': 'Twitter.js',
			'difficulty': 7,
			'answered': false
		}];

		$scope.nextQuestion = {
			options: [{}, {}, {}, {}]
		};

		$scope.points = 0;


		$scope.someFunctionThatDoesntExistYet = function() {
			// push the newly created question and its options
			$scope.quiz.push($scope.nextQuestion);
			// zero out nextQuestion by making a new blank one
			$scope.nextQuestion = {
				options: [{}, {}, {}, {}]
			};
		};

		$scope.$on('MyEvent', function(event, paramPoints) {
			$scope.points += paramPoints;
		})


	});