'use strict';

/**
 * @ngdoc function
 * @name countriesApp.controller:CountryCtrl
 * @description
 * # CountryCtrl
 * Controller of the countriesApp
 */
var capp = angular.module('countriesApp');
capp.service('saveComment', function () {
  this.sfunc = function ($scope, coun, comm) {
    localStorage.setItem(coun, $scope.myComment);
  }
  this.check = function ($scope, coun) {
    $scope.coun = coun;
    if (localStorage.getItem(coun)) {
      $scope.commen = localStorage.getItem(coun);
      return true;
    } else
      return false;
  }
});
capp.controller('CountryCtrl', ['$scope', '$http', '$routeParams', 'saveComment', function ($scope, $http, $routeParams, saveComment) {
  $http.get("https://restcountries.eu/rest/v2/name/" + $routeParams.country).then(function (response) {
    $scope.country = response.data[0];
  })
  $scope.coun = "";
  $scope.myFunction = function (coun, comm) {
    saveComment.sfunc($scope, coun, comm);
  }
  $scope.checkComm = function (coun) {
    return saveComment.check($scope, coun);
  }
}]);
