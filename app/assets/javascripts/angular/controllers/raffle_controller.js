raffler_app.controller('RaffleCtrl', ['$scope', 'Entry', function($scope, Entry) {
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
      $scope.lastWinner = entry;
    }

  }

  $scope.resetWinners = function($event) {
    $event.preventDefault();

    angular.forEach($scope.entries, function(entry) {
      entry.winner = false;
      entry.$update();
    });
  }


  $scope.deleteEntry = function($event, entry) {
    $event.preventDefault();

    var index = $scope.entries.indexOf(entry);
    $scope.entries.splice(index, 1);
    entry.$remove();
  }

}]);

