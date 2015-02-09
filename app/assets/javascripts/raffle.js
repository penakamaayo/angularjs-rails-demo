raffler_app = angular.module('raffler_app', ['ngResource']);

raffler_app.controller('RaffleCtrl', function ($scope, $resource) {
  Entry = $resource('/entries/:id', {id: '@id'}, {update: 'PUT'});

  $scope.entries = Entry.query();

  $scope.addEntry = function() {
    entry = Entry.save($scope.newEntry);
    $scope.entries.push(entry);
    $scope.newEntry = {};
  }

  $scope.drawWinner = function($event) {
    $event.preventDefault();

    pool = []

    angular.forEach($scope.entries, function(entry) {
      if(!entry.winner) {
        pool.push(entry);
      }
    });

    if(pool.length > 0) {
      entry = pool[Math.floor(Math.random() * pool.length)]
      entry.winner = true;
      entry.$update();
      $scope.lastWinner = entry
    }

  }
});

