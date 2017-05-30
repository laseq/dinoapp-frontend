angular
  .module('dinoApp')
  .factory('Dinosaur', Dinosaur);

Dinosaur.$inject = ['$resource', 'API'];
function Dinosaur($resource, API) {
  return $resource(`${API}/dinosaurs/:id`,
    { id: '@_id' },
    {
      'update': { method: 'PUT' }
    }
  );
}
