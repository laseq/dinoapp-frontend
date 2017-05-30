angular
  .module('dinoApp')
  .controller('DinosaursShowCtrl', DinosaursShowCtrl);

DinosaursShowCtrl.$inject = ['$stateParams', 'Dinosaur'];
function DinosaursShowCtrl($stateParams, Dinosaur){
  const vm = this;

  vm.dinosaur = Dinosaur.get($stateParams);
}
