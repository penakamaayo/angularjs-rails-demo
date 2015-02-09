raffler_app.factory('Entry', ['$resource', function($resource){
  return $resource('/entries/:id', {id: '@id'}, {update: {method: 'PUT'}});
}]);
