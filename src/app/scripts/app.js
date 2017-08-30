'use strict';

/**
 * @ngdoc overview
 * @name countriesApp
 * @description
 * # countriesApp
 *
 * Main module of the application.
 */
angular
  .module('countriesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/country/:country', {
        templateUrl: 'views/country.html',
        controller: 'CountryCtrl',
        controllerAs: 'country'
      })
      .when('/region/:reg', {
        templateUrl: 'views/main.html',
        controller: 'RegionCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
    
  });
