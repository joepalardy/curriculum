'use strict';

/* Controllers */

angular.module('curriculumApp.controllers', []).
  controller('CourseListCtrl', ['$scope', '$http',
	function ($scope, $http){
  		$http.get('courses/courses.json').success(function (data) {
   		 $scope.courses = data;
 	 });
    $scope.orderProp = 'courseCode';
  }])
  .controller('MyCtrl2', [function() {

  }]);