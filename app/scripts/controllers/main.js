'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
  .controller('MainCtrl', ['$scope', '$filter', function ($scope, $filter) {
      var orderBy = $filter('orderBy');
      $scope.clubes = [{
        pos: 1,
        nombre: "Estudiantes de La Plata",
        puntos: 13,
        j:8,
        g:3,
        e:4,
        p:0
    },
    {
        pos: 2,
        nombre: "Gimansia de La Plata",
        puntos: 10,
        j:8,
        g:1,
        e:7,
        p:0
    }];
      $scope.order = function(predicate) {
          $scope.predicate = predicate;
          $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
          $scope.clubes = orderBy($scope.clubes, predicate, $scope.reverse);
      };
      $scope.order('puntos', true);
  }])
    .directive('orderToggle', function() {
        return {
            scope: {
                order: '@order',
                predicate: '=',
                reverse: '=',
            },
            templateUrl: 'views/order-toggle.html'
        };
    });
;
