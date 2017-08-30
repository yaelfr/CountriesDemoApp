'use strict';

/**
 * @ngdoc function
 * @name countriesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the countriesApp
 */
var capp=angular.module('countriesApp');
  capp.controller('MainCtrl', ['$scope', '$http', 'saveComment', function ($scope, $http, saveComment) {
    $http.get("https://restcountries.eu/rest/v2/all").then(function (response) {
      $scope.countries = response.data;

    })
    $scope.propertyName = 'name';
    $scope.reverse = false;

    $scope.sortBy = function (propertyName) {
      $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
      $scope.propertyName = propertyName;
    };
    $scope.checkComm = function (coun) {
      return saveComment.check($scope, coun);
    }
  }]);
  capp.controller('RegionCtrl', ['$scope', '$http', '$routeParams', 'saveComment', function($scope, $http, $routeParams, saveComment) {
    $http.get("https://restcountries.eu/rest/v2/region/" + $routeParams.reg).then(function(response) {
        $scope.countries = response.data;
    })
    $scope.propertyName = 'name';
    $scope.reverse = false;
 
    $scope.sortBy = function(propertyName) {
        $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
        $scope.propertyName = propertyName;
    };
    $scope.checkComm = function(coun) {
        return saveComment.check($scope, coun);
    }
}]);

