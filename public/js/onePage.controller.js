var pageController = angular.module('pageController', ['ngRoute']).config(function($routeProvider){
	$routeProvider.when('/text-content', {
        templateUrl: 'text-content.html'
    });
    $routeProvider.otherwise({redirectTo:'text-content'});
});